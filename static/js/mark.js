// RESIDENCIAS SANITARIAS

var resIco = new H.map.Icon('static/img/residencia.png');

var residencia = new H.map.Group();

addMarkerToGroup(residencia, {lat:-18.3640932, lng:-70.2075278},resIco,
    `<h1>Arica y Parinacota</h1>
    <div>Habitaciones disponibles: 267</div>
    <p>Correo: residenciasanitariaxv@redsalud.gob.cl</p>
    <p>Telefono: +569-68438309</p>`);
addMarkerToGroup(residencia, {lat:-20.2824899, lng:-69.4834131},resIco,
    `<h1>Tarapaca</h1>
    <div>Habitaciones disponible: 619</div>
    <p>Correo: residenciasanitarias1@redsalud.gob.cl</p>
    <p>Telefono: +569-94345428</p>`);    
addMarkerToGroup(residencia, {lat:-23.6283541, lng:-69.4747684},resIco,
    `<h1>Antofagasta</h1>
    <div>Habitaciones disponible: 285</div>
    <p>Correo: fiscacovid19afta@redsalud.gob.cl</p>
    <p>Telefono: +55-2655011</p>`);  
addMarkerToGroup(residencia, {lat:-27.4090548, lng: -70.0513973},resIco,
    `<h1>Atacama</h1>
    <div>Habitaciones disponible: 257</div>
    <p>Correo: residenciasatacama@redsalud.gob.cl</p>
    <p>Telefono: +569-39402449</p>`);  
addMarkerToGroup(residencia, {lat:-29.9704668, lng:-71.0037098},resIco,
    `<h1>Coquimbo</h1>
    <div>Habitaciones disponible: 452</div>
    <p>Correo: residenciascoquimbo@redsalud.gob.cl</p>
    <p>Telefono: +569-53331302</p>`);  
addMarkerToGroup(residencia, {lat:-33.0507066, lng: -71.6285581},resIco,
    `<h1>Valparaiso</h1>
    <div>Habitaciones disponible: 1091</div>
    <p>Correo: valporesidencias@redsalud.gob.cl</p>
    <p>Telefono: +569-39499618</p>`);  
addMarkerToGroup(residencia, {lat:-33.4713915, lng:-70.6293751},resIco,
    `<h1>Metropolitana</h1>
    <div>Habitaciones disponible: 3991</div>
    <p>Correo: residenciasrm@redsalud.gob.cl</p>
    <p>Telefono: +569-39499589</p>`);  
addMarkerToGroup(residencia, {lat:-34.4289419, lng:-71.5995922},resIco,
    `<h1>O'Higgins</h1>
    <div>Habitaciones disponible: 179</div>
    <p>Correo: residenciasanitaria6@redsalud.gob.cl</p>
    <p>Telefono: +569-32457844</p>`);  
addMarkerToGroup(residencia, {lat:-35.6274814, lng:-72.1092327},resIco,
    `<h1>Maule</h1>
    <div>Habitaciones disponible: 344</div>
    <p>Correo: infocovidmaule@redsalud.gob.cl</p>
    <p>Telefono: +569-61574126</p>`); 
addMarkerToGroup(residencia, {lat:-36.6020577, lng:-72.5072104},resIco,
    `<h1>Ñuble</h1>
    <div>Habitaciones disponible: 286</div>
    <p>Correo: residenciasnuble@redsalud.gob.cl</p>
    <p>Telefono: +569-422587178</p>`); 
addMarkerToGroup(residencia, {lat:-37.4619195, lng:-72.5979502},resIco,
    `<h1>BioBío</h1>
    <div>Habitaciones disponible: 733</div>
    <p>Correo: residenciassanitaria@redsalud.gob.cl</p>
    <p>Telefono: +569-412724484</p>`); 
addMarkerToGroup(residencia, {lat:-38.6069735, lng:-72.2956335},resIco,
    `<h1>Araucania</h1>
    <div>Habitaciones disponible: 347</div>
    <p>Correo: residencias9@redsalud.gob.cl</p>
    <p>Telefono: +569-452551307</p>`); 
addMarkerToGroup(residencia, {lat:-39.983173, lng:-73.2145624},resIco,
    `<h1>Los Ríos</h1>
    <div>Habitaciones disponible: 152</div>
    <p>Correo: residencia.losrios14@redsalud.gob.cl</p>
    <p>Telefono: +569-89203180</p>`); 
addMarkerToGroup(residencia, {lat:-42.1298074, lng:-73.4586235},resIco,
    `<h1>Los Lagos</h1>
    <div>Habitaciones disponible: 230</div>
    <p>Correo: residencialoslagos@redsalud.gob.cl</p>
    <p>Telefono: +569-57119314</p>`); 
