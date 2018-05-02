
var google;

function init() {
    var uluru = {lat: 53.93358838656863, lng: 27.501241891401605};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
}
google.maps.event.addDomListener(window, 'load', init);