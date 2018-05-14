$(document).ready(function()
{
   var searchResults = function()
   {
     var searchedItem = localStorage.getItem("searchedtStore").toLowerCase();
     // alert(searchedItem);

//future updates will feature show results by store name + key words+ famous menus
      var stores= [
        {
          name:"angelos_pizza",
          keyword:"Angelos Pizza",
          matchFound:0
        },
        {
          name:"mariella_pizza",
          keyword:"Mariella Pizza",
          matchFound:0
        },
        {
          name:"garlic_new_york_pizza_bar",
          keyword:"Garlic New York Pizza Bar",
          matchFound:0
        },
        {
          name:"famous_amadeus_pizza",
          keyword:"Famous Amadeus Pizza",
          matchFound:0
        },
        {
          name:"don_hyder",
          keyword:"Don Hyder",
          matchFound:0
        },
        {
          name:"little_italy_pizza",
          keyword:"Little Italy Pizza",
          matchFound:0
        }
      ];


     var output = "";
     var counter = 0;
     for (var i=0; i<stores.length; i++)
     {
       if(searchedItem == stores[i].keyword.toLowerCase())
       {
         counter = counter+1;
         // alert(searchedItem+ ' found');
         output += '<li> <span class="mm-store-name"><button type="button" class="btn btn-success btn-lg" data-toggle="modal" data-target="#loginModal" onclick="saveStoreNameNearestStores()" id="login-btn">'+stores[i].keyword+'</button></span></li>'
       }
     }

     if (counter==0)
     {
          document.getElementById('search-result-counter').innerHTML = '<h2>No Matches Found!</h2>';
     }
     else if (counter==1)
     {
       document.getElementById('search-result-counter').innerHTML = '<h2>1 Match Found!</h2>';
     }
     else {
       document.getElementById('search-result-counter').innerHTML = '<h2>'+counter+' Matches Found!</h2>';
     }

     document.getElementById('search-results').innerHTML = output;
   };

   searchResults();
});
