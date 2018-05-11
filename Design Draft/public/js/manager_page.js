$(document).ready(function() {

    $("#store-name").text(localStorage.getItem("currentStore"));

    //Handling of active list items
    $(document).on("click", "li", function(e){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    });

    $(".list-group-item").on("click", function() {
        $(this).toggleClass("active");
        $(this).siblings().removeClass("active");
    });

    checkForDeliveries();

    function checkForDeliveries() {
        var xmlHttp = new XMLHttpRequest();

        //load orders
        try{
            xmlHttp.open("GET", "get/file/orders.json", true);

            xmlHttp.onreadystatechange = function() {
                if(xmlHttp.readyState == 4) {
                      if(xmlHttp.status == 200) { //Everything went okay
                          console.log(JSON.parse(xmlHttp.responseText));
                          var json = JSON.parse(xmlHttp.responseText);

                          var currentStore = localStorage.getItem("currentStore").toLowerCase().trim().split(" ").join("_");//converts store name to lower case with underscores instead of spaces

                          for(var i = 0; i<json.orders.length; i++)
                          {
                            if (json.orders[i].status == "cooked")
                            {
                                $("#ready-items").append('<li class="list-group-item">'+json.orders[i].customer+'<br><p class="sub-heading">Placed at:<div id="time">'+json.orders[i].time+'</div><br> Price: $'+json.orders[i].price+'</p></li>');

                              }
                            }
                          }

                      } else if (xmlHttp.status == 404) {
                          console.log("404 not found");
                      }
          };

      xmlHttp.send(null);
      //xmlHttp.abort();

  } catch(e) {
      console.log(e.toString());
  }
    }

    var xmlHttp = new XMLHttpRequest();

    //Load customers
    try{
        xmlHttp.open("GET", "get/file/customers.json", true);

        xmlHttp.onreadystatechange = function() {
            if(xmlHttp.readyState == 4) {
                if(xmlHttp.status == 200) { //Everything went okay
                    console.log(JSON.parse(xmlHttp.responseText));
                    var json = JSON.parse(xmlHttp.responseText);

                    var currentStore = localStorage.getItem("currentStore").toLowerCase().trim().split(" ").join("_");//converts store name to lower case with underscores instead of spaces

                    for(var i = 0; i<json.customers.length; i++) {
                        var username = json.customers[i].username;

                        for(var j = 0; j<json.customers[i].membership.length; j++) {
                            if(json.customers[i].membership[j].store == currentStore)//user has to be member of this store
                            {
                              if (json.customers[i].membership[j].type != "pending")
                              {
                                $("#customer-list").append('<tr><th><input type = "checkbox" name="record"></th><th>'+username+'</th><th>'+json.customers[i].membership[j].rating+'</th></tr>');

                              }
                            }
                        }
                    }

                } else if (xmlHttp.status == 404) {
                    console.log("404 not found");
                }
            }
        };

        xmlHttp.send(null);

    } catch(e) {
        console.log(e.toString());
    }

    var xmlHttp2 = new XMLHttpRequest();

    //Load employees
    try{
        xmlHttp2.open("GET", "get/file/cooks.json", true);

        xmlHttp2.onreadystatechange = function() {
            if(xmlHttp2.readyState == 4) {
                if(xmlHttp2.status == 200) { //Everything went okay
                    console.log(JSON.parse(xmlHttp2.responseText));
                    var json = JSON.parse(xmlHttp2.responseText);

                    var currentStore = localStorage.getItem("currentStore").toLowerCase().trim().split(" ").join("_");//converts store name to lower case with underscores instead of spaces

                    for(var i = 0; i<json.cooks.length; i++) {
                        var username = json.cooks[i].username;

                        if(json.cooks[i].store == currentStore)//user has to be member of this store
                                $("#employee-list").append('<tr><th><input type = "checkbox" name="record"></th><th>'+username+'</th><th>'+json.cooks[i].rating+'</th></tr>');
                    }
                } else if (xmlHttp2.status == 404) {
                    console.log("404 not found");
                }
            }
        };

        xmlHttp2.send(null);

    } catch(e) {
        console.log(e.toString());
    }

    var xmlHttp3 = new XMLHttpRequest();

    //Load employees
    try{
        xmlHttp3.open("GET", "get/file/deliveryGuys.json", true);

        xmlHttp3.onreadystatechange = function() {
            if(xmlHttp3.readyState == 4) {
                if(xmlHttp3.status == 200) { //Everything went okay
                    console.log(JSON.parse(xmlHttp3.responseText));
                    var json = JSON.parse(xmlHttp3.responseText);

                    var currentStore = localStorage.getItem("currentStore").toLowerCase().trim().split(" ").join("_");//converts store name to lower case with underscores instead of spaces

                    for(var i = 0; i<json.deliveryGuys.length; i++) {
                        var username = json.deliveryGuys[i].username;

                        if(json.deliveryGuys[i].store == currentStore && !json.deliveryGuys.laidOff) {//user has to be member of this store
                                $("#employee-list").append('<tr><th><input type = "checkbox" name="record"></th><th>'+username+'</th><th>'+json.deliveryGuys[i].rating+'</th></tr>');

                                $("#delivery-guys").append('<option value='+username+'>'+username+'</option>');
                        }
                    }
                } else if (xmlHttp3.status == 404) {
                    console.log("404 not found");
                }
            }
        };

        xmlHttp3.send(null);

    } catch(e) {
        console.log(e.toString());
    }


    /////************
    var xmlHttp10 = new XMLHttpRequest();

    //load pending customers
    try{
        xmlHttp10.open("GET", "get/file/customers.json", true);

        xmlHttp10.onreadystatechange = function() {
            if(xmlHttp10.readyState == 4) {
                if(xmlHttp10.status == 200) { //Everything went okay
                    console.log(JSON.parse(xmlHttp10.responseText));
                    var json = JSON.parse(xmlHttp10.responseText);

                    var currentStore = localStorage.getItem("currentStore").toLowerCase().trim().split(" ").join("_");//converts store name to lower case with underscores instead of spaces

                    var output = "";
                    for(var i = 0; i<json.customers.length; i++) {
                        var username = json.customers[i].username;

                        for(var j = 0; j<json.customers[i].membership.length; j++) {
                            if(json.customers[i].membership[j].store == currentStore)//user has to be member of this store
                                {
                                  if (json.customers[i].membership[j].type == "pending")
                                  {
                                    output += "<h1>"+username+"</h1>";
                                    output += "<a href="+json.customers[i].photoID+"> Click here to see photo ID </a>  <br>reviews from other stores<br>";
                                    // $("#pending-customers").append('<a href="#" class="list-group-item list-group-item-action sub-item pop-item-entry" onclick="return false">'+username+'<br><p class="sub-heading">Placed at:<div id="time">'+json.customers[i].membership[j].rating+'</div><br> Price: $'+currentStore+'</p></a>');
                                    for (var k=0; k<json.customers[i].membership.length; k++)
                                    {
                                      output+="<li> store: ["+json.customers[i].membership[k].store+"]   rating:["+json.customers[i].membership[k].rating+"]</li><br>";
                                    }
                                    $("#pending-customers").append('<a href="#" class="list-group-item list-group-item-action sub-item pop-item-entry" onclick="return false">'+output+'</a>');
                                    output="";
                                  }
                                }
                        }
                    }

                } else if (xmlHttp10.status == 404) {
                    console.log("404 not found");
                }
            }
        };

        xmlHttp10.send(null);

    } catch(e) {
        console.log(e.toString());
    }
    /////////////**********
});

function sendToDeliveryGuy() {
    var time = $(".active #time").text();
    console.log(time);
    var deliveryGuy = $("#delivery-guys :selected").val();
    console.log(deliveryGuy);

    var xmlHttp2 = new XMLHttpRequest();

  //load orders
  try{
      xmlHttp2.open("GET", "setDeliveryGuy/"+time+"/"+deliveryGuy, true);

      xmlHttp2.onreadystatechange = function() {
          if(xmlHttp2.readyState == 4) {
              if(xmlHttp2.status == 200) { //Everything went okay
                  console.log(JSON.parse(xmlHttp2.responseText));

              } else if (xmlHttp2.status == 404) {
                  console.log("404 not found");
              }
          }
      };

      xmlHttp2.send(null);

  } catch(e) {
      console.log(e.toString());
  }

    //$("#active").remove();
    document.location.reload(true);
}


// function approveNewAccount()
// {
//   var currentStore = localStorage.getItem("currentStore").toLowerCase().trim().split(" ").join("_");//converts store name to lower case with underscores instead of spaces
//   var member =
// }
