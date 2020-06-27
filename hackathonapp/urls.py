from django.urls import path, include
from . import views


urlpatterns = [
    path('',views.index, name='index'),
<<<<<<< HEAD
    path('/map', views.map, name='map'),
    path('upload',views.uploadData, name='uploadData'), 
    path('send/',views.send, name='send'),
    path('envio/',views.envio, name='envio'),
=======
    path('',views.LineChartJSONView, name='line_chart_json'),
    path('upload',views.uploadData, name='uploadData'),
    path('chart', views.line_chart, name='line_chart'),
    path('chartJSON', views.line_chart_json, name='line_chart_json'),
    path('grafico',views.grafico, name='grafico'),
>>>>>>> datos_templateA
]
