
// will run once DOM is ready for JS to execute
$(document).ready(function(){


  // carousel for images
  $('.carousel').carousel({
    interval: 5500
  });


// create a variable for and add coordinates for Mt. Rainier map within the map-container div
var map = L.map('map-container').setView([46.843, -121.670], 11);
map.scrollWheelZoom.disable();

var osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

var osmAttrib='Map data © <a href="https://openstreetmap.org">StreetMap</a> contributors';

var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 18, attribution: osmAttrib});
// create map for street layer using Mapbox

https://api.mapbox.com/v4/mapbox.mapbox-streets-v8/1/0/0.mvt?access_token=
var streetLayer = L.tileLayer( 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://mapbox.com">Mapbox</a>',
  maxZoom: 20,
  scrollWheelZoom: false,
  id: 'mapbox.mapbox-streets-v8',
  accessToken: 'pk.eyJ1IjoiYnZhc2lsb3AiLCJhIjoiY2tiNzlnbTBkMDNpajMxczd4Z281ODdpMiJ9.4V3u4-ybBImJoRPMIJIsjw'
});

// create map for satellite layer using Mapbox
  var satLayer = L.tileLayer( 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    scrollWheelZoom: false,
    id: 'mapbox.satellite',
    accessToken: 'pk.eyJ1IjoiYnZhc2lsb3AiLCJhIjoiY2tiNzlnbTBkMDNpajMxczd4Z281ODdpMiJ9.4V3u4-ybBImJoRPMIJIsjw'
  });

// create map for terrain layer using Mapbox
  var terrainLayer = L.tileLayer( 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    scrollWheelZoom: false,
    id: 'mapbox.mapbox-terrain-v2',
    accessToken: 'pk.eyJ1IjoiYnZhc2lsb3AiLCJhIjoiY2tiNzlnbTBkMDNpajMxczd4Z281ODdpMiJ9.4V3u4-ybBImJoRPMIJIsjw'
  });
// create object for mapLayers to select which map to use within map div
var mapLayers = {
    "Satellite View": satLayer,
    "Terrain View": terrainLayer,
    "Street View": streetLayer
};

L.control.layers(mapLayers).addTo(map);
    satLayer.addTo(map);

//show markers with popups at no fewer than 3 interesting locations.
var marker = L.marker([46.852, -121.760]).addTo(map);
// mouseover events for L.marker
   marker.bindPopup("Popup content");
   marker.on('mouseover', function (e) {
       this.openPopup();
   });
   marker.on('mouseleave', function (e) {
       this.closePopup();
   });
   marker.bindPopup('<b>Welcome to Mt. Rainier!</b><br>This peak is 14,417 feet (4,394 m) high.<br><a href="https://visitrainier.com" target="_blank">Visit Mt. Rainier!</a>');
// location marker for Point Success
var marker = L.marker([46.845757, -121.767565]).addTo(map);
// mouseover events for L.marker
   marker.bindPopup("Popup content");
   marker.on('mouseover', function (e) {
       this.openPopup();
   });
   marker.on('mouseleave', function (e) {
       this.closePopup();
   });
    marker.bindPopup('<b>Point Success</b><br>Elevation: 14,164 feet (4,300 m)<br><a href="https://peakbagger.com/peak.aspx?pid=2298" target="_blank">Point Success Info</a>');
// location marker for Tipsoo Lake
var marker = L.marker([46.869047, -121.517128]).addTo(map);
// mouseover events for L.marker
  marker.bindPopup("Popup content");
  marker.on('mouseover', function (e) {
    this.openPopup();
});
  marker.on('mouseleave', function (e) {
    this.closePopup();
});
    marker.bindPopup('<b>Tipsoo Lake</b><br>Elevation: 5,290 ft (1,612 m)<br><a href="https://stayrainier.com/chinook-passtipsoo-lake/" target="_blank">Visit Tipsoo Lake!</a>');
// location marker for Paradise
var marker = L.marker([46.785836, -121.735372]).addTo(map);
// mouseover events for L.marker
  marker.bindPopup("Popup content");
  marker.on('mouseover', function (e) {
    this.openPopup();
});
  marker.on('mouseleave', function (e) {
    this.closePopup();
});
    marker.bindPopup('<b>Paradise</b><br>Elevation: 5,400 ft (1,645 m)<br><a href="https://visitrainier.com/places-and-attractions/park-regions/paradise/" target="_blank">Visit Paradise!</a>');
// location marker for Crystal Mountain Ski Resort


// location marker for Crystal Mountain Resort
var marker = L.marker([46.927725, -121.493720]).addTo(map);
// mouseover events for L.marker
marker.bindPopup("Popup content");
marker.on('mouseover', function (e) {
  this.openPopup();
});
marker.on('mouseleave', function (e) {
  this.closePopup();
});
    marker.bindPopup('<b>Crystal Mountain</b><br>Elevation: 7,002 ft (2,134 m)<br><a href="https://crystalmountainresort.com/" target="_blank">Visit Crystal Mountain Ski Resort</a>');

// tabs for viewing each section of content individually
$('#tab-buttons a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});

  // will run once DOM is ready for JS to execute
$(document).ready(function(){
   // Add smooth scrolling to all links
   $("a").on('click', function(event) {

     // Make sure this.hash has a value before overriding default behavior
     if (this.hash !== "800") {
       // Prevent default anchor click behavior
       event.preventDefault();
       // Store hash
       var hash = this.hash;
       // Using jQuery's animate() method to add smooth page scroll
       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
       // -80 refers to scroll offset amount to compensate for fixed nav
       $('html, body').animate({
         scrollTop: $(hash).offset().top -113
       }, 800, function(){
       // Add hash (#) to URL when done scrolling (default click behavior)
         window.location.hash = hash;
       });
     } // End if
   });
 });
});
