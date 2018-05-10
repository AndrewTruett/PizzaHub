$(document).ready(function() {
    
    $("#create-account-btn").click(function() {
        var currentStore = localStorage.getItem("currentStore").toLowerCase().trim().split(" ").join("_");//converts store name to lower case with underscores instead of spaces
        
        try {
            var username = $("#username").val();
            var password = $("#password").val();
            xmlHttp.open("GET", currentStore+"/newuser/"+username+"/"+password, true);
            xmlHttp.onreadystatechange = handleServerResponse;
            xmlHttp.send(null);
            
            window.location.href="store_page.html";//This will depend on the users position (ie manager, cust, dg, etc)
        } catch(e) {
            console.log(e.toString());
        }
    });
});

var xmlHttp = new XMLHttpRequest();

function handleServerResponse() {
    //Note some browsers ignore states.
    if(xmlHttp.readyState == 4) {
        if(xmlHttp.status == 200) { //Everything went okay
            console.log(xmlHttp.responseText);
        } else if (xmlHttp.status == 404) {
            console.log("404 not found");
        }
    }
}