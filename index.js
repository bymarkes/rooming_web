var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var roomingApi = require('./rooming');
var hash = require('./hash');
var override = require('express-method-override');

app.use(override('_method', {methods: ['POST','GET']}));
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

            res.redirect('profile');
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

app.get('/establiment/new', function(req,res){
    if (req.cookies.nick) {
        res.render('new-establiment',{'nick':req.cookies.nick});
    }else{
        res.redirect('/');
    }
});

app.get('/establiment/:id', function(req,res){
    var e = roomingApi.getEstabliment(req.params.id);
    var r = roomingApi.getEstablimentRooms(req.params.id);  
    var f = roomingApi.getAllFoto(); 
    var usuari; 
    if (req.cookies.nick) {
        usuari = roomingApi.getUsuari(req.cookies.nick);   
    }         
    res.render('establiment',{'establiment':e, 'rooms':r, 'fotos':f,'nick':req.cookies.nick, 'usuari':usuari});    
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

app.get('/room/:id', function(req,res){
    var r = roomingApi.getRoom(req.params.id);
    var c = roomingApi.getCategoria(r.categoria_id);
    var e = roomingApi.getEstabliment(r.establiment_id);
    var f = roomingApi.getAllFoto();      
    var com = roomingApi.getRoomAllComentari(req.params.id);
    res.render('room',{'nick':req.cookies.nick, 'room':r, 'fotos':f, 'categoria':c.Titol,
'establiment':e, 'comentaris':com} );
});

app.post('/comentari', function(req, res){
    roomingApi.postRoomComentari(parseInt(req.body.room_id), req.body);
    res.redirect('/room/'+req.body.room_id);
});

app.get('/profile', function(req,res){
    if (req.cookies.nick){
        var userNew = roomingApi.getUsuari(req.cookies.nick);
        var dataSplitted = userNew.AnyNaixement.split(' ');
        userNew.AnyNaixement = dataSplitted[0];
        res.render('profile',{'usuari': userNew, 'nick':req.cookies.nick});
    }else{
        res.redirect('/login');
    }
    
});

app.put('/profile', function(req,res){
    var nick = req.body.Nick;
    var pass = req.body.Contrasenya;
    var userNew;
    
    if (!pass){
        roomingApi.putUsuari(req.body);
    }else{
        var hashPass = hash.hashSaltPass(pass);
        req.body.Contrasenya = hashPass;    
        roomingApi.putUsuari(req.body);
    }
    res.redirect('profile');
});

app.get('/signout', function(req,res){
    roomingApi.deleteToken(req.cookies.token);
    res.clearCookie('nick');
    res.clearCookie('token');
    res.redirect('/');  
});

app.get('/map', function(req,res){
    var punts = roomingApi.getGps();     
    var nomsEstabliment = [];

    for (let i = 0; i < punts.length; i++) {
        const element = punts[i];
        nomsEstabliment[i] = roomingApi.getEstabliment(element.establiment_id);
    } 

    punts = getJSonObject(JSON.stringify(punts));
    nomsEstabliment = getJSonObject(JSON.stringify(nomsEstabliment));
    
    res.render('map',{"puntsDelMapa":punts, "nomsEstabliment":nomsEstabliment});  
});

app.get('/profile/reserves',function(req,res){
    var u = roomingApi.getUsuari(req.cookies.nick);
    var establiment;
    if(u){
        if(u.Tipus == 1){
            var e = roomingApi.getAllEstabliment();
            for (let index = 0; index < e.length; index++) {
                const element = e[index];
                    if (element.usuari_id == u.id){
                        establiment = element;
                        break;
                    }
            }
    
            var r  = roomingApi.getEstablimentRooms(establiment.id);
    
            for (let index = 0; index < r.length; index++) {
                var reserves = roomingApi.getRoomReserves(r[index].id);
                r[index].Reserves = reserves;
            }
            res.render("reserves",{"rooms":r,'nick':req.cookies.nick})
        }
            
    }else{
        res.redirect("/");
    }
   
});

app.listen(3000);


function getJSonObject(value) {
    return value.replace(/"/ig, "'");
} 