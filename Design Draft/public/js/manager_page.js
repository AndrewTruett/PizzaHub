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
    
    //Load employees
    try{
        xmlHttp.open("GET", "get/file/cooks.json", true);
        
        xmlHttp.onreadystatechange = function() {
            if(xmlHttp.readyState == 4) {
                if(xmlHttp.status == 200) { //Everything went okay
                    console.log(JSON.parse(xmlHttp.responseText));
                    var json = JSON.parse(xmlHttp.responseText);
                    
                    var currentStore = localStorage.getItem("currentStore").toLowerCase().trim().split(" ").join("_");//converts store name to lower case with underscores instead of spaces
                    
                    for(var i = 0; i<json.cooks.length; i++) {
                        var username = json.cooks[i].username;
                        
                        if(json.cooks[i].store == currentStore)//user has to be member of this store
                                $("#employee-list").append('<tr><th><input type = "checkbox" name="record"></th><th>'+username+'</th><th>'+json.cooks[i].rating+'</th></tr>'); 
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
});

function populateLists(data) {
    
}