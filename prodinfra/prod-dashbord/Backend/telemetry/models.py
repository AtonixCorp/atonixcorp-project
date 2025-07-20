from django.db import models

# Create your models here.
class DeviceData(models.Model):
    device_id = models.CharField(max_length=100)
    temperature = models.FloatField()
    status = models.CharField(max_length=50)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.device_id} - {self.status} at {self.timestamp}"
    class Meta:
        verbose_name = 'Device Data'
        verbose_name_plural = 'Device Data Records'
        ordering = ['-timestamp']