// $(document).ready(function()
// {
//
// //  $("#store-name").text(localStorage.getItem("currentStore"));
//   $("#dg-name").text(localStorage.getItem("username"));
//
//
//
//   var xmlHttp = new XMLHttpRequest();
//
//   //load orders
//   try{
//       xmlHttp.open("GET", "get/file/orders.json", true);
//
//       xmlHttp.onreadystatechange = function() {
//           if(xmlHttp.readyState == 4) {
//               if(xmlHttp.status == 200) { //Everything went okay
//                   console.log(JSON.parse(xmlHttp.responseText));
//                   var json = JSON.parse(xmlHttp.responseText);
//                   var dlvyguy = localStorage.getItem("username");
//
//                   var currentStore = localStorage.getItem("currentStore").toLowerCase().trim().split(" ").join("_");//converts store name to lower case with underscores instead of spaces
//
//                   // for(var i = 0; i<json.orders.length; i++) {
//                   //     var username = json.customers[i].username;
//                   //
//                   //     for(var j = 0; j<json.customers[i].membership.length; j++) {
//                   //         if(json.customers[i].membership[j].store == currentStore)//user has to be member of this store
//                   //             $("#customer-list").append('<tr><th><input type = "checkbox" name="record"></th><th>'+username+'</th><th>'+json.customers[i].membership[j].rating+'</th></tr>');
//                   //     }
//                   // }
//
//                   // <a href="#" class="list-group-item list-group-item-action sub-item pop-item-entry" onclick="return false">
//                   //   Order 3<br><p class="sub-heading">Placed at: 12:00<br>Items: 3</p>
//                   //     </a>
//
//                   var counter = 0;
//                   for(var i = 0; i<json.orders.length; i++)
//                   {
//                     if (json.orders[i].deliveryGuy == dlvyguy)
//                     {
//                       if (json.orders[i].status == "cooked")
//                       {
//                         counter = counter+1;
//                         $("#cooked-list").append('<a href="#" class="list-group-item list-group-item-action sub-item pop-item-entry" onclick="return false">'+json.orders[i].customer+'<br><p class="sub-heading">Placed at:'+json.orders[i].time+'<br> Price: $'+json.orders[i].price+'</p></a>');
//                       }
//                     }
//                   }
//
//               } else if (xmlHttp.status == 404) {
//                   console.log("404 not found");
//               }
//           }
//       };
//
//       xmlHttp.send(null);
//
//   } catch(e) {
//       console.log(e.toString());
//   }
//
// });




$(document).ready(function() {

    var username = localStorage.getItem("username");
    $(".name-heading").text(username);

    //Handling of active list items
    $(document).on("click", "a", function(e){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    });
});
checkForDeliveries();

function deliverOrder() {
    var time = $(".active #time").text();

    var xmlHttp2 = new XMLHttpRequest();

  //load orders
  try{
      xmlHttp2.open("GET", "setDelivered/"+time, true);

      xmlHttp2.onreadystatechange = function() {
          if(xmlHttp2.readyState == 4) {
              if(xmlHttp2.status == 200) { //Everything went okay
                  console.log(JSON.parse(xmlHttp2.responseText));

              } else if (xmlHttp.status == 404) {
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

function checkForDeliveries() {
    //$("#pending-orders").empty();

    var xmlHttp = new XMLHttpRequest();

  //load orders
  try{
      xmlHttp.open("GET", "get/file/orders.json", true);

      xmlHttp.onreadystatechange = function() {
          if(xmlHttp.readyState == 4) {
              if(xmlHttp.status == 200) { //Everything went okay
                  console.log(JSON.parse(xmlHttp.responseText));
                  var json = JSON.parse(xmlHttp.responseText);
                  var dg = localStorage.getItem("username");

                  var currentStore = localStorage.getItem("currentStore").toLowerCase().trim().split(" ").join("_");//converts store name to lower case with underscores instead of spaces

                  for(var i = 0; i<json.orders.length; i++)
                  {
                    if (json.orders[i].deliveryGuy == dg)
                    {
                      if (json.orders[i].status == "cooked")
                      {
                        $("#cooked-orders").append('<a href="#" class="list-group-item list-group-item-action sub-item pop-item-entry" onclick="return false">'+json.orders[i].customer+'<br><p class="sub-heading">Placed at:<div id="time">'+json.orders[i].time+'</div><br> Price: $'+json.orders[i].price+'</p></a>');
                      }
                    }
                  }

              } else if (xmlHttp.status == 404) {
                  console.log("404 not found");
              }
          }
      };

      xmlHttp.send(null);
      //xmlHttp.abort();

  } catch(e) {
      console.log(e.toString());
  }

}
