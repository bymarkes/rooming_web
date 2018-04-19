var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var roomingApi = require('./rooming');
var hash = require('./hash');

app.use(bodyParser.json({ type: 'application/json'}));

app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views','./views');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.get('/', function(req,res){
    var r = roomingApi.getAllRoom();
    var f = roomingApi.getAllFoto();
    res.render('index', {'rooms':r, 'fotos':f});
});

app.get('/login', function(req,res){
    res.render('login');
});

app.post('/login', function(req, res){
    var nick = req.body.Nick;
    var passNick = req.body.Pass;

    var usuari = roomingApi.getUsuari(nick);    

    var passHash = hash.onlyHashPass(passNick);
    
    var passBD = hash.removeSalt(usuari.Contrasenya);
    
    if (passHash == passBD) {
        console.log("ASI ES");
    }else{
        console.log("NOOOOOOOOO , ASI NO ES");
    }
   
    res.render('login');
});

app.get('/categories', function(req,res){
    var c = roomingApi.getAllCategoria();
    res.render('categories',{'categories':c});
});

app.get('/categories/:id', function(req,res){
    var c = roomingApi.getCategoria(req.params.id);
    var r = roomingApi.getCategoriaRoom(req.params.id);    
    res.render('categoria',{'categoria':c, 'rooms':r});
});

app.get('/register', function(req,res){
    res.render('register');
});

app.get('/plantilla', function(req,res){
    res.render('plantilla');
});

app.get('/rooms', function(req,res){
    var r = roomingApi.getAllRoom();  
    var f = roomingApi.getAllFoto();      
    res.render('rooms',{'rooms':r, 'fotos':f});
});

app.get('/profile', function(req,res){
    res.render('profile');
});

app.listen(3000);