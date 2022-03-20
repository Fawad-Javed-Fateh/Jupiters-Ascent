from django.shortcuts import render
from django.http import JsonResponse
import joblib
import json
import pandas as pd 
model=joblib.load('modelPipeline.pkl')
# Create your views here.

def scoreJSON(request):
    print(request.body)
    data=json.loads(request.body)
    dataFrame=pd.DataFrame({'x':data}).transpose()
    score=model.predict_proba(dataFrame)[:,-1][0]
    score=float(score)
    print(score)
    return JsonResponse({'score':score})

def scoreFile(request):
    return JsonResponse({'score':1})