addMarkerToGroup(residencia, {lat:-46.3758623, lng:-73.6277054},resIco,
    `<h1>Aysén</h1>
    <div>Habitaciones disponible: 23</div>
    <p>Correo: luis.rodriguez@redsalud.gob.cl</p>
    <p>Telefono: +569-672261805</p>`); 
addMarkerToGroup(residencia, {lat:-52.2032863, lng:-73.5575719},resIco,
    `<h1>Magallanes</h1>
    <div>Habitaciones disponible: 149</div>
    <p>Correo: residencia.sanitaria@redsalud.gob.cl</p>
    <p>Telefono: +569-65947075</p>`); 



// ARTICULOS DE SALUD
var artIco = new H.map.Icon('static/img/mascarilla.png');
var cliIco = new H.map.Icon('static/img/hospital.png');
var articulos = new H.map.Group();

// Santiago

addMarkerToGroup(articulos, {lat:-33.5082597, lng:-70.7768382},cliIco,
    `<h1>Hospital El Carmen Maipu</h1>
    <p>Abierto 24 horas</p>
    <p>hospitalelcarmen.cl</p>
    <p>(2)26120491</p>`); 
addMarkerToGroup(articulos, {lat:-33.4843302, lng:-70.6481917},cliIco,
    `<h1>Hospital Barros Luco Trudeau</h1>
    <p>Abierto 24 horas</p>
    <p>hospitalbarrosluco.cl</p>
    <p>(2)25763000</p>`); 
addMarkerToGroup(articulos, {lat:-33.416351, lng:-70.6551107},cliIco,
    `<h1>Hospital San José</h1>
    <p>Abierto 24 horas</p>
    <p>hospitalsanjose.cl</p>
    <p>(2)25763000</p>`);
addMarkerToGroup(articulos, {lat:-33.4321191, lng:-70.6312582},cliIco,
    `<h1>Urgencia Clínica Santa María</h1>
    <p>Abierto 24 horas</p>
    <p>clinicasantamaria.cl</p>
    <p>(2)25763000</p>`);  
addMarkerToGroup(articulos, {lat:-33.420156, lng:-70.6552991},cliIco,
    `<h2>Hospital Clínico de la Universidad de Chile</h2>
    <p>Abierto 24 horas</p>
    <p>hospitaluchile.cl</p>
    <p>(2)25763000</p>`);  
addMarkerToGroup(articulos, {lat:-33.51905, lng:-70.5992432},cliIco,
    `<h1>Clínica Vespucio</h1>
    <p>Abierto 24 horas</p>
    <p>clinicavespucio.cl</p>
    <p>(2)27308000</p>`); 
addMarkerToGroup(articulos, {lat:-33.4275246, lng:-70.6489982},cliIco,
    `<h1>Clínica Dávila</h1>
    <p>Abierto 24 horas</p>
    <p>davila.cl</p>
    <p>(2)27308000</p>`);
addMarkerToGroup(articulos, {lat:-33.5097956, lng:-70.5998057},cliIco,
    `<h1>Clínica Bupa Santiago</h1>
    <p>Abierto 24 horas</p>
    <p>clinicabupasantiago.cl</p>
    <p>(2)32405600</p>`);    
    

addMarkerToGroup(articulos, {lat:-33.4949035, lng:-70.7572481},artIco,
    `<h1>Tienda Doña Juanita</h1>
    <p>Articulos disponibles</p>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`); 
addMarkerToGroup(articulos, {lat:-33.4646281, lng:-70.6128649},artIco,
    `<h1>Minimarket</h1>
    <p>Articulos disponibles</p>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`); 
addMarkerToGroup(articulos, {lat:-33.4578, lng:-70.6657747},artIco,
    `<h1>Botilleria Don Gato</h1>
    <p>Articulos disponibles</p>
    <li>Mascarillas</li>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`);
addMarkerToGroup(articulos, {lat:-33.4428218, lng:-70.6782992},artIco,
    `<h1>Tienda Paraiso</h1>
    <p>Articulos disponibles</p>
    <li>Mascarillas</li>
    <li>Guantes</li>`);
addMarkerToGroup(articulos, {lat:-33.43178, lng:-70.5475695},artIco,
    `<h1>Farmacia Cruz Verder</h1>
    <p>Articulos disponibles</p>
    <li>Mascarillas</li>`); 
addMarkerToGroup(articulos, {lat:-33.5115919, lng:-70.753789},artIco,
    `<h1>Farmacia DR Simi</h1>
    <p>Articulos disponibles</p>
    <li>Mascarillas</li>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`); 
addMarkerToGroup(articulos, {lat:-33.4587269, lng:-70.6635619},artIco,
    `<h1>Javiera Mena</h1>
    <p>Articulos disponibles</p>
    <li>Mascarillas</li>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`); 
