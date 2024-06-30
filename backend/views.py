from django.shortcuts import render
from django.http import HttpResponse
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

# Create your views here.
@csrf_exempt
def index(request):
    if request.method == "GET":
        return render(request, "app/index.html")
    
    elif request.method == "POST":
        request_body = json.loads(request.body.decode('utf-8'))
        JsonResponse({ "body" : request_body })
        
    else:
        return HttpResponse(403)