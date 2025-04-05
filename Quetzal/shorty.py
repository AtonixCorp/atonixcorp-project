# shorty.py

import os
import redis
from urllib.parse import urlparse
from werkzeug.wrappers import Request, Response
from werkzeug.routing import Map, Rule
from werkzeug.exceptions import HTTPException, NotFound
from werkzeug.middleware.shared_data import SharedDataMiddleware
from werkzeug.utils import redirect
from jinja2 import Environment, FileSystemLoader

class Shortly(object):

    def __init__(self, config):
        # Initialize the Redis client
        self.redis = redis.Redis(
            config['redis_host'], config['redis_port'], decode_responses=True
        )
        template_path = os.path.join(os.path.dirname(__file__), 'templates')
        # Initialize the Jinja2 environment for template rendering
        self.jinja_env = Environment(loader=FileSystemLoader(template_path),
                                     autoescape=True)
        # Define URL routing rules
        self.url_map = Map([
            Rule('/', endpoint='new_url'),
            Rule('/<short_id>', endpoint='follow_short_link'),
            Rule('/<short_id>+', endpoint='short_link_details')
        ])

    def render_template(self, template_name, **context):
        # Render a template with the given context
        t = self.jinja_env.get_template(template_name)
        return Response(t.render(context), mimetype='text/html')

    def dispatch_request(self, request):
        # Dispatch the request to the appropriate endpoint
        adapter = self.url_map.bind_to_environ(request.environ)
        try:
            endpoint, values = adapter.match()
            return getattr(self, f'on_{endpoint}')(request, **values)
        except HTTPException as e:
            return e

    def wsgi_app(self, environ, start_response):
        # Wrap the WSGI application
        request = Request(environ)
        response = self.dispatch_request(request)
        return response(environ, start_response)

    def __call__(self, environ, start_response):
        return self.wsgi_app(environ, start_response)

    def on_new_url(self, request):
        error = None
        url = ''
        if request.method == 'POST':
            url = request.form['url']
            if not is_valid_url(url):
                error = 'Please enter a valid URL'
            else:
                short_id = self.insert_url(url)
                return redirect(f"/{short_id}+")
        return self.render_template('new_url.html', error=error, url=url)

    def on_follow_short_link(self, request, short_id):
        link_target = self.redis.get(f'url-target:{short_id}')
        if link_target is None:
            raise NotFound()
        self.redis.incr(f'click-count:{short_id}')
        return redirect(link_target)

    def on_short_link_details(self, request, short_id):
        link_target = self.redis.get(f'url-target:{short_id}')
        if link_target is None:
            raise NotFound()
        click_count = int(self.redis.get(f'click-count:{short_id}') or 0)
        return self.render_template('short_link_details.html',
            link_target=link_target,
            short_id=short_id,
            click_count=click_count
        )

def is_valid_url(url):
    # Validate the URL to ensure it uses HTTP or HTTPS
    parts = urlparse(url)
    return parts.scheme in ('http', 'https')

def insert_url(self, url):
    # Insert a new URL into Redis
    short_id = self.redis.get(f'reverse-url:{url}')
    if short_id is not None:
        return short_id
    url_num = self.redis.incr('last-url-id')
    short_id = base36_encode(url_num)
    self.redis.set(f'url-target:{short_id}', url)
    self.redis.set(f'reverse-url:{url}', short_id)
    return short_id

def base36_encode(number):
    # Encode a number in base 36
    assert number >= 0, 'positive integer required'
    if number == 0:
        return '0'
    base36 = []
    while number != 0:
        number, i = divmod(number, 36)
        base36.append('0123456789abcdefghijklmnopqrstuvwxyz'[i])
    return ''.join(reversed(base36))

def create_app(redis_host='localhost', redis_port=6379, with_static=True):
    # Create the Shortly app
    app = Shortly({
        'redis_host': redis_host,
        'redis_port': redis_port
    })
    if with_static:
        app.wsgi_app = SharedDataMiddleware(app.wsgi_app, {
            '/static': os.path.join(os.path.dirname(__file__), 'static')
        })
    return app
