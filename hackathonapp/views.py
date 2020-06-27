from django.shortcuts import render
from django.template.context_processors import request
from django.urls import reverse
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import redirect
from hackathonapp.models import news, errorTable, district, commune, activesCases, reports, deathsbyDistrict, reportDate
from django.db.models import Avg, Max, Min, Sum, Count
from django.views.generic import ListView
from django.views.generic import TemplateView
#Datos de fechas.
from datetime import datetime


#Carga de datos y archivos
import csv
import numpy as np
import pandas as pd
import codecs
import urllib.request
import _json
from pip._vendor import requests
from chartjs.views.lines import BaseLineChartView

#Envio mensajes whatsapp
from twilio.rest import Client

def index(request):
    mostrar = True
    try:
        dia = reportDate.objects.all().order_by('-RDDate')[:3]

    except reportDate.DoesNotExist:
        mostrar = False
    if dia:
        try:
            diaanterior = int(reports.objects.filter(RDate=dia[1].RDDate).aggregate(Sum('RConfirmed'))['RConfirmed__sum'])
        except reports.DoesNotExist:
            mostrar = False
        try:
            dosAntes = int(reports.objects.filter(RDate=dia[2].RDDate).aggregate(Sum('RConfirmed'))['RConfirmed__sum'])
        except reports.DoesNotExist:
            mostrar = False
        try:
            Confirmados = int(reports.objects.filter(RDate=dia[0].RDDate).aggregate(Sum('RConfirmed'))['RConfirmed__sum'])
        except reports.DoesNotExist:
            mostrar = False

        try:
            ConfirmRepAnterior = int(reports.objects.filter(RDate=dia[1].RDDate).aggregate(Sum('RConfirmed'))['RConfirmed__sum'])
        except reports.DoesNotExist:
            mostrar = False

        try:
            Activos = int(reports.objects.filter(RDate=dia[0].RDDate).aggregate(Sum('RActive'))['RActive__sum'])
        except reports.DoesNotExist:
            mostrar = False

        try:
            ActivosRepAnterior = int(reports.objects.filter(RDate=dia[1].RDDate).aggregate(Sum('RActive'))['RActive__sum'])
        except reports.DoesNotExist:
            mostrar = False
        try:
            TotalFallecidosDiaAnterior = int(deathsbyDistrict.objects.filter(
                DDate=dia[1].RDDate).aggregate(Sum('Ddeaths'))['Ddeaths__sum'])
        except deathsbyDistrict.DoesNotExist:
            mostrar = False

        try:
            TotalFallecidos = int(deathsbyDistrict.objects.filter(
                DDate=dia[0].RDDate).aggregate(Sum('Ddeaths'))['Ddeaths__sum'])
        except deathsbyDistrict.DoesNotExist:
            mostrar = False
            
        Nuevos = Confirmados - diaanterior
        # Totales
        TotActives = Activos
        TotNuevos = Nuevos
        TotContagiados = Confirmados
        TotalRecuperados = Confirmados - Activos
        TotalRecuperadosRepAnterior = ConfirmRepAnterior - ActivosRepAnterior

        # Table, Trae los Top 10 del ultimo dia del reporte
        try:
            table = reports.objects.filter(
                RDate=dia[0].RDDate).order_by('-RConfirmed')[:10]
        except reports.DoesNotExist:
            mostrar = False
    else:
        mostrar = False
    
    if mostrar:
        return render(request, 'index.html',
            {
            'mostrar': mostrar,
            'activos': TotActives,
            'nuevos': TotNuevos,
            'contagiados': TotContagiados,
            'totfallecidos': TotalFallecidos,
            'totrecuperados': TotalRecuperados,
            'tablas': table,
            })
    else:
        return render(request,'index.html',{
        'mostrar': False
        })
    return render(request,'index.html')

def map(request):
    return render(request,'map.html')
        
def grafico(request):
    return render(request,'grafico.html')


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

def send(request):
    return render(request, 'envio.html')

def envio(request):
# Download the helper library from https://www.twilio.com/docs/python/install
# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
    account_sid = 'ACa8e51c3cb4f19e0493695e9ae86f52b9'
    auth_token = '45d7f57bdca7561cd639b30749be6b92'
    client = Client(account_sid, auth_token)
    
    if request.method == 'POST':
        msg1 = request.POST.get('msg')
        fono = request.POST.get('fono')
        fono = 'whatsapp:'+fono

    message = client.messages.create(
                            body=msg1,
                            from_='whatsapp:+13196006357',
                            to=fono
                        )
    return redirect('index')

class LineChartJSONView(BaseLineChartView):
    def get_labels(self):
        x_ax = []

        queryset = reportDate.objects.all().order_by('-RDDate')[:25]

        for i in reversed(queryset):
            x_ax.append(i.RDDate)

        return x_ax

    def get_providers(self):

        reg = []
        regiones = district.objects.all().order_by('Codregion')

        for k in regiones:
            reg.append(k.RegionName)
        return reg
    

    def get_data(self):
        dias = reportDate.objects.all().order_by('-RDDate')[:25]
        valores = []
        for i in reversed(dias):
            queryset = reports.objects.values('RComuna__Reg').filter(
                RDate=i.RDDate).annotate(Tot_Region=Sum('RConfirmed')).order_by('RComuna__Reg')
            valores.append(queryset)
        largo = int(len(valores))
        ancho = int(len(valores[1]))
        datos = np.arange((largo*ancho), dtype=np.int64).reshape(largo, ancho)
        for i in range(0, largo):
            cont= 0
            g = valores[i]
            for j in g:
                datos[i][cont] = j['Tot_Region']
                cont = cont + 1
        datos = datos.transpose()
        return datos.tolist()

# line_chart = TemplateView.as_view(template_name='')
# line_chart_json = LineChartJSONView.as_view()



# class LineChartJSONView(BaseLineChartView):
#     def get_labels(self):
#         """Return 7 labels for the x-axis."""
#         return ["January", "February", "March", "April", "May", "June", "July"]

#     def get_providers(self):
#         """Return names of datasets."""
#         return ["Central", "Eastside", "Westside"]

#     def get_data(self):
#         """Return 3 datasets to plot."""

#         return [[75, 44, 92, 11, 44, 95, 35],
#                 [41, 92, 18, 3, 73, 87, 92],
#                 [87, 21, 94, 3, 90, 13, 65]]


line_chart = TemplateView.as_view(template_name='line_chart.html')
line_chart_json = LineChartJSONView.as_view()



