var mapCenter = {lat:40.756868,lng:-73.985345}

//note: variables that are commented out to be used in future "final" update

//upper mid-manhattan
var garlicNewYorkPizzaBar = {lat: 40.745237, lng: -73.975891};
var famousAmadeusPizza = {lat: 40.749902, lng: -73.994903};
//var nyPizzaSuprema = {lat: 40.750211, lng: -73.995289};

//mid mid-manhttan
var donHyder = {lat: 40.757201, lng: -73.989968};
var littleItalyPizza = {lat: 40.747675, lng: -73.984818};
//var theOriginalLittleItalyPizza = {lat: 40.754031, lng: -73.979743};
//var unclePaulsPizza = {lat: 40.754885, lng: -73.976900};
//var capizzi = {lat: 40.757583, lng: -73.993605};

//lower mid-manhattan
var angelosPizza = {lat: 40.763813, lng: -73.982946}
var mariellaPizza = {lat: 40.765775, lng: -73.983938}
//var donAntonio = {lat: 40.762743, lng: -73.986717}
//var pizzaHut = {lat: 40.761110, lng: -73.982865}


function initMap(){

      //Map options
                  var options = {
                    zoom:15,
                    center: mapCenter
                  }

      // New map
      var map = new google.maps.Map(document.getElementById('map'), options);

      // Array of markers
      var markers = [
        {
          name:"Garlic NY Pizza Bar",
          coords:garlicNewYorkPizzaBar,
          content:'<span class="mm-store-name">Garlic NY Pizza Bar</span> </br> <span class="map-marker-body"> Rating : 4.78/5.00 </span></br></br><button type="button" class="btn btn-link" data-toggle="modal" data-target="#loginModal" onclick="saveStoreName()" id="login-btn">Click here to login</button>'
        },
        {
          name:"Famous Amadeus Pizza",
          coords:famousAmadeusPizza,
          content:'<span class="mm-store-name">Famous Amadeus Pizza</span> </br> <span class="map-marker-body">Rating : 4.50/5.00</span></br></br><button type="button" class="btn btn-link" data-toggle="modal" data-target="#loginModal" onclick="saveStoreName()" id="login-btn">Click here to login</button>'
        },
          
        {
          name:"Don Hyder",
          coords: donHyder,
          content: '<span class="mm-store-name">Don Hyder</span> </br> <span class="map-marker-body">Rating : 5.00/5.00</span></br></br><button type="button" class="btn btn-link" data-toggle="modal" data-target="#loginModal" onclick="saveStoreName()" id="login-btn">Click here to login</button>'
        },
        {
          name:"Little Italy Pizza",
          coords:littleItalyPizza,
          content: '<span class="mm-store-name">Little Italy Pizza</span> </br> <span class="map-marker-body">Rating : 3.50/5.00</span></br></br><button type="button" class="btn btn-link" data-toggle="modal" data-target="#loginModal" onclick="saveStoreName()" id="login-btn">Click here to login</button>'
        },
          
        {
          name: "Angelos Pizza",
          coords:angelosPizza,
          content: '<span class="mm-store-name">Angelos Pizza</span> </br> <span class="map-marker-body">Rating : 4.00/5.00</span></br></br><button type="button" class="btn btn-link" data-toggle="modal" data-target="#loginModal" onclick="saveStoreName()" id="login-btn">Click here to login</button>'
        }
        ,
        {
          name: "Mariella Pizza",
          coords:mariellaPizza ,
          content: '<span class="mm-store-name">Mariella Pizza</span> </br> <span class="map-marker-body">Rating : 4.60/5.00</span></br></br><button type="button" class="btn btn-link" data-toggle="modal" data-target="#loginModal" onclick="saveStoreName()" id="login-btn">Click here to login</button>'
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
          name:name,
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

function saveStoreName() {
    $(document).on("click", "#login-btn", function(){
        var parentText = $(this).parent().text();
        var storeName = parentText.substr(0, parentText.indexOf("Rating"));
        $(".login-store-name").empty();
        $(".login-store-name").text(storeName);
        localStorage.setItem("currentStore", storeName);
        
        $("#username").val("");
        $("#password").val("");
    });
}

function login() {
    var userNameStr = $("#username").val();
    var passwordStr = $("#password").val();
    
    if(userNameStr == "" || passwordStr == "") {
        $("#username").val("");
        $("#password").val("");
        alert("Please enter your username and password");
    }
    else {
        //check for successful login here
        
        //go to store page
        window.location.href = "store_page.html";
    }
}