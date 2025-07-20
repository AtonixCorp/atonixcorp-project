from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index, name='service_monitor_home'),
    path('admin/', admin.site.urls),
    path('api/services/', include('service_monitor.urls')),
]