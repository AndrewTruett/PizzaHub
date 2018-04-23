$(document).ready(function() {
    $("#add-pop-item-btn").click(function(){
        var order = $("#pop-item-row a.active").text();
        if(order == "")
            alert("Please make a selection.");
        else
        $(".list-group-flush").append('<li class="list-group-item">'+ order +'<button type="button" class="btn btn-link">Remove</button></li>');
    });
    
    $("#add-bvg-btn").click(function(){
        var order = $("#beverage-row a.active").text();
        if(order == "")
            alert("Please make a selection.");
        else
        $(".list-group-flush").append('<li class="list-group-item">'+ order +'<button type="button" class="btn btn-link">Remove</button></li>');
    });
    
    
    //Handling of active list items
    $("a").on("click", function(e){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    });
    
  });