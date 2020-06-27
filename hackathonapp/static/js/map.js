var miubicacion;
var nuevo;
var platform = new H.service.Platform({
    apikey: '8wRjfyRQSBy-mdVvgco1UyP2aXlgZnB_Ty8M0reqL4w'
});

var defaultLayers = platform.createDefaultLayers();
var ui,  behavior;
var marker;
var inter = 0;
var flag = 0;

function initMap() 
{
    map = new H.Map(document.getElementById('map'),
  defaultLayers.vector.normal.map,{
  center: {lat:-36.4482543, lng:-75.209443},
  zoom: 4.85,
  pixelRatio: window.devicePixelRatio || 1});
  ui = H.ui.UI.createDefault(map, defaultLayers, 'es-ES');
  window.addEventListener('resize', () => map.getViewPort().resize());
  behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
}

function addInfoBubble(map, group) {
    group.addEventListener('tap', function (evt) {
      var bubble =  new H.ui.InfoBubble(evt.target.getGeometry(), {
        content: evt.target.getData()
      });
      ui.addBubble(bubble);
    }, false);
}

function addMarkerToGroup(group, coordinate,ico, html) {
    marker = new H.map.Marker(coordinate, {icon: ico});
    marker.setData(html);
    group.addObject(marker);
}


function actualizarPosicion(event) {
  
    miubicacion = {
        lat: event.coords.latitude,
        lng: event.coords.longitude
    };

    if(inter==0){
        map.setCenter(miubicacion);
        map.setZoom(14)
        inter=1;
    }
  
    nuevo = new H.map.Marker(miubicacion);
    addCircleToMap(map, miubicacion)
    // Comparo si la posicion cambio para eliminar el marcador, agrego nuevo marcador y guardo la posicion
    
    if(this.miubicacionMarker){
        map.removeObject(this.miubicacionMarker); 
    }     
  
    //AGREGO MARCADOR UBICACION ACTUAL
    map.addObject(nuevo);
  
    //GUARDO MARCADOR UBICACION ACTUAL
    this.miubicacionMarker = map.addObject(nuevo);
  }
  
  // Funcion que trae mis coordenadas
  
  function initGps(){
  
    navigator
    .geolocation
    .watchPosition(actualizarPosicion,erroNo,{maximumAge:0, timeout:30000, enableHighAccuracy:true});
    
    // Funcion de alerta sobre el GPS
    function erroNo(err) {
      console.warn('ERROR(' + err.code + '): ' + err.message);
    }
    }


function addCircleToMap(map, miubicacion){
    var gpsR = new H.map.Circle(
        // The central point of the circle
        miubicacion,
        // The radius of the circle in meters
        1000,
        {
        style: {
            strokeColor: 'rgba(255, 0, 0, 0.2)', // Color of the perimeter
            lineWidth: 2,
            fillColor: 'rgba(255, 0, 0, 0.2)'  // Color of the circle
            }
        }
    )
    if(flag == 1){
        map.removeObject(gpsR);
    }
    map.addObject(gpsR);
    flag= 1;
}

function showResidencias(){
    map.removeObject(articulos);
    map.addObject(residencia);
    map.setCenter({lat:-37.4482543, lng:-75.209443});
    map.setZoom(4.6)
}

function showArticulos(){
    map.removeObject(residencia);
    map.addObject(articulos);
}

