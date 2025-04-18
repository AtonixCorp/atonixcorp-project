import os
from flask import Flask
from shorty import create_app
from db_config import db, app  # Import db setup from the separate file

# Initialize Shortly application
shortly_app = create_app()

if __name__ == '__main__':
    from werkzeug.serving import run_simple
    run_simple('127.0.0.1', 5000, shortly_app, use_debugger=True, use_reloader=True)