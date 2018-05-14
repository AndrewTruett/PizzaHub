$(document).ready(function()
{
   var searchResults = function()
   {
     var searchedItem = localStorage.getItem("searchedtStore");
     alert(searchedItem);

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

     for (var i=0; i<stores.length; i++)
     {
       //pass
     }
   };

   searchResults();
});
