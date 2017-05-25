function HandleBrowseClick()
{
    var fileinput = document.getElementById("browse");
    fileinput.click();
    var textinput = document.getElementById("filename");
    textinput.value = fileinput.value;
}

function init_map() {
            var myOptions = {
                zoom: 13,
                center: new google.maps.LatLng(49.839683, 24.029717000000005),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
            marker = new google.maps.Marker({
                map: map,
                position: new google.maps.LatLng(49.839683, 24.029717000000005)
            });
            infowindow = new google.maps.InfoWindow({
                content: '<strong>Название</strong><br>Lvov<br>'
            });
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map, marker);
            });
            infowindow.open(map, marker);
        }
        google.maps.event.addDomListener(window, 'load', init_map);