addMarkerToGroup(articulos, {lat:-33.456225, lng:-70.6516358},artIco,
    `<h1>Tienda Doña Juanita</h1>
    <p>Articulos disponibles</p>
    <li>Mascarillas</li>
    <li>Guantes</li>`); 
addMarkerToGroup(articulos, {lat:-33.4138967, lng:-70.6005687},artIco,
    `<h1>Farmacia Popular</h1>
    <p>Articulos disponibles</p>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`); 
addMarkerToGroup(articulos, {lat:-33.5621681, lng:-70.6945283},artIco,
    `<h1>Tienda Doña Juanita</h1>
    <p>Articulos disponibles</p>
    <li>Mascarillas</li>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`); 
addMarkerToGroup(articulos, {lat:-33.5346575, lng:-70.5957311},artIco,
    `<h1>Tienda Doña Juanita</h1>
    <p>Articulos disponibles</p>
    <li>Mascarillas</li>`); 
addMarkerToGroup(articulos, {lat:-33.3549351, lng:-70.7756282},artIco,
    `<h1>Tienda Doña Juanita</h1>
    <p>Articulos disponibles</p>
    <li>Mascarillas</li>
    <li>Guantes</li>`); 

// Viña del mar
addMarkerToGroup(articulos, {lat:-33.004962, lng:-71.5432117},artIco,
    `<h1>Articulos Disponibles</h1>
    <li>Mascarillas</li>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`); 
addMarkerToGroup(articulos, {lat:-33.016183, lng:-71.5491307},artIco,
    `<h1>Articulos Disponibles</h1>
    <li>Mascarillas</li>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`); 
addMarkerToGroup(articulos, {lat:-33.027999, lng:-71.5720287},artIco,
    `<h1>Articulos Disponibles</h1>
    <li>Mascarillas</li>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`); 

// Calama
addMarkerToGroup(articulos, {lat:-22.448818, lng:-68.9360457},artIco,
    `<h1>Articulos Disponibles</h1>
    <li>Mascarillas</li>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`); 
addMarkerToGroup(articulos, {lat:-22.464798, lng:-68.9328727},artIco,
    `<h1>Articulos Disponibles</h1>
    <li>Mascarillas</li>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`); 
addMarkerToGroup(articulos, {lat:-22.448953, lng:-68.9190817},artIco,
    `<h1>Articulos Disponibles</h1>
    <li>Mascarillas</li>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`); 

// Iquique
addMarkerToGroup(articulos, {lat:-20.216077, lng:-70.1433627},artIco,
    `<h1>Articulos Disponibles</h1>
    <li>Mascarillas</li>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`); 
addMarkerToGroup(articulos, {lat:-20.209862, lng:-70.1511437},artIco,
    `<h1>Articulos Disponibles</h1>
    <li>Mascarillas</li>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`); 
addMarkerToGroup(articulos, {lat:-20.209103, lng:-70.1369227},artIco,
    `<h1>Articulos Disponibles</h1>
    <li>Mascarillas</li>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`); 

// Antofagasta
addMarkerToGroup(articulos, {lat:-23.582869, lng:-70.3848277},artIco,
    `<h1>Articulos Disponibles</h1>
    <li>Mascarillas</li>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`); 
addMarkerToGroup(articulos, {lat:-23.591353, lng:-70.3860137},artIco,
    `<h1>Articulos Disponibles</h1>
    <li>Mascarillas</li>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`); 
addMarkerToGroup(articulos, {lat:-23.622583, lng:-70.3883657},artIco,
    `<h1>Articulos Disponibles</h1>
    <li>Mascarillas</li>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`); 

// Diego de almagro
addMarkerToGroup(articulos, {lat:-26.392273, lng:-70.0514237},artIco,
    `<h1>Articulos Disponibles</h1>
    <li>Mascarillas</li>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`); 
addMarkerToGroup(articulos, {lat:-26.386354, lng:-70.0483507},artIco,
    `<h1>Articulos Disponibles</h1>
    <li>Mascarillas</li>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`); 
addMarkerToGroup(articulos, {lat:-26.390881, lng:-70.0425677},artIco,
    `<h1>Articulos Disponibles</h1>
    <li>Mascarillas</li>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`); 

// Vallenar
addMarkerToGroup(articulos, {lat:-28.5927813, lng:-70.7616508},artIco,
    `<h1>Articulos Disponibles</h1>
    <li>Mascarillas</li>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`); 
addMarkerToGroup(articulos, {lat:-28.569865, lng:-70.7745017},artIco,
    `<h1>Articulos Disponibles</h1>
    <li>Mascarillas</li>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`); 
addMarkerToGroup(articulos, {lat:-28.569537, lng:-70.7602137},artIco,
    `<h1>Articulos Disponibles</h1>
    <li>Mascarillas</li>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`); 

