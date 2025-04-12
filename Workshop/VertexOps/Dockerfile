
FROM python:3.11-slim

WORKDIR /app


RUN apt-get update && apt-get install -y \
    pkg-config \
    default-libmysqlclient-dev \
    build-essential


COPY requirements.txt /app/


RUN pip install --no-cache-dir -r requirements.txt

COPY . /app/


EXPOSE 5678

CMD ["gunicorn", "AtonixCorp.wsgi:application", "--bind", "0.0.0.0:8000"]