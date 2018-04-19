var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var URL = "http://localhost/rooming_api/public/api/";


/** CATEGORIA **/
function postCategoria(JSON){ // POST

	var httpRequest = new XMLHttpRequest();

	var result;

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			result = jsonParsed;
		}

	};

	httpRequest.open('POST', URL+"categoria", false);

	httpRequest.send(JSON);

	return result;
}

function getAllCategoria(){ // GET ALL Categoria

	var httpRequest = new XMLHttpRequest();
	var result;

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			result = jsonParsed;
		}

	};

	httpRequest.open('GET', URL+"categoria", false);

	httpRequest.send();
	return result;
}

function putCategoria(id, JSON){ // PUT

	var httpRequest = new XMLHttpRequest();
	var result;

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			result = jsonParsed;
		}

	};

	httpRequest.open('PUT', URL+"categoria/"+id, false);

	httpRequest.send(JSON);
	return result;
}

function getCategoria(id){ //GET SHOW

	var httpRequest = new XMLHttpRequest();
	var result;

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			result = jsonParsed;
		}

	};

	httpRequest.open('GET', URL+"categoria/"+id, false);

	httpRequest.send();
	return result;
}

function deleteCategoria(id){ //DELETE

	var httpRequest = new XMLHttpRequest();
	var result;

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			result = jsonParsed;
		}

	};

	httpRequest.open('DELETE', URL+"categoria/"+id, false);

	httpRequest.send();
	return result;
}

function getCategoriaRoom(id){ //GET Rooms from Categoria

	var httpRequest = new XMLHttpRequest();
	var result;

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			result = jsonParsed;
		}

	};

	httpRequest.open('GET', URL+"categoria/"+id+"/room", false);

	httpRequest.send();
	return result;
}
/** END CATEGORIA **/

/** ESTABLIMENT **/

function getAllEstabliment(){ // GET All Establiment

	var httpRequest = new XMLHttpRequest();
	var result;

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			result = jsonParsed;
		}

	};

	httpRequest.open('GET', URL+"establiment", false);

	httpRequest.send();
	return result;
}

function postEstabliment(JSON){ // POST

	var httpRequest = new XMLHttpRequest();
	var result;

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			result = jsonParsed;
		}

	};

	httpRequest.open('POST', URL+"establiment", false);

	httpRequest.send(JSON);
	return result;
}

function getEstabliment(id){ // GET SHOW

	var httpRequest = new XMLHttpRequest();
	var result;

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			result = jsonParsed;
		}

	};

	httpRequest.open('GET', URL+"establiment/"+id, false);

	httpRequest.send();
	return result;
}

function putEstabliment(JSON){ // PUT

	var httpRequest = new XMLHttpRequest();
	var result;

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			result = jsonParsed;
		}

	};

	httpRequest.open('PUT', URL+"establiment", false);

	httpRequest.send(JSON);
	return result;
}

function deleteEstabliment(id){ // DELETE

	var httpRequest = new XMLHttpRequest();
	var result;

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			result = jsonParsed;
		}

	};

	httpRequest.open('DELETE', URL+"establiment/"+id, false);

	httpRequest.send();
	return result;
}

function getEstablimentFoto(id){ // GET FOTOS from Establiment

	var httpRequest = new XMLHttpRequest();
	var result;

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			result = jsonParsed;
		}

	};

	httpRequest.open('GET', URL+"establiment/"+id+"/foto", false);

	httpRequest.send();
	return result;
}

function getEstablimentGps(id){ // GET GPS from Establiment

	var httpRequest = new XMLHttpRequest();
	var result;

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			result = jsonParsed;
		}

	};

	httpRequest.open('GET', URL+"establiment/"+id+"/gps", false);

	httpRequest.send();
	return result;
}

function postEstablimentGps(id){ // GET GPS from Establiment

	var httpRequest = new XMLHttpRequest();
	var result;

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			result = jsonParsed;
		}

	};

	httpRequest.open('POST', URL+"establiment/"+id+"/gps", false);

	httpRequest.send();
	return result;
}

function putEstablimentGps(idEstabliment, idGPS){ // PUT GPS from Establiment

	var httpRequest = new XMLHttpRequest();
	var result;

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			result = jsonParsed;
		}

	};

	httpRequest.open('PUT', URL+"establiment/"+idEstabliment+"/gps/"+idGPS, false);

	httpRequest.send();
	return result;
}

function deleteEstablimentGps(idEstabliment, idGPS){ // DELETE GPS from Establiment

	var httpRequest = new XMLHttpRequest();
	var result;

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			result = jsonParsed;
		}

	};

	httpRequest.open('DELETE', URL+"establiment/"+idEstabliment+"/gps/"+idGPS, false);

	httpRequest.send();
	return result;
}

