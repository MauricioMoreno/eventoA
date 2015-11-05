var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 19.404197, lng: -99.088747},
    zoom: 15
  });
}