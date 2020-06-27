from django.shortcuts import render
from django.template.context_processors import request
from django.urls import reverse
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import redirect
from hackathonapp.models import news, errorTable, district, commune, activesCases, reports, deathsbyDistrict, reportDate
#Datos de fechas.
from datetime import datetime


#Carga de datos y archivos
import csv
import numpy as np
import pandas as pd
import codecs
import urllib.request
from pip._vendor import requests

def index(request):
    return render(request,'index.html')

def uploadData(request):
    urlAPI = 'https://chile-coronapi.herokuapp.com/api/v3/models/regions'
    response = requests.get(urlAPI)
    if response.status_code == 200:
        response_json = response.json()
        for key in response_json:
            if int(key) < 10:
                llave = '0'+key
            else:
                llave = key
            _, created = district.objects.get_or_create(
                Codregion=llave,
                RegionName=response_json[key]['region'],
                Area=response_json[key]['area'],
                Lat=response_json[key]['lat'],
                Long=response_json[key]['long'],
                Population=response_json[key]['population']
            )

    urlcommune = 'https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/output/producto1/Covid-19.csv'
    ftpfile = urllib.request.urlopen(urlcommune)
    csvfile = csv.reader(codecs.iterdecode(ftpfile, 'utf-8'))
    bandera = 0
    for column in csvfile:
        if bandera > 0:
            if len(column[4]) is not 0:
                _, created = commune.objects.get_or_create(
                    Reg=district.objects.get(Codregion=column[1]),
                    ComunaName=column[2],
                    CodComuna=column[3],
                    Poblation=column[4]
                )
        bandera = bandera + 1

    urlActive = 'https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/output/producto19/CasosActivosPorComuna.csv'

    ftpfile = urllib.request.urlopen(urlActive)
    csvfile = csv.reader(codecs.iterdecode(ftpfile, 'utf-8'))
    df = pd.DataFrame(csvfile)
    ancho = int(len(df.columns))
    largo = int(len(df))
    for i in range(5, ancho):
        for j in range(1, largo):
            if len(df[3][j]) is not 0:
                if len(df[i][j]) is 0:
                    dato = 0
                else:
                    dato = float(df[i][j])
                _, created = activesCases.objects.get_or_create(
                    AcDate=df[i][0],
                    AcCod_comuna=commune.objects.get(CodComuna=df[3][j]),
                    AcCantidad=dato
                )

    url = 'https://raw.githubusercontent.com/jorgeperezrojas/covid19-data/master/csv/muertes.csv'
    ftpfile = urllib.request.urlopen(url)
    csvfile = csv.reader(codecs.iterdecode(ftpfile, 'utf-8'))
    df = pd.DataFrame(csvfile)
    ancho = int(len(df.columns))
    largo = int(len(df))

    for i in range(2, ancho):
        for j in range(1, largo):

            if len(df[i][j]) is 0:
                dato = 0
            else:
                dato = df[i][j]

            if len(df[0][j]) < 2:
                reg = '0'+df[0][j]
            else:
                reg = df[0][j]

            date = datetime.strptime(
                df[i][0], '%m/%d/%Y').strftime('%Y-%m-%d')

            _, created = deathsbyDistrict.objects.get_or_create(
                DDate=date,
                DCodRegion=district.objects.get(Codregion=reg),
                Ddeaths=float(dato)
            )

    urlreports = 'https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/output/producto1/Covid-19.csv'
    ftpfile = urllib.request.urlopen(urlreports)
    csvfile = csv.reader(codecs.iterdecode(ftpfile, 'utf-8'))
    df = pd.DataFrame(csvfile)
    ancho = int(len(df.columns)) - 1
    largo = int(len(df))

    for i in range(5, ancho):
        for j in range(1, largo):

            if len(df[3][j]) is not 0:
                if len(df[i][j]) is 0:
                    dato = 0
                else:
                    dato = df[i][j]
                try:
                    actives = activesCases.objects.get(
                        AcCod_comuna=df[3][j], AcDate=df[i][0]).AcCantidad
                except activesCases.DoesNotExist:
                    actives = float(0)

                try:
                    recovered = activesCases.objects.get(
                        AcCod_comuna=df[3][j], AcDate=df[i][0]).AcCantidad - float(dato)
                except activesCases.DoesNotExist:
                    recovered = float(0)

                _, created = reportDate.objects.get_or_create(
                    RDDate=df[i][0])

                _, created = reports.objects.get_or_create(
                    RDate=df[i][0],
                    RComuna=commune.objects.get(CodComuna=df[3][j]),
                    RConfirmed=float(dato),
                    RActive=float(actives),
                    RRecovered=abs(recovered),
                )

    return redirect('index')