function getEstablimentRooms(id){ // GET Rooms from Establiment

	var httpRequest = new XMLHttpRequest();
	var result;

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			result = jsonParsed;
		}

	};

	httpRequest.open('GET', URL+"establiment/"+id+"/room", false);

	httpRequest.send();
	return result;
}
/** END ESTABLIMENT**/


/** FOTO **/

function getAllFoto(){ // GET ALL FOTO 

	var httpRequest = new XMLHttpRequest();
	var result;

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			result = jsonParsed;
		}

	};

	httpRequest.open('GET', URL+"foto", false);

	httpRequest.send();
	return result;
}

function postFoto(JSON){ // POST FOTO 

	var httpRequest = new XMLHttpRequest();
	var result;

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			result = jsonParsed;
		}

	};

	httpRequest.open('POST', URL+"foto", false);

	httpRequest.send(JSON);
	return result;
}

function getFoto(id){ // GET FOTO show

	var httpRequest = new XMLHttpRequest();
	var result;

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			result = jsonParsed;
		}

	};

	httpRequest.open('GET', URL+"foto/"+id, false);

	httpRequest.send(JSON);
	return result;
}

function putFoto(id, JSON){ // PUT FOTO 

	var httpRequest = new XMLHttpRequest();
	var result;

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			result = jsonParsed;
		}

	};

	httpRequest.open('PUT', URL+"foto/"+id, false);

	httpRequest.send(JSON);
	return result;
}

function deleteFoto(id){ // DELETE FOTO show

	var httpRequest = new XMLHttpRequest();
	var result;

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			result = jsonParsed;
		}

	};

	httpRequest.open('DELETE', URL+"foto/"+id, false);

	httpRequest.send(JSON);
	return result;
}

/** END FOTO **/


/** GRUP **/
//TODO*/

/** END GRUP **/


/** ROOM **/

function getAllRoom(){ //GET ALL ROOMS
	var httpRequest = new XMLHttpRequest();
	var result;
	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {
			var jsonParsed = JSON.parse(httpRequest.responseText);	
			result = jsonParsed;
		}	
	};

	httpRequest.open('GET', URL+"room", false);

	httpRequest.send();	
	return result;	
}

function postRoom(){ //POST ROOM

	var httpRequest = new XMLHttpRequest();
	var result;

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			result = jsonParsed;
		}

	};

	httpRequest.open('POST', URL+"room", false);

	httpRequest.send();
	return result;
}

function getRoom(id){ // GET ROOM ID

	var httpRequest = new XMLHttpRequest();
	var result;

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			result = jsonParsed;
		}

	};

	httpRequest.open('GET', URL+"room/"+id, false);

	httpRequest.send();
	return result;
}

function putRoom(id, JSON){

	var httpRequest = new XMLHttpRequest();
	var result;

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			result = jsonParsed;
		}

	};

	httpRequest.open('GET', URL+"room/"+id, false);

	httpRequest.send(JSON);
	return result;
}

function deleteRoom(id){

	var httpRequest = new XMLHttpRequest();
	var result;

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			result = jsonParsed;
		}

	};

	httpRequest.open('DELETE', URL+"room", false);

	httpRequest.send();
	return result;
}

function getRoomAllComentari(id){ //GET ALL COMENTARIS from ROOM

	var httpRequest = new XMLHttpRequest();
	var result;

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			result = jsonParsed;
		}

	};

	httpRequest.open('GET', URL+"room/"+id+"/comentari", false);

	httpRequest.send();
	return result;
}

function postRoomComentari(id, JSON){ //POST COMENTARIS from ROOM

	var httpRequest = new XMLHttpRequest();
	var result;

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			result = jsonParsed;
		}

	};

	httpRequest.open('POST', URL+"room/"+id+"/comentari", false);

	httpRequest.send(JSON);
	return result;
}

function getRoomComentari(idRoom, idComentari){ //GET id COMENTARI from ROOM

	var httpRequest = new XMLHttpRequest();
	var result;

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			result = jsonParsed;
		}

	};

	httpRequest.open('GET', URL+"room/"+idRoom+"/comentari/"+idComentari, false);

	httpRequest.send();
	return result;
}

function putRoomComentari(idRoom, idComentari, JSON){ //PUT id COMENTARI from ROOM

	var httpRequest = new XMLHttpRequest();
	var result;

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			result = jsonParsed;
		}

	};

	httpRequest.open('PUT', URL+"room/"+idRoom+"/comentari/"+idComentari, false);

	httpRequest.send(JSON);
	return result;
}

function deleteRoomComentari(idRoom, idComentari){ //DELETE id COMENTARI from ROOM

	var httpRequest = new XMLHttpRequest();
	var result;

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			result = jsonParsed;
		}

	};

	httpRequest.open('DELETE', URL+"room/"+idRoom+"/comentari/"+idComentari, false);

	httpRequest.send();
	return result;
}

function getRoomAllFoto(id){ //GET ALL FOTOS from ROOM

	var httpRequest = new XMLHttpRequest();
	var result;

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			result = jsonParsed;
		}

	};

	httpRequest.open('GET', URL+"room/"+id+"/foto", false);

	httpRequest.send();
	return result;
}

