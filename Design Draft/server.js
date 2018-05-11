var express = require('express');
var path = require('path');
var app = express();
var fs = require('fs');
app.use(express.static('public'))

app.get('/', function(req, res) {//when user goes to domain.com/ this function is fired
    res.sendFile(__dirname+'/public/index.html');
});
app.get('/home', function(req, res) {//when user goes to domain.com/home this function is fired
    //res.send('Home page via /home');
    //res.sendFile("../../index.html");
    res.sendFile(__dirname+'/public/index.html');

    /*******This is how to write to a text file.
    fs.writeFile(__dirname+'/public/system/test.txt', 'Hey there!', function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });*/

    /*******This is how to read a text file. Whatever was in the text file comes back as the data argument. err is the error, if there ws no error, err is null.
    fs.readFile(__dirname+'/public/system/test.txt', 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        console.log(data);
    });*/
});

//Create new user
app.get('/:storename/newuser/:username/:password', function(req, res) {
    var username = req.params.username;
    var password = req.params.password;
    var storename = req.params.storename;
    //res.send('You requested to make a new record for ' + username+', with password '+password+' at the store '+ storename);

    fs.readFile(__dirname+'/public/system/customers.json', function(err, data) {
        var json = JSON.parse(data);
        json.customers.push(
            {
            "username": username,
            "password": password,
            "blacklisted":false,
            "address":{
                "lat":40.765319,
                "lng":-73.993710
            },
            "membership":[
            {
                "store":storename,
                "type":"member",
                "rating":5
            }
            ]
            }
        );
        //console.log(json);
        fs.writeFile(__dirname+'/public/system/customers.json', JSON.stringify(json));
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

    //if customer
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
});

app.listen(8080);