from rest_framework import serializers
from .models import DeviceData

class DeviceDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = DeviceData
        fields = '__all__'

        read_only_fields = ('timestamp',)
        extra_kwargs = {
            'device_id': {'validators': []},  # Disable unique validation for device_id
        }
