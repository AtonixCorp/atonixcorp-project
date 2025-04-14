#!/bin/bash

# Start SSH service
service ssh start

# Start Redis server
service redis-server start

# Start MariaDB server
service mysql start

# Start PostgreSQL server
service postgresql start

# Wait for PostgreSQL to be ready
until pg_isready -h ${DB_HOST:-localhost} -p ${DB_PORT:-5432} -U ${DB_USER:-postgres}; do
  echo "Waiting for PostgreSQL to start..."
  sleep 2
done
echo "PostgreSQL is ready."

# Start Nginx server
service nginx start

# Start Jupyter Notebook and JupyterLab
jupyter notebook --ip=0.0.0.0 --port=8888 --no-browser --allow-root &
jupyter lab --ip=0.0.0.0 --port=8888 --no-browser --allow-root &

# Start the Python application
python /app/Workshop/Quetzal/app.py &

# Start the Go application
/app/go-dqlite-demo &

# Keep the container running
tail -f /dev/null