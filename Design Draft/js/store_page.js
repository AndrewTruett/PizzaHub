$(document).ready(function() {
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
    
    var prev;
    $(".price-sensitive-select").focus(function() {
        prev = this.value;
        }).change(function() {
            var priceStr = $("#custom-price").text();//Get text of the <p>
            var oldPrice = parseInt(priceStr.match(/\$(\d+)/)[1]);//Convert to int
        
            var prevSelectedPrice = parseInt(prev);
            var newSelectedPrice = parseInt($(this).val());
            var newPrice = oldPrice - prevSelectedPrice + newSelectedPrice;
            $("#custom-price").text("$"+newPrice);
    });
    
    //Handling of active list items
    $("a").on("click", function(e){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    });
    
  });

