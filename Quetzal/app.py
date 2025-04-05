import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from shorty import create_app

app = Flask(__name__)

# Configure the SQLAlchemy part of the app instance
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', 'postgresql://admin:sf9x7ha2tcinn@localhost/atonixcorpvmdb')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Create the SQLAlchemy db instance
db = SQLAlchemy(app)

# Initialize Shortly application
shortly_app = create_app()

if __name__ == '__main__':
    from werkzeug.serving import run_simple
    run_simple('127.0.0.1', 5000, shortly_app, use_debugger=True, use_reloader=True)
