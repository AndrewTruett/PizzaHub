$(document).ready(function() {
    var storeName = localStorage.getItem("currentStore");
    $(".store-heading").text(storeName);
    
    
    
    
    $("#add-pop-item-btn").click(function(){
        var order = $("#pop-item-row a.active").text();
        if(order == "")
            alert("Please make a selection.");
        else
            $(".list-group-flush").append('<li class="list-group-item">'+ order +'<button type="button" class="btn btn-link" id="remove-btn">Remove</button></li>');
        
        var price = parseInt(order.match(/\$(\d+)/)[1]);
        var oldTotal = parseInt($("#total-label").text().match(/\$(\d+)/)[1]);
        var newTotal = oldTotal+price;
        $("#total-label").text("$"+newTotal);
        
    });
    
    $("#add-bvg-btn").click(function(){
        var order = $("#beverage-row a.active").text();
        if(order == "")
            alert("Please make a selection.");
        else
            $(".list-group-flush").append('<li class="list-group-item">'+ order +'<button type="button" class="btn btn-link" id="remove-btn">Remove</button></li>');
        
        var price = parseInt(order.match(/\$(\d+)/)[1]);
        var oldTotal = parseInt($("#total-label").text().match(/\$(\d+)/)[1]);
        var newTotal = oldTotal+price;
        $("#total-label").text("$"+newTotal);
    });
    
    $("#add-menu-item-btn").click(function(){
        var order = $("#menu-row a.active").text();
        if(order == "")
            alert("Please make a selection.");
        else
            $(".list-group-flush").append('<li class="list-group-item">'+ order +'<button type="button" class="btn btn-link" id="remove-btn">Remove</button></li>');
        
        var price = parseInt(order.match(/\$(\d+)/)[1]);
        var oldTotal = parseInt($("#total-label").text().match(/\$(\d+)/)[1]);
        var newTotal = oldTotal+price;
        $("#total-label").text("$"+newTotal);
    });
    
    $("#add-spec-item-btn").click(function(){
        var priceStr = $("#custom-price").text();//Get text of the <p>
        $(".list-group-flush").append('<li class="list-group-item">'+ priceStr +' Custom Item' +'<button type="button" class="btn btn-link" id="remove-btn">Remove</button></li>');
        
        var price = parseInt(priceStr.match(/\$(\d+)/)[1]);
        var oldTotal = parseInt($("#total-label").text().match(/\$(\d+)/)[1]);
        var newTotal = oldTotal+price;
        $("#total-label").text("$"+newTotal);
    });
    
    $(".checkout-items ul").on("click", "#remove-btn", function(){
        var removedPrice = parseInt($(this).parent().text().match(/\$(\d+)/)[1]);
        var oldTotal = parseInt($("#total-label").text().match(/\$(\d+)/)[1]);
        var newTotal = oldTotal - removedPrice;
        $("#total-label").text("$"+newTotal);
        $(this).parent().remove();
        //Reduce price
    });
    
    $(".price-sensitive-select").on("change", function(){
        var p1 = parseInt($("#topping-select").val());
        var p2 = parseInt($("#dough-select").val());
        var newPrice = p1 + p2;
        $("#custom-price").text("$"+newPrice);
    });
    
    //Handling of active list items
    $("a").on("click", function(e){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    });
    
  });

//Maybe add store name in the future
function Order(name, numItems, timestamp) {
    this.name = name;
    this.numItems = numItems;
    this.timestamp = timestamp;
}

function saveOrder() {
    var numItems = $(".list-group-flush").children().length;
    
    if(numItems == 0)//User hasnt added anything to cart
        alert("Please select something to purchase");
    else {
        //Get time
        var today = new Date();
        minutes = today.getMinutes();
        if(minutes < 10)
            minutes = '0'+minutes;
        
        today = today.getMonth()+1 + '/' + today.getDate() + '/' + today.getFullYear() + ' @ ' + today.getHours() + ':' + minutes;
        
        //Create order
        var newOrder = new Order("Andrew", numItems, today);

        if(localStorage.getItem("currentOrderID") == null)
            localStorage.setItem("currentOrderID", 1);
        
        //alert(localStorage.getItem("currentOrderID"));
        
        var orderID = localStorage.getItem("currentOrderID");
        localStorage.setItem("pendingOrder"+orderID, JSON.stringify(newOrder));
        //Update orderID.
        var newOrderID = parseInt(orderID) + 1;
        localStorage.setItem("currentOrderID", newOrderID);

        /*Test code
        var test = localStorage.getItem("pendingOrder1");
        alert(test);
        */
    }
}

