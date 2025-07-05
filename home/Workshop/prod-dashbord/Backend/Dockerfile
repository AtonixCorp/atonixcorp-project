FROM python:3.11-slim

WORKDIR /app

RUN apt-get update && apt-get install -y \
    pkg-config \
    default-libmysqlclient-dev \
    build-essential \
    libssl-dev \
    libffi-dev \
    curl \
    netcat-openbsd \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Copy requirements file
COPY requirements.txt /app/

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

COPY . /app/

# Expose the application port
EXPOSE 5567

# Set the default command to run the application
CMD ["gunicorn", "AtonixCorp.wsgi:application", "--bind", "0.0.0.0:5000", "--workers", "3", "--timeout", "120"]