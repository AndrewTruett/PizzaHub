var express = require('express');
var path = require('path');
var app = express();
var fs = require('fs');
app.use(express.static('public'))

app.get('/', function(req, res) {
    res.sendFile(__dirname+'/public/index.html');
});
app.get('/home', function(req, res) {
    res.sendFile(__dirname+'/public/index.html');
});

//Create new user
app.get('/:storename/newuser/:username/:password/:photourl', function(req, res) {
    var username = req.params.username;
    var password = req.params.password;
    var storename = req.params.storename;
	var photourl = req.params.photourl;
    //res.send('You requested to make a new record for ' + username+', with password '+password+' at the store '+ storename);

    fs.readFile(__dirname+'/public/system/customers.json', function(err, data) {
        var json = JSON.parse(data);
        json.customers.push(
            {
            "username": username,
            "password": password,
            "blacklisted":false,
			"photoID":photourl,
            "address":{
                "lat":40.765319,
                "lng":-73.993710
            },
            "membership":[
            {
                "store":storename,
                "type":"pending",
                "rating":5
            }
            ]
            }
        );
        //console.log(json);
        fs.writeFile(__dirname+'/public/system/customers.json', JSON.stringify(json));
    });
});

//Create new order
app.get('/neworder/:username/:cook/:currentStore/:price/:today', function(req, res) {
    var username = req.params.username;
    var cook = req.params.cook;
    var currentStore = req.params.currentStore;
    var today = req.params.today;
    var price = req.params.price;
    var specInstructions = req.params.specInstructions;
    
    fs.readFile(__dirname+'/public/system/orders.json', function(err, data) {
        var json = JSON.parse(data);
        json.orders.push(
        {
		"status": "pending",
		"customer": username,
		"cook": cook,
		"deliveryGuy":"deliveryguy",
		"store": currentStore,
		"time": today,
        "price": price,
		"address":{
			"lat":40.756868,
			"lng":-73.985345
			}
        });
    
        console.log("Attempted to make an order");
        fs.writeFile(__dirname+'/public/system/orders.json', JSON.stringify(json));
    });
});

//check login
app.get('/:storeName/:userType/:username/:password/checkLogin',function(req,res)
{
    var username = req.params.username;
    var password = req.params.password;
    var store = req.params.storeName;
    var userType = req.params.userType;
    
    console.log("Checking login information for "+username+" with the password "+password+" at the store "+store+" as a "+userType+".");

    if(userType == "customer") {
        fs.readFile(__dirname+'/public/system/customers.json', function(err, data) {
            var json = JSON.parse(data);

            var found = false;

            for(var i=0; i<json.customers.length && !found; i++)
            {
                if (json.customers[i].username == username)
                {
                    if (json.customers[i].password == password && !json.customers[i].blacklisted)
                    {
                        for (var j = 0; j < json.customers[i].membership.length; j++)
                        {
                            if (json.customers[i].membership[j].store == store)
                            {
                                found = true;
                            }
                        }
                    }
                }
            }

            if(found) {
                console.log("Login was successful");
                res.send("true");
            } else {
                console.log("Login was not successful");
                res.send("false");
            }

        });
        
    } else if (userType == "cook") {
        fs.readFile(__dirname+'/public/system/cooks.json', function(err, data) {
            var json = JSON.parse(data);

            var found = false;
            
            for(var i=0; i<json.cooks.length && !found; i++)
            {
                if (json.cooks[i].username == username)
                {
                    if (json.cooks[i].password == password)
                    {
                        if (json.cooks[i].store == store && !json.cooks[i].laidOff)
                            found = true;
                    }
                }
            }
            
            if(found) {
                console.log("Login was successful");
                res.send("true");
            } else {
                console.log("Login was not successful");
                res.send("false");
            }
            
            
        });
        
    } else if (userType == "manager") {
        fs.readFile(__dirname+'/public/system/managers.json', function(err, data) {
            var json = JSON.parse(data);

            var found = false;
            
            for(var i=0; i<json.managers.length && !found; i++)
            {
                if (json.managers[i].username == username)
                {
                    if (json.managers[i].password == password)
                    {
                        if (json.managers[i].store == store)
                            found = true;
                    }
                }
            }
            
            if(found) {
                console.log("Login was successful");
                res.send("true");
            } else {
                console.log("Login was not successful");
                res.send("false");
            }
            
            
        });
        
    } else if (userType == "deliveryGuy") {
        fs.readFile(__dirname+'/public/system/deliveryGuys.json', function(err, data) {
            var json = JSON.parse(data);

            var found = false;
            
            for(var i=0; i<json.deliveryGuys.length && !found; i++)
            {
                if (json.deliveryGuys[i].username == username)
                {
                    if (json.deliveryGuys[i].password == password)
                    {
                        if (json.deliveryGuys[i].store == store && !json.deliveryGuys[i].laidOff)
                            found = true;
                    }
                }
            }
            
            if(found) {
                console.log("Login was successful");
                res.send("true");
            } else {
                console.log("Login was not successful");
                res.send("false");
            }
            
            
        });
    }
});

//Returns json file of requested type of user.
app.get('/get/file/:userType',function(req,res) {
    var userType = req.params.userType;
    
    if (userType == "customers.json") 
        res.sendFile(__dirname+'/public/system/customers.json');
        
     else if (userType == "managers.json") 
        res.sendFile(__dirname+'/public/system/managers.json');
        
     else if (userType == "cooks.json") 
        res.sendFile(__dirname+'/public/system/cooks.json');
        
    else if (userType == "deliveryGuys.json") 
        res.sendFile(__dirname+'/public/system/deliveryGuys.json');
        
    else if (userType == "stores.json") 
        res.sendFile(__dirname+'/public/system/stores.json');
    
    else if (userType == "orders.json") 
        res.sendFile(__dirname+'/public/system/orders.json');
        
    else
        res.status(404).send('404 not found');
});

app.get('/setDelivered/:time',function(req,res)
{
	    fs.readFile(__dirname+'/public/system/orders.json', function(err, data) {
        var json = JSON.parse(data);
		var t = req.params.time;
		
		for(var i=0; i<json.orders.length; i++)
		{
			if(json.orders[i].time==t)
			{
				json.orders[i].status = "delivered";
			}
		}
    
        console.log("updated order to delivered");
        fs.writeFile(__dirname+'/public/system/orders.json', JSON.stringify(json));
    });
	
});

app.get('/setCooked/:time',function(req,res)
{
	    fs.readFile(__dirname+'/public/system/orders.json', function(err, data) {
        var json = JSON.parse(data);
		var t = req.params.time;
        
        console.log("Time sent:"+t);
		
		for(var i=0; i<json.orders.length; i++)
		{
            console.log("Time: "+json.orders[i].time);
			if(json.orders[i].time==t)
			{
				json.orders[i].status = "cooked";
			}
		}
    
        console.log("updated order to cooked");
        fs.writeFile(__dirname+'/public/system/orders.json', JSON.stringify(json));
    });
	
});
	


app.listen(8080);