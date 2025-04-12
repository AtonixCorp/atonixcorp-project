
from django.contrib import admin
from django.urls import path, include
from AtonixCorp import views
from .views import get_data, home, get_careers, serve_react_app

urlpatterns = [
    path('admin/', admin.site.urls), 
    path('', views.home, name='home'),  # Route for the homepage
    path('company/careers/', get_careers, name='get_careers'),  # Careers API
    path('data/', get_data, name='get_data'),  # Data API
    path('about/', views.about, name='about'),  # About page
    path('', serve_react_app, name='react_app'),  # React app
]