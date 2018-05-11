$(document).ready(function() {
    
    $("#store-name").text(localStorage.getItem("currentStore"));
    
    $(".list-group-item").on("click", function() {
        $(this).toggleClass("active");
        $(this).siblings().removeClass("active");
    });
    
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
                                $("#customer-list").append('<tr><th><input type = "checkbox" name="record"></th><th>'+username+'</th><th>'+json.customers[i].membership[j].rating+'</th></tr>'); 
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
                        
                        if(json.deliveryGuys[i].store == currentStore && !json.deliveryGuys.laidOff)//user has to be member of this store
                                $("#employee-list").append('<tr><th><input type = "checkbox" name="record"></th><th>'+username+'</th><th>'+json.deliveryGuys[i].rating+'</th></tr>'); 
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
});

function populateLists(data) {
    
}