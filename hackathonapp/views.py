from django.shortcuts import render
from django.template.context_processors import request
from django.urls import reverse
from django.http import HttpResponse, HttpResponseRedirect

# Create your views here.


def index(request):
    return render(request,'index.html')

def map(request):
    return render(request,'map.html')