function getRoomAllHorari(id){ //GET ALL HORARI from ROOM

	var httpRequest = new XMLHttpRequest();
	var result;

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			result = jsonParsed;
		}

	};

	httpRequest.open('GET', URL+"room/"+id+"/horari", false);

	httpRequest.send();
	return result;
}


function postRoomHorari(id){ //POST HORARI from ROOM

	var httpRequest = new XMLHttpRequest();
	var result;

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			result = jsonParsed;
		}

	};

	httpRequest.open('POST', URL+"room/"+id+"/horari", false);

	httpRequest.send();
	return result;
}

function getRoomHorari(idRoom, idHorari){ //GET id HORARI from ROOM

	var httpRequest = new XMLHttpRequest();
	var result;

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			result = jsonParsed;
		}

	};

	httpRequest.open('GET', URL+"room/"+id+"/horari/"+idHorari, false);

	httpRequest.send();
	return result;
}

function putRoomHorari(idRoom, idHorari, JSON){ //PUT id HORARI from ROOM

	var httpRequest = new XMLHttpRequest();
	var result;

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			result = jsonParsed;
		}

	};

	httpRequest.open('PUT', URL+"room/"+id+"/horari/"+idHorari, false);

	httpRequest.send(JSON);
	return result;
}

function deleteRoomHorari(idRoom, idHorari){ //DELETE id HORARI from ROOM

	var httpRequest = new XMLHttpRequest();
	var result;

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 204 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			result = jsonParsed;
		}

	};

	httpRequest.open('DELETE', URL+"room/"+idRoom+"/horari/"+idHorari, false);

	httpRequest.send();
	return result;
}

/** END ROOM **/


/* USUARI*/
function getUsuari(nick){ // GET Usuari 

	var httpRequest = new XMLHttpRequest();
	var result;

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			result = jsonParsed;
		}

	};

	httpRequest.open('GET', URL+"usuari/"+nick, false);

	httpRequest.send();
	return result;
}

function postUsuari(JSON){ // POST Usuari 

	var httpRequest = new XMLHttpRequest();
	var result;

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 201 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			result = jsonParsed;
		}

	};

	httpRequest.open('POST', URL+"usuari", false);

	httpRequest.send(JSON);
	return result;
}

function putUsuari(nick, JSON){ // GET nick Usuari 

	var httpRequest = new XMLHttpRequest();
	var result;

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			result = jsonParsed;
		}

	};

	httpRequest.open('PUT', URL+"usuari/"+nick, false);

	httpRequest.send(JSON);
	return result;
}

function deleteUsuari(nick){ //DELETE Usuari 

	var httpRequest = new XMLHttpRequest();
	var result;

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 204 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			result = jsonParsed;
		}

	};

	httpRequest.open('DELETE', URL+"usuari/"+nick, false);

	httpRequest.send();
	return result;
}
/* */

/* token */

function postToken(JSON){ // POST TOKEN 

	var httpRequest = new XMLHttpRequest();
	var result;

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 201 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			result = jsonParsed;
		}

	};

	httpRequest.open('POST', URL+"token", false);

	httpRequest.send(JSON);
	return result;
}

function getToken(token){ // GET token TOKEN 

	var httpRequest = new XMLHttpRequest();
	var result;

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			result = jsonParsed;
		}

	};

	httpRequest.open('GET', URL+"token/"+token, false);

	httpRequest.send();
	return result;
}

function deleteToken(token){ // DELETE TOKEN 

	var httpRequest = new XMLHttpRequest();
	var result;

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 204 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			result = jsonParsed;
		}

	};

	httpRequest.open('DELETE', URL+"token/"+token, false);

	httpRequest.send();
	return result;
}

/** */

module.exports = {
	postCategoria,
	getAllCategoria,
	putCategoria,
	getCategoria,
	deleteCategoria,
	getCategoriaRoom,
	getAllEstabliment,
	postEstabliment,
	getEstabliment,
	putEstabliment,
	deleteEstabliment,
	getEstablimentFoto,
	getEstablimentGps,
	postEstablimentGps,
	putEstablimentGps,
	deleteEstablimentGps,
	getEstablimentRooms,
	getAllFoto,
	postFoto,
	getFoto,
	putFoto,
	deleteFoto,
	getAllRoom,
	postRoom,
	getRoom,
	putRoom,
	deleteRoom,
	getRoomAllComentari,
	postRoomComentari,
	getRoomComentari,
	putRoomComentari,
	deleteRoomComentari,
	getRoomAllFoto,
	getRoomAllHorari,
	postRoomHorari,
	getRoomHorari,
	putRoomHorari,
	deleteRoomHorari,
	getUsuari,
	postUsuari,
	putUsuari,
	deleteUsuari,
	postToken,
	getToken,
	deleteToken
};


