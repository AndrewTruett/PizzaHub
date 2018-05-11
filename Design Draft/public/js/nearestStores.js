var mapCenter = {lat:40.756868,lng:-73.985345}
var garlicNewYorkPizzaBar = {lat: 40.745237, lng: -73.975891,name:"garlic_new_york_pizza_bar"};
var famousAmadeusPizza = {lat: 40.749902, lng: -73.994903,name:"famous_amadeus_pizza"};
var donHyder = {lat: 40.757201, lng: -73.989968,name:"don_hyder"};
var littleItalyPizza = {lat: 40.747675, lng: -73.984818,name:"little_italy_pizza"};
var angelosPizza = {lat: 40.763813, lng: -73.982946,name:"angelos_pizza"}
var mariellaPizza = {lat: 40.765775, lng: -73.983938,name:"mariella_pizza"}



var getDistance = function(place1,place2)
{
  var lat1 = place1.lat;
  var lat2 = place2.lat;
  var lng1 = place1.lng;
  var lng2 = place2.lng;

  var dLat = Math.pow((lat2-lat1),2);
  var dLng = Math.pow((lng2-lng1),2);
  var distance = Math.sqrt(dLat+dLng);

  return distance;
};

var threeNearest = function(lt,ln)
{
  var userAddress = {lat:lt,lng:ln};

  var stores = [garlicNewYorkPizzaBar,famousAmadeusPizza,donHyder,littleItalyPizza,angelosPizza,mariellaPizza];
  var nearest= [
    {
      name:"",
      dist:0
    },
    {
      name:"",
      dist:0
    },
    {
      name:"",
      dist:0
    },
    {
      name:"",
      dist:0
    },
    {
      name:"",
      dist:0
    },
    {
      name:"",
      dist:0
    }
  ];

for (var i = 0; i < stores.length; i++)
  {
    var distance = getDistance(userAddress,stores[i]);
    nearest[i].dist=distance;
    nearest[i].name=stores[i].name;
  }

	for (var i = 1; i < nearest.length; i++) {
		var tmp = nearest[i].dist; //Copy of the current element.
		/*Check through the sorted part and compare with the number in tmp. If large, shift the number*/
		for (var j = i - 1; j >= 0 && (nearest[j].dist > tmp); j--) {
			//Shift the number
			nearest[j + 1].dist = nearest[j].dist;
		}
		//Insert the copied number at the correct position
		//in sorted part.
		nearest[j + 1].dist = tmp;
	}

  // for (var i = 0; i < 6; i++)
  // {
  //   console.log(nearest[i].name+" "+nearest[i].dist);
  // }
};

threeNearest(40.765731626830025,-73.99088107940673);
