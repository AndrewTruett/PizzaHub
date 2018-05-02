//var mapCenter = {lat:40.753380,lng:-73.986413}
////marker.setMap(null);
//                
//function initMap(){
//    // Map options
//    var options = {
//    zoom:15,
//    center: mapCenter
//    }
//    // New map
//    var map = new google.maps.Map(document.getElementById('map'), options);
//
//    var marker = new google.maps.Marker(
//        {position: {lat: 40.757201, lng: -73.989968},
//        map:map,
//        title:'Don Hyder | Rating: 5.0/5.0'});                
//}



var mapCenter = {lat:40.752860,lng:-73.986585}

//upper mid-manhattan
var garlicNewYorkPizzaBar = {lat: 40.745237, lng: -73.975891};
var famousAmadeusPizza = {lat: 40.749902, lng: -73.994903};

//mid mid-manhttan
var donHyder = {lat: 40.757201, lng: -73.989968};
var littleItalyPizza = {lat: 40.747675, lng: -73.984818};

//lower mid-manhattan
var angelosPizza = {lat: 40.763813, lng: -73.982946}
var mariellaPizza = {lat: 40.765775, lng: -73.983938}


function initMap(){

//       Map options
                  var options = {
                    zoom:15,
                    center: mapCenter
                  }

      // New map
      var map = new google.maps.Map(document.getElementById('map'), options);

      // Listen for click on map
//      google.maps.event.addListener(map, 'click', function(event){
//        // Add marker
//        addMarker({coords:event.latLng});
//      });

      /*
      // Add marker
      var marker = new google.maps.Marker({
        position:{lat:42.4668,lng:-70.9495},
        map:map,
        icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
      });

      var infoWindow = new google.maps.InfoWindow({
        content:'<h1>Lynn MA</h1>'
      });

      marker.addListener('click', function(){
        infoWindow.open(map, marker);
      });
      */

      // Array of markers
      var markers = [
        {
          coords:garlicNewYorkPizzaBar,
          content:'<span class="mm-store-name"> Garlic NY Pizza Bar </span> </br> <span class="map-marker-body"> Rating : 4.78/5.00 </span>'
        },
        {
          coords:famousAmadeusPizza,
          content:'<span class="mm-store-name">Famous Amadeus Pizza</span> </br> <span class="map-marker-body">Rating : 4.50/5.00</span>'
        },
          
        {
          coords: donHyder,
          content: '<span class="mm-store-name">Don Hyder</span> </br> <span class="map-marker-body">Rating : 5.00/5.00</span>'
        },
        {
          coords:littleItalyPizza,
          content: '<span class="mm-store-name">Little Italy Pizza</span> </br> <span class="map-marker-body">Rating : 3.50/5.00</span>'
        },
          
        {
          coords:angelosPizza,
          content: '<span class="mm-store-name">Angelos Pizza</span> </br> <span class="map-marker-body">Rating : 4.00/5.00</span>'
        }
        ,
        {
          coords:mariellaPizza ,
          content: '<span class="mm-store-name">Mariella Pizza</span> </br> <span class="map-marker-body">Rating : 4.60/5.00</span>'
        }
          
          
          
      ];

      // Loop through markers
      for(var i = 0;i < markers.length;i++){
        // Add marker
        addMarker(markers[i]);
      }

      // Add Marker Function
      function addMarker(props){
        var marker = new google.maps.Marker({
          position:props.coords,
          map:map,
          //icon:props.iconImage
        });

        // Check for customicon
        if(props.iconImage){
          // Set icon image
          marker.setIcon(props.iconImage);
        }

        // Check content
        if(props.content){
          var infoWindow = new google.maps.InfoWindow({
            content:props.content
          });

          marker.addListener('click', function(){
            infoWindow.open(map, marker);
          });
        }
      }
    }