from django.db import models

class Service(models.Model):
    name = models.CharField(max_length=255)
    status = models.CharField(max_length=50)
    # add any other fields you need

    def __str__(self):
        return self.name