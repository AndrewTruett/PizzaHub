$(document).ready(function() {
    //Handling of active list items
    $("a").on("click", function(e){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    });
    checkForOrders();//setInterval()
});

function checkForOrders() {
    $("#pending-orders").empty();
    
    var numOrders = localStorage.getItem("currentOrderID");
    alert(numOrders);
    for(i = 1; i <= numOrders; i++) {
        var currOrder = JSON.parse(localStorage.getItem("pendingOrder"+i));
        if(currOrder != null) {
            $("#pending-orders").append('<a href="#" class="list-group-item list-group-item-action sub-item pop-item-entry" onclick="return false">Order ' + i +'<br><p class="sub-heading">Placed at: ' + currOrder.timestamp + '<br>Items: ' + currOrder.numItems + '</p></a>');      
        }
    }   
}