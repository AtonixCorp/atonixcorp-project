from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Service
from .serializers import ServiceSerializer

class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

    @action(detail=True)
    def metrics(self, request, pk=None):
        # TODO: real metrics
        return Response({'uptime': '72h', 'requests_per_minute': 120})

    @action(detail=True)
    def logs(self, request, pk=None):
        return Response([])

   