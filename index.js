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
    var c = roomingApi.getAllCategoria();
    var cookieBow = req.cookies;

    if (cookieBow.nick) {
        res.render('index', {'rooms':r, 'fotos':f,'categories':c, 'nick':cookieBow.nick, 'token':cookieBow.token});        
    }else    
        res.render('index', {'rooms':r, 'fotos':f,'categories':c});
});

app.get('/dashboard', function(req,res){
    var usuari = roomingApi.getUsuari(req.cookies.nick);
    if(usuari && usuari.Tipus ==3){
        var r = roomingApi.getAllRoom();
        var tr = 0;
        
        r.forEach(element => {
            var com = roomingApi.getRoomAllComentari(element.id);
            element.Comentari= com;
            tr = tr+1;
        });

        var e = roomingApi.getAllEstabliment();
        var te = 0;
        e.forEach(element => {
            te = te+1;
        });
        
        var u = roomingApi.getAllUsuari();
        var tu = 0;
        u.forEach(element => {
            tu = tu+1;
        });

        var c = roomingApi.getAllCategoria();
        var tc = 0;
        c.forEach(element => {
            tc = tc+1;
        });

        var f = roomingApi.getAllFoto();        
        res.render('dashboard', {'nick':req.cookies.nick, 'fotos':f, 'rooms':r, 'totalRooms': tr, 'establiments':e, 'totalEstabliments': te, 'categories':c, 'totalCategories': tc, 'usuaris':u, 'totalUsuaris': tu});
    }else{
        res.redirect('/');
    }
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


app.post('/establiment/new', function(req,res){
    if (req.cookies.nick) {
        var usuari = roomingApi.getUsuari(req.cookies.nick);
        var e = roomingApi.postEstabliment(req.body, usuari.id); 
        var gps = roomingApi.postEstablimentGps(req.body, e.id);      

        res.redirect('/profile');
    }else{
        res.redirect('/');
    }
});

app.get('/establiment/new', function(req,res){
    if (req.cookies.nick) {
        res.render('new-establiment',{'nick':req.cookies.nick});
    }else{
        res.redirect('/');
    }
});

app.get('/establiment/:id/edit', function(req,res){
    var e = roomingApi.getEstabliment(req.params.id);
    var r = roomingApi.getEstablimentRooms(req.params.id);  
    var f = roomingApi.getAllFoto(); 
    var usuari; 
    if (req.cookies.nick) {
        usuari = roomingApi.getUsuari(req.cookies.nick);
        if (e.usuari_id == usuari.id) {
            var punts = roomingApi.getEstablimentGps(req.params.id);     
            res.render('edit-establiment',{'establiment':e, 'rooms':r, 'fotos':f,'nick':req.cookies.nick, 'usuari':usuari, "puntsDelMapa":punts});     
        }else{
            res.redirect('/');
        }   
    }
});

app.put('/establiment/:id', function(req,res){
    var id = req.params.id;
    roomingApi.putEstabliment(id, req.body);

    var punts = roomingApi.getEstablimentGps(id);
    roomingApi.putEstablimentGps(id, punts.id, req.body);
    res.redirect('/establiment/'+id);
});

app.delete('/establiment/:id', function(req,res){
    var establiment_id = req.params.id;
    var e = roomingApi.getEstabliment(establiment_id);
    
    if (e.Nom == req.body.Nom) {
        eliminarEstabliment(establiment_id);
        res.redirect('/profile/');
    }else{
        res.redirect('/establiment/'+establiment_id+'/edit');
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
    var punts = roomingApi.getEstablimentGps(req.params.id);  
    punts = getJSonObject(JSON.stringify(punts));       
    res.render('establiment',{'establiment':e, 'rooms':r, 'fotos':f,'nick':req.cookies.nick, 'usuari':usuari, "puntsDelMapa":punts});    
});

app.get('/categories/:id', function(req,res){
    var c = roomingApi.getCategoria(req.params.id);
    var r = roomingApi.getCategoriaRoom(req.params.id);    
    res.render('categoria',{'categoria':c, 'rooms':r, 'nick':req.cookies.nick});
});

app.post('/categoria', function(req,res){
    
    roomingApi.postCategoria(req.body);
    res.redirect('dashboard');     
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

app.get('/room/new/:id', function(req,res){
    var c = roomingApi.getAllCategoria();
    var e = roomingApi.getEstabliment(req.params.id);
    res.render('new-room',{'categories':c, 'establiment':e, 'nick':req.cookies.nick});
});

app.post('/room/new', function(req,res){
    var r = roomingApi.postRoom(req.body);
    res.redirect('/room/'+r.id);
});

app.put('/room/:id', function(req,res){
    var id = req.params.id;
    var a = roomingApi.putRoom(id, req.body);
    res.redirect('/room/'+id);
});

app.get('/room/:id', function(req,res){
    var r = roomingApi.getRoom(req.params.id);
    var c = roomingApi.getCategoria(r.categoria_id);
    var e = roomingApi.getEstabliment(r.establiment_id);
    var f = roomingApi.getAllFoto();      
    
    var com = roomingApi.getRoomAllComentari(req.params.id);
    var usuari = roomingApi.getUsuari(req.cookies.nick);
    var propietari = false;
    
    if (usuari){
        if(usuari.id == e.usuari_id){
            propietari = true;
        }
    }
    res.render('room',{'nick':req.cookies.nick, 'room':r, 'fotos':f, 'categoria':c.Titol,
'establiment':e, 'comentaris':com, 'propietari':propietari } );
});

app.get('/room/:id/edit', function(req,res){
    var c = roomingApi.getAllCategoria();
    var r = roomingApi.getRoom(req.params.id);
    
    res.render('edit-room',{'nick':req.cookies.nick, 'categories':c, 'room':r});
});

app.delete('/room/:id', function(req,res){
    var room_id = req.params.id;
    var r = roomingApi.getRoom(room_id);
    
    if (r.Nom == req.body.Nom) {
        eliminarRoom(room_id);
        res.redirect('/profile/');
    }else{
        res.redirect('/room/'+room_id+'/edit');
    }
});  

app.post('/comentari', function(req, res){
    roomingApi.postRoomComentari(parseInt(req.body.room_id), req.body);
    res.redirect('/room/'+req.body.room_id);
});

app.get('/profile', function(req,res){
    if (req.cookies.nick){
        var usuari = roomingApi.getUsuari(req.cookies.nick);
        var dataSplitted = usuari.AnyNaixement.split(' ');
        usuari.AnyNaixement = dataSplitted[0];
        var establiments = roomingApi.getAllEstabliment();
        var establimentsUsuari = []
        for (let i = 0; i < establiments.length; i++) {
            const element = establiments[i];
            if (element.usuari_id == usuari.id ) {
                establimentsUsuari.push(element);
            }
        }
        res.render('profile',{'usuari': usuari, 'nick':req.cookies.nick, 'establiments':establimentsUsuari});
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

app.post('/search', function(req,res){
    var rooms = roomingApi.getAllRoom();
    var establiments = roomingApi.getAllEstabliment();
    var f = roomingApi.getAllFoto();
    var c = roomingApi.getAllCategoria();
    var roomFilter = [];
    
    for (let i = 0; i < rooms.length; i++) {
        const element = rooms[i];
        if (element.categoria_id == req.body.categoria){
            if (element.Persones == req.body.participants){
               for (let x = 0; x < establiments.length; x++) {
                   const establiment = establiments[x];
                   if (establiment.id == element.establiment_id) {
                       roomFilter.push(element);
                   }   
               }
            }
        }    
    }
    res.render('searchRooms',{'rooms':roomFilter, 'fotos':f,'categories':c, 'nick':req.cookies.nick});
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
    
    res.render('map',{"puntsDelMapa":punts, "nomsEstabliment":nomsEstabliment, "nick":req.cookies.nick});  
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

function eliminarEstabliment(establiment_id){
    var gps = roomingApi.getEstablimentGps(establiment_id);
    if (gps) {
        roomingApi.deleteEstablimentGps(establiment_id, gps.id);     
    }
    
    var rooms = roomingApi.getEstablimentRooms(establiment_id);
    
    if(rooms){
        for (let i = 0; i < rooms.length; i++) {
            const room = rooms[i];
            eliminarRoom(room.id);
        }
    }

    var fotos = roomingApi.getEstablimentFoto(establiment_id);
    if(fotos){
        for (let x = 0; x < fotos.length; x++) {
            const foto = fotos[x];
            roomingApi.deleteFoto(foto.id);            
        }
    } 
    roomingApi.deleteEstabliment(establiment_id);
}

function eliminarRoom(room_id){
    var comentaris = roomingApi.getRoomAllComentari(room_id);
        if (comentaris) {
            for (let z = 0; z < comentaris.length; z++) {
                const comentari = comentaris[z];
                roomingApi.deleteRoomComentari(room_id, comentari.id);
            }   
        }
        var fotos = roomingApi.getRoomAllFoto(room_id);
        if(fotos){
            for (let x = 0; x < fotos.length; x++) {
                const foto = fotos[x];
                roomingApi.deleteFoto(foto.id);            
            }
        }      
        roomingApi.deleteRoom(room_id);
}
