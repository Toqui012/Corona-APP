from django.contrib import admin
from hackathonapp.models import news, errorTable, district, commune, activesCases, reports, deathsbyDistrict, reportDate

# Register your models here.

@admin.register(news)
class newsAdmin(admin.ModelAdmin):
    list_display = ('titular','descripcion','fuente')

@admin.register(errorTable)
class errorAdmin(admin.ModelAdmin):
    list_display = ('idError','Error')

@admin.register(district)
class districtAdmin(admin.ModelAdmin):
    list_display = ('Codregion', 'RegionName', 'Area', 'Lat', 'Long', 'Population')

@admin.register(commune)
class communeAdmin(admin.ModelAdmin):
    list_display = ('CodComuna', 'Reg', 'ComunaName', 'Poblation')

@admin.register(reports)
class reportsAdmin(admin.ModelAdmin):
    list_display = ('RDate','RComuna','RConfirmed','RActive', 'RRecovered')

@admin.register(activesCases)
class activesCasesAdmin(admin.ModelAdmin):
    list_display = ('AcCod_comuna', 'AcDate','AcCantidad')


@admin.register(deathsbyDistrict)
class deathsporRegionAdmin(admin.ModelAdmin):
    list_display = ('DDate', 'DCodRegion','Ddeaths')


@admin.register(reportDate)
class reportDateAdmin(admin.ModelAdmin):
    list_display = ('id','RDDate')
