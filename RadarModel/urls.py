"""RadarModel URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from re import template
from django.contrib import admin
from django.urls import path,re_path
from firstPage import views
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import TemplateView

urlpatterns = [
    #AUTHOR NAME: Fawad J.Fateh
    #DATE OF GENERATION: 16/5/2022
    #DATE OF LAST REVISION: 25/5/2022
    #VERSION: 3.0
    path('admin/', admin.site.urls),#This function fetches the request to serve admin page
    path('scoreJSON',csrf_exempt(views.scoreJSON),name='Score Application'),#This function fetches the scoreJSON request and calls  the scoreJSON function 
    path('scoreFile',csrf_exempt(views.scoreFile),name='Score File'),#This function fetches the scoreFile request and  calls the scoreFile function        
    path('saveSelected',csrf_exempt(views.saveSelected),name='Save Selected'),#This function fetches the saveSelected request and cals the saveSelected function
    re_path('.*',TemplateView.as_view(template_name='index.html'))#This function fetches the default home request and serves index.html 
]