// Ovalle
addMarkerToGroup(articulos, {lat:-30.5921709, lng:-71.2231877},artIco,
    `<h1>Articulos Disponibles</h1>
    <li>Mascarillas</li>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`); 
addMarkerToGroup(articulos, {lat:-30.584117, lng:-71.1868387},artIco,
    `<h1>Articulos Disponibles</h1>
    <li>Mascarillas</li>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`); 
addMarkerToGroup(articulos, {lat:-30.593986, lng:-71.1857767},artIco,
    `<h1>Articulos Disponibles</h1>
    <li>Mascarillas</li>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`); 

// Curico
addMarkerToGroup(articulos, {lat:-34.9797732, lng:-71.2446166},artIco,
    `<h1>Articulos Disponibles</h1>
    <li>Mascarillas</li>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`); 
addMarkerToGroup(articulos, {lat:-34.971375, lng:-71.2533727},artIco,
    `<h1>Articulos Disponibles</h1>
    <li>Mascarillas</li>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`); 
addMarkerToGroup(articulos, {lat:-34.980592, lng:-71.2269347},artIco,
    `<h1>Articulos Disponibles</h1>
    <li>Mascarillas</li>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`); 

// Chillan
addMarkerToGroup(articulos, {lat:-36.6124886, lng:-72.1212213},artIco,
    `<h1>Articulos Disponibles</h1>
    <li>Mascarillas</li>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`); 
addMarkerToGroup(articulos, {lat:-36.599535, lng:-72.1177447},artIco,
    `<h1>Articulos Disponibles</h1>
    <li>Mascarillas</li>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`); 
addMarkerToGroup(articulos, {lat:-36.60751, lng:-72.0877427},artIco,
    `<h1>Articulos Disponibles</h1>
    <li>Mascarillas</li>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`); 

// Temuco
addMarkerToGroup(articulos, {lat:-38.7290843, lng:-72.6377404},artIco,
    `<h1>Articulos Disponibles</h1>
    <li>Mascarillas</li>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`); 
addMarkerToGroup(articulos, {lat:-38.723192, lng:-72.6322047},artIco,
    `<h1>Articulos Disponibles</h1>
    <li>Mascarillas</li>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`); 
addMarkerToGroup(articulos, {lat:-38.722863, lng:-72.5644057},artIco,
    `<h1>Articulos Disponibles</h1>
    <li>Mascarillas</li>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`); 

// Osorno
addMarkerToGroup(articulos, {lat:-40.5737073, lng:-73.1516403},artIco,
    `<h1>Articulos Disponibles</h1>
    <li>Mascarillas</li>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`); 
addMarkerToGroup(articulos, {lat:-40.565362, lng:-73.1721967},artIco,
    `<h1>Articulos Disponibles</h1>
    <li>Mascarillas</li>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`); 
addMarkerToGroup(articulos, {lat:-40.568217, lng:-73.1069087},artIco,
    `<h1>Articulos Disponibles</h1>
    <li>Mascarillas</li>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`); 

// Chaiten
addMarkerToGroup(articulos, {lat:-42.9166991, lng:-72.7254548},artIco,
    `<h1>Articulos Disponibles</h1>
    <li>Mascarillas</li>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`); 
addMarkerToGroup(articulos, {lat:-42.916888, lng:-72.7076447},artIco,
    `<h1>Articulos Disponibles</h1>
    <li>Mascarillas</li>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`); 
addMarkerToGroup(articulos, {lat:-42.927025, lng:-72.7122337},artIco,
    `<h1>Articulos Disponibles</h1>
    <li>Mascarillas</li>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`);
    
// Coyhaique
addMarkerToGroup(articulos, {lat:-45.5775947, lng:-72.0692554},artIco,
    `<h1>Articulos Disponibles</h1>
    <li>Mascarillas</li>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`); 
addMarkerToGroup(articulos, {lat:-45.576831, lng:-72.0407307},artIco,
    `<h1>Articulos Disponibles</h1>
    <li>Mascarillas</li>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`); 
addMarkerToGroup(articulos, {lat:-45.584206, lng:-72.0378007},artIco,
    `<h1>Articulos Disponibles</h1>
    <li>Mascarillas</li>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`); 

// Punta Arenas
addMarkerToGroup(articulos, {lat:-53.1417622, lng:-70.9412864},artIco,
    `<h1>Articulos Disponibles</h1>
    <li>Mascarillas</li>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`); 
addMarkerToGroup(articulos, {lat:-53.131155, lng:-70.9031347},artIco,
    `<h1>Articulos Disponibles</h1>
    <li>Mascarillas</li>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`); 
addMarkerToGroup(articulos, {lat:-53.175903, lng:-70.9381407},artIco,
    `<h1>Articulos Disponibles</h1>
    <li>Mascarillas</li>
    <li>Alcohol Gel</li>
    <li>Guantes</li>`); 








