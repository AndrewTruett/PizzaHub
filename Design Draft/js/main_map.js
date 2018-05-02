var mapCenter = {lat:40.753380,lng:-73.986413}
                marker.setMap(null);
                
                function initMap(){
                  // Map options
                  var options = {
                    zoom:15,
                    center: mapCenter
                  }
                  // New map
                  var map = new google.maps.Map(document.getElementById('map'), options);

//                  // Listen for click on map
//                  google.maps.event.addListener(map, 'click', function(event){
//                    // Add marker
//                    addMarker({coords:event.latLng});
//                  });
                    
                //add marker
                var marker = new google.maps.Marker(
                {position: {lat: 40.757201, lng: -73.989968},
                map:map,
                icon:'img/Pizza-icon.png',
                title:'Don Hyder | Rating: 5.0/5.0'});
                    


                }