from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.

def scoreJSON(request):
    return JsonResponse({'score':1})

def scoreFile(request):
    return JsonResponse({'score':1})
