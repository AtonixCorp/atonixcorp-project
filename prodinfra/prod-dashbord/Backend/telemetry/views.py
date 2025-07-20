from django.http import HttpResponse, JsonResponse
from django.views import View

# 🔹 Class-based views
class DeviceDataList(View):
    def get(self, request):
        return JsonResponse({"message": "List of device data"})

class DeviceDataDetail(View):
    def get(self, request, pk):
        return JsonResponse({"message": f"Details of device data {pk}"})

# 🔹 Functional view for homepage or testing
def index(request):
    return JsonResponse({"message": "Telemetry endpoint works."})