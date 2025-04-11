
set -e


echo "Updating package lists and installing system dependencies..."
sudo apt-get update
sudo apt-get install -y python3-pip python3-venv

echo "Creating and activating virtual environment..."
python3 -m venv venv
source venv/bin/activate

echo "Installing Python dependencies..."
pip install --upgrade pip
pip install -r requirements.txt


echo "Running database migrations..."
python manage.py migrate


echo "Collecting static files..."
python manage.py collectstatic --noinput

echo "Starting the application..."
gunicorn your_project_name.wsgi:application --bind 0.0.0.0:8000

echo "Deployment completed successfully!"