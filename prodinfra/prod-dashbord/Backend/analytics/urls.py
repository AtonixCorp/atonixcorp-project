# analytics/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='analytics_home'),
]