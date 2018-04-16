var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var roomingApi = require('./rooming');

app.use(bodyParser.json({ type: 'application/json'}));

app.use(express.static('public'));

app.get('/', function(req,res){
    res.sendFile(__dirname+'/views/index.html');
});

app.get('/login', function(req,res){
    res.sendFile(__dirname+'/views/login.html');
});

app.get('/categories', function(req,res){
    res.sendFile(__dirname+'/views/categories.html');
});

app.get('/register', function(req,res){
    res.sendFile(__dirname+'/views/register.html');
});

app.get('/plantilla', function(req,res){
    res.sendFile(__dirname+'/views/plantilla.html');
});

app.get('/profile', function(req,res){
    res.sendFile(__dirname+'/views/profile.html');
});

app.listen(3000);