var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var roomingApi = require('./rooming');
var hash = require('./hash');

app.use(bodyParser.json({ type: 'application/json'}));
app.use(cookieParser());
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
    var cookieBow = req.cookies;

    if (cookieBow.nick) {
        res.render('index', {'rooms':r, 'fotos':f, 'nick':cookieBow.nick, 'token':cookieBow.token});        
    }else    
        res.render('index', {'rooms':r, 'fotos':f});
});

app.get('/login', function(req,res){
    var cookieBow = req.cookies.token;
    if (cookieBow) {
        res.redirect('/');  
    }else{
        res.render('login');
    }
});

app.post('/login', function(req, res){
    var nick = req.body.Nick;
    var passNick = req.body.Pass;

    var usuari = roomingApi.getUsuari(nick);    
    if (usuari){
        var passHash = hash.onlyHashPass(passNick);
        var passBD = hash.removeSalt(usuari.Contrasenya);

        if (passHash == passBD) {
            var date = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');  
            var result = {
                "usuari_id":usuari.id, 
                "creat":date
            };
            
            var tokenObj = roomingApi.postToken(result);
            var token = tokenObj.token;

            res.cookie('nick',usuari.Nick);
            res.cookie('token',token);

            var dataNaix = usuari.AnyNaixement;
            var dataSplitted = dataNaix.split(' ');
            usuari.AnyNaixement = dataSplitted[0];

            res.render('profile', {'usuari':usuari, 'token':token, 'nick':usuari.Nick});
        }else{
            res.render('login', {'errorLogin':true});        
        }    
    }else{
        res.render('login', {'errorLogin':true});   
    }
   
});

app.get('/categories', function(req,res){
    var c = roomingApi.getAllCategoria();
    res.render('categories',{'categories':c,'nick':req.cookies.nick});
});

app.get('/categories/:id', function(req,res){
    var c = roomingApi.getCategoria(req.params.id);
    var r = roomingApi.getCategoriaRoom(req.params.id);    
    res.render('categoria',{'categoria':c, 'rooms':r, 'nick':req.cookies.nick});
});
app.get('/register', function(req,res){
    res.render('register');
});

app.post('/register', function(req,res){
    var hashPass = hash.hashSaltPass(req.body.Contrasenya);
    req.body.Contrasenya = hashPass;
    roomingApi.postUsuari(req.body);
    res.render('login');
});

app.get('/plantilla', function(req,res){
    res.render('plantilla');
});

app.get('/rooms', function(req,res){
    var r = roomingApi.getAllRoom();  
    var f = roomingApi.getAllFoto();      
    res.render('rooms',{'rooms':r, 'fotos':f, 'nick':req.cookies.nick});
});

app.get('/room', function(req,res){
      
    res.render('room',{'nick':req.cookies.nick} );
});

app.get('/profile', function(req,res){
    if (req.cookies.nick){
        var userNew = roomingApi.getUsuari(req.cookies.nick);
        res.render('profile',{'usuari': userNew, 'nick':req.cookies.nick});
    }else{
        res.redirect('/login');
    }
    
});

app.post('/profile', function(req,res){
    var nick = req.body.Nick;    
    var userOld = roomingApi.getUsuari(nick);
    var userNew = roomingApi.putUsuari(req.body);
    console.log(userNew);
    res.render('profile',{'usuari': userNew});
});

app.get('/signout', function(req,res){
    res.clearCookie('nick');
    res.clearCookie('token');
    res.redirect('/');  
});

app.listen(3000);