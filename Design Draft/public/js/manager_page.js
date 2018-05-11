$(document).ready(function() {
    $(".list-group-item").on("click", function() {
        $(this).toggleClass("active");
        $(this).siblings().removeClass("active");
    });
    
    var xmlHttp = new XMLHttpRequest();
    
    try{
        xmlHttp.open("GET", "get/file/customers.json", true);
        
        xmlHttp.onreadystatechange = function() {
            if(xmlHttp.readyState == 4) {
                if(xmlHttp.status == 200) { //Everything went okay
                    console.log(JSON.parse(xmlHttp.responseText));
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