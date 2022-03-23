from django.shortcuts import render
from django.http import JsonResponse
import joblib
import json
import pandas as pd 
from django.core.files.storage import FileSystemStorage
from django.shortcuts import render





from django.views import View
from django.http import HttpResponse, HttpResponseNotFound
import os

# The viewsets base class provides the implementation for CRUD operations by default,
# what we had to do was specify the serializer class and the query set.


# Add this CBV
class Assets(View):

    def get(self, _request, filename):
        path = os.path.join(os.path.dirname(__file__), 'static', filename)

        if os.path.isfile(path):
            with open(path, 'rb') as file:
                return HttpResponse(file.read(), content_type='application/javascript')
        else:
            return HttpResponseNotFound()
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
    fileObj=request.FILES['filePath']
    fs=FileSystemStorage()
    filePathName=fs.save(fileObj.name,fileObj)
    filePathName=fs.url(filePathName)
    filePath='.'+filePathName
    data =pd.read_csv(filePath)
    score=model.predict_proba(data)[:,-1]
    score={j:k for j,k in zip(data['Loan_ID'],score)}
    score =sorted(score.items(),key=lambda x: x[1],reverse=True)
    return JsonResponse({'result':score})
