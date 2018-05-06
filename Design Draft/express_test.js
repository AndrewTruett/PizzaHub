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
});

app.get('/store/:name', function(req, res) {
    res.send('You requested to see store with the id ' + req.params.id);
});

app.listen(8080);