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
      #AUTHOR NAME: Fawad J.Fateh
      #DATE OF GENERATION: 15/5/2022
      #DATE OF LAST REVISION: 15/5/2022
      #VERSION: 1.1
        path = os.path.join(os.path.dirname(__file__), 'static', filename)

        if os.path.isfile(path):
            with open(path, 'rb') as file:
                return HttpResponse(file.read(), content_type='application/javascript')
        else:
            return HttpResponseNotFound()




model=joblib.load('modelPipeline.pkl') #import model from pickle file 
# Create your views here.

def scoreJSON(request):
    #AUTHOR NAME: Fawad J.Fateh
    #DATE OF GENERATION: 15/5/2022
    #DATE OF LAST REVISION: 18/5/2022
    #VERSION: 2.1
    data=json.loads(request.body) #load data from http request into a variable 
    print('uuuu')
    print(data)
    dataFrame=pd.DataFrame({'x':data}).transpose()#convert data into a pandas dataframe
    score=model.predict_proba(dataFrame)[:,-1][0]#Send the required parameters to the predict_proba function of the model to get probability score 
    score=float(score)
    print(score)
    return JsonResponse({'score':score})#return probabilty score as a JSON http response 

def saveSelected(request):
    #AUTHOR NAME: Fawad J.Fateh
    #DATE OF GENERATION: 25/5/2022
    #DATE OF LAST REVISION: 25/5/2022
    #VERSION: 1.1
    data=json.loads(request.body)
    print("here")
    print(data['ID'])
    dataframe=pd.read_csv('media/'+data['selectFile'])
    print(dataframe.head())
    selectedRow=dataframe[dataframe['Loan_ID']== data['ID']]
    selectedRow = selectedRow.iloc[: , 0:]
    with open('output/output.csv', 'a') as f:
        selectedRow.to_csv(f, header=f.tell()==0)
    jsonRow=selectedRow.to_json(orient='split')
    print(jsonRow)
    return JsonResponse({'rowData':jsonRow})

def scoreFile(request):
    #AUTHOR NAME: Fawad J.Fateh
    #DATE OF GENERATION: 15/5/2022
    #DATE OF LAST REVISION: 19/5/2022
    #VERSION: 2.1
    fileObj=request.FILES['filePath']#fetch the uploaded file name from http request
    fs=FileSystemStorage()# initialise a file storage object
    ### The next three lines basically resolve the file name from url and http request body and fetches it from the media folder on the server
    filePathName=fs.save(fileObj.name,fileObj)
    filePathName=fs.url(filePathName)
    filePath='.'+filePathName
    ###
    data =pd.read_csv(filePath)#reading file data into a pandas dataframe 
    score=model.predict_proba(data)[:,-1]# sending batch data of dataframe to the predict proba function to get probability scores  
    score={j:k for j,k in zip(data['Loan_ID'],score)}#concatenating loan ID and probaility score columns together 
    score =sorted(score.items(),key=lambda x: x[1],reverse=True)#sorting based on probabilty scores in descending order

    return JsonResponse({'result':score})#returning the scores in a http JSON response 


