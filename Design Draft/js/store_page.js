$(document).ready(function() {
    $("#add-pop-item-btn").click(function(){
        var order = $("#pop-item-row a.active").text();
        if(order == "")
            alert("Please make a selection.");
        else
        $(".list-group-flush").append('<li class="list-group-item">'+ order +'</li>');
      })
    
    
    //Handling of active list items
    $("a").on("click", function(e){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })
    
  });