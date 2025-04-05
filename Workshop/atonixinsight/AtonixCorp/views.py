from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import HttpResponse
import os


# Rendered views
def home(request):
    return render(request, 'home.html')

def about(request):
    return render(request, 'about.html')

def contact(request):
    return render(request, 'contact.html')

def services(request):
    return render(request, 'services.html')

def careers(request):
    return render(request, 'careers.html')  # Ensure 'careers.html' exists in your templates directory

# API views
@api_view(['GET'])
def get_careers(request):
    careers = [
        {"id": 1, "title": "Software Engineer", "location": "Remote"},
        {"id": 2, "title": "Product Manager", "location": "Cape Town"}
    ]
    return Response(careers)

@api_view(['GET'])
def get_data(request):
    data = {
        "users": [
            {"id": 1, "name": "Alice", "email": "alice@example.com"},
            {"id": 2, "name": "Bob", "email": "bob@example.com"}
        ]
    }
    return Response(data)

@api_view(['GET'])
def get_services(request):
    services = [
        {"id": 1, "name": "Consulting"},
        {"id": 2, "name": "Development"},
        {"id": 3, "name": "Support"}
    ]
    return Response(services)

# Serve React app
def serve_react_app(request):
    build_path = os.path.join('AtonixCorpApp', 'build', 'index.html')
    with open(build_path, 'r') as f:
        return HttpResponse(f.read())
