import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def index(request):
    return JsonResponse({"message": "Analytics endpoint works."})

@csrf_exempt
def get_analytics(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            # TODO: Process the analytics data here (e.g., save to database)
            return JsonResponse({"status": "success", "data": data})
        except json.JSONDecodeError:
            return JsonResponse({"status": "error", "message": "Invalid JSON"}, status=400)
    return JsonResponse({"status": "error", "message": "Invalid request method"}, status=405)