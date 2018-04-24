$(document).ready(function() {
    $("#add-pop-item-btn").click(function(){
        var order = $("#pop-item-row a.active").text();
        if(order == "")
            alert("Please make a selection.");
        else
            $(".list-group-flush").append('<li class="list-group-item">'+ order +'<button type="button" class="btn btn-link" id="remove-btn">Remove</button></li>');
    });
    
    $("#add-bvg-btn").click(function(){
        var order = $("#beverage-row a.active").text();
        if(order == "")
            alert("Please make a selection.");
        else
            $(".list-group-flush").append('<li class="list-group-item">'+ order +'<button type="button" class="btn btn-link" id="remove-btn">Remove</button></li>');
    });
    
    $("#add-menu-item-btn").click(function(){
        var order = $("#menu-row a.active").text();
        if(order == "")
            alert("Please make a selection.");
        else
            $(".list-group-flush").append('<li class="list-group-item">'+ order +'<button type="button" class="btn btn-link" id="remove-btn">Remove</button></li>');
    });
    
    $("#add-spec-item-btn").click(function(){
        var priceStr = $("#custom-price").text();//Get text of the <p>
        $(".list-group-flush").append('<li class="list-group-item">'+ priceStr +' Custom Item' +'<button type="button" class="btn btn-link" id="remove-btn">Remove</button></li>');
    });
    
    $(".checkout-items ul").on("click", "#remove-btn", function(){
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

    
    
    $("#topping-select").change(function() {
        var str = $("#topping-select option:selected").text();
        var num = str.match(/\$(\d+)/);
        alert(num[1]);
    });
    
    //Handling of active list items
    $("a").on("click", function(e){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    });
    
  });