from django.urls import path
from .views import index, DeviceDataList, DeviceDataDetail

urlpatterns = [
    path('', index, name='telemetry_home'),
    path('devices/', DeviceDataList.as_view(), name='device_list'),
    path('devices/<int:pk>/', DeviceDataDetail.as_view(), name='device_detail'),
]