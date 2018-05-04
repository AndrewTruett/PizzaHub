var express = require('express');
var path = require('path');
var app = express();
app.use(express.static('public'))

app.get('/', function(req, res) {//when user goes to domain.com/ this function is fired
    //res.send('Home page');
    res.sendFile(__dirname+'/public/index.html');
});
app.get('/home', function(req, res) {//when user goes to domain.com/home this function is fired
    //res.send('Home page via /home');
    //res.sendFile("../../index.html");
    res.sendFile(__dirname+'/public/index.html');
});

app.get('/store/:name', function(req, res) {
    res.send('You requested to see store with the id ' + req.params.id);
});

app.listen(8080);