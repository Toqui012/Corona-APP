from django.urls import path, include
from . import views


urlpatterns = [
    path('',views.index, name='index'),
    path('/map', views.map, name='map'),
    path('upload',views.uploadData, name='uploadData'), 
    path('send/',views.send, name='send'),
    path('envio/',views.envio, name='envio'),
]
