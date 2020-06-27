from django.shortcuts import render
from django.template.context_processors import request
from django.urls import reverse
from django.http import HttpResponse, HttpResponseRedirect
from hackathonapp.models import news, errorTable, district, commune, activesCases, reports, deathsbyDistrict, reportDate

def index(request):
    return render(request,'index.html')

