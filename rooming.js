var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var URL = "http://localhost/rooming_api/public/api/";


/** CATEGORIA **/
function postCategoria(JSON){ // POST

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('POST', URL+"categoria", true);

	httpRequest.send(JSON);
}

function getAllCategoria(){ // GET ALL Categoria

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('GET', URL+"categoria", true);

	httpRequest.send();
}

function putCategoria(id, JSON){ // PUT

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('PUT', URL+"categoria/"+id, true);

	httpRequest.send(JSON);
}

function getCategoria(id){ //GET SHOW

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('GET', URL+"categoria/"+id, true);

	httpRequest.send();
}

function deleteCategoria(id){ //DELETE

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('DELETE', URL+"categoria/"+id, true);

	httpRequest.send();
}

function getCategoriaRoom(id){ //GET Rooms from Categoria

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('GET', URL+"categoria/"+id+"/room", true);

	httpRequest.send();
}
/** END CATEGORIA **/

/** ESTABLIMENT **/

function getAllEstabliment(){ // GET All Establiment

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('GET', URL+"establiment", true);

	httpRequest.send();
}

function postEstabliment(JSON){ // POST

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('POST', URL+"establiment", true);

	httpRequest.send(JSON);
}

function getEstabliment(id){ // GET SHOW

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('GET', URL+"establiment/"+id, true);

	httpRequest.send();
}

function putEstabliment(JSON){ // PUT

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('PUT', URL+"establiment", true);

	httpRequest.send(JSON);
}

function deleteEstabliment(id){ // DELETE

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('DELETE', URL+"establiment/"+id, true);

	httpRequest.send();
}

function getEstablimentFoto(id){ // GET FOTOS from Establiment

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('GET', URL+"establiment/"+id+"/foto", true);

	httpRequest.send();
}

function getEstablimentGps(id){ // GET GPS from Establiment

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('GET', URL+"establiment/"+id+"/gps", true);

	httpRequest.send();
}

function postEstablimentGps(id){ // GET GPS from Establiment

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('POST', URL+"establiment/"+id+"/gps", true);

	httpRequest.send();
}

function putEstablimentGps(idEstabliment, idGPS){ // PUT GPS from Establiment

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('PUT', URL+"establiment/"+idEstabliment+"/gps/"+idGPS, true);

	httpRequest.send();
}

function deleteEstablimentGps(idEstabliment, idGPS){ // DELETE GPS from Establiment

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('DELETE', URL+"establiment/"+idEstabliment+"/gps/"+idGPS, true);

	httpRequest.send();
}

function getEstablimentRooms(id){ // GET Rooms from Establiment

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('GET', URL+"establiment/"+id+"/room", true);

	httpRequest.send();
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

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('POST', URL+"foto", true);

	httpRequest.send(JSON);
}

function getFoto(id){ // GET FOTO show

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('GET', URL+"foto/"+id, true);

	httpRequest.send(JSON);
}

function putFoto(id, JSON){ // PUT FOTO 

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('PUT', URL+"foto/"+id, true);

	httpRequest.send(JSON);
}

function deleteFoto(id){ // DELETE FOTO show

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('DELETE', URL+"foto/"+id, true);

	httpRequest.send(JSON);
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

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('POST', URL+"room", true);

	httpRequest.send();
}

function getRoom(id){ // GET ROOM ID

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('GET', URL+"room/"+id, true);

	httpRequest.send();
}

function putRoom(id, JSON){

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('GET', URL+"room/"+id, true);

	httpRequest.send(JSON);
}

function deleteRoom(id){

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('DELETE', URL+"room", true);

	httpRequest.send();
}

function getRoomAllComentari(id){ //GET ALL COMENTARIS from ROOM

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('GET', URL+"room/"+id+"/comentari", true);

	httpRequest.send();
}

function postRoomComentari(id, JSON){ //POST COMENTARIS from ROOM

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('POST', URL+"room/"+id+"/comentari", true);

	httpRequest.send(JSON);
}

function getRoomComentari(idRoom, idComentari){ //GET id COMENTARI from ROOM

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('GET', URL+"room/"+idRoom+"/comentari/"+idComentari, true);

	httpRequest.send();
}

function putRoomComentari(idRoom, idComentari, JSON){ //PUT id COMENTARI from ROOM

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('PUT', URL+"room/"+idRoom+"/comentari/"+idComentari, true);

	httpRequest.send(JSON);
}

function deleteRoomComentari(idRoom, idComentari){ //DELETE id COMENTARI from ROOM

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('DELETE', URL+"room/"+idRoom+"/comentari/"+idComentari, true);

	httpRequest.send();
}

function getRoomAllFoto(id){ //GET ALL FOTOS from ROOM

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('GET', URL+"room/"+id+"/foto", true);

	httpRequest.send();
}

function getRoomAllHorari(id){ //GET ALL HORARI from ROOM

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('GET', URL+"room/"+id+"/horari", true);

	httpRequest.send();
}


function postRoomHorari(id){ //POST HORARI from ROOM

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('POST', URL+"room/"+id+"/horari", true);

	httpRequest.send();
}

function getRoomHorari(idRoom, idHorari){ //GET id HORARI from ROOM

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('GET', URL+"room/"+id+"/horari/"+idHorari, true);

	httpRequest.send();
}

function putRoomHorari(idRoom, idHorari, JSON){ //PUT id HORARI from ROOM

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('PUT', URL+"room/"+id+"/horari/"+idHorari, true);

	httpRequest.send(JSON);
}

function getRoomHorari(idRoom, idHorari){ //DELETE id HORARI from ROOM

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('DELETE', URL+"room/"+id+"/horari/"+idHorari, true);

	httpRequest.send();
}

/** END ROOM **/

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
	getRoomHorari
};


