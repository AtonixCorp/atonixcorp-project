#!/bin/bash

# Start Gunicorn
gunicorn --workers 3 --bind 0.0.0.0:8082 atonixcore.wsgi:application &

# Start Django Development Server
python /app/atonixcore/manage.py runserver 0.0.0.0:8082
