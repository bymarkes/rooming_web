var URL = "http://localhost/rooming_api/public/api/";

function hola(){
	getCategoriaRoom(1);
}

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

function postEstablimentGps(id, JSON){ // GET GPS from Establiment

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('POST', URL+"establiment/"+id+"/gps", true);

	httpRequest.send(JSON);
}

function putEstablimentGps(idEstabliment, idGPS, JSON){ // PUT GPS from Establiment

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('PUT', URL+"establiment/"+idEstabliment+"/gps/"+idGPS, true);

	httpRequest.send(JSON);
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

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('GET', URL+"foto", true);

	httpRequest.send();
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

	httpRequest.send();
}

/** END FOTO **/


/** GRUP **/
//TODO*/

/** END GRUP **/


/** ROOM **/

function getAllRoom(){ //GET ALL ROOMS

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('GET', URL+"room", true);

	httpRequest.send();
}

function postRoom(JSON){ //POST ROOM

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('POST', URL+"room", true);

	httpRequest.send(JSON);
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

	httpRequest.open('PUT', URL+"room/"+id, true);

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


function postRoomHorari(id, JSON){ //POST HORARI from ROOM

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('POST', URL+"room/"+id+"/horari", true);

	httpRequest.send(JSON);
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

function deleteRoomHorari(idRoom, idHorari){ //DELETE id HORARI from ROOM

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

function postRoomOferta(id ,JSON){ //POST OFERTA from ROOM

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('POST', URL+"room/"+id+"/oferta", true);

	httpRequest.send(JSON);
}

function getRoomAllOferta(id){ //GET ALL OFERTES from ROOM

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('GET', URL+"room/"+id+"/oferta", true);

	httpRequest.send();
}

function putRoomOferta(idRoom, idOferta, JSON){ //PUT OFERTA from ROOM

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('PUT', URL+"room/"+idRoom+"/oferta/"+idOferta, true);

	httpRequest.send(JSON);
}

function getRoomOferta(idRoom, idOferta){ //GET id OFERTA from ROOM

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('GET', URL+"room/"+idRoom+"/oferta/"+idOferta, true);

	httpRequest.send();
}

function deleteRoomOferta(idRoom, idOferta){ //DELETE OFERTA from ROOM

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('DELETE', URL+"room/"+idRoom+"/oferta/"+idOferta, true);

	httpRequest.send();
}

function postRoomReserva(id ,JSON){ //POST RESERVA from ROOM

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('POST', URL+"room/"+id+"/reserva", true);

	httpRequest.send(JSON);
}

function getRoomAllReserva(id){ //GET ALL RESERVA from ROOM

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('GET', URL+"room/"+id+"/reserva", true);

	httpRequest.send();
}

function putRoomReserva(idRoom, idReserva, JSON){ //PUT RESERVA from ROOM

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('PUT', URL+"room/"+idRoom+"/reserva/"+idReserva, true);

	httpRequest.send(JSON);
}

function getRoomReserva(idRoom, idReserva){ //GET id reserva from ROOM

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('GET', URL+"room/"+idRoom+"/reserva/"+idReserva, true);

	httpRequest.send();
}

function deleteRoomReserva(idRoom, idReserva){ //DELETE reserva from ROOM

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('DELETE', URL+"room/"+idRoom+"/reserva/"+idReserva, true);

	httpRequest.send();
}
/** END ROOM **/

/** USUARI **/

function postUsuari(JSON){ // POST usuari

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('POST', URL+"usuari", true);

	httpRequest.send(JSON);
}

function getAllUsuari(){ // GET ALL usuari

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('GET', URL+"usuari", true);

	httpRequest.send();
}

function putusuari(id, JSON){ // PUT usuari

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('PUT', URL+"usuari/"+id, true);

	httpRequest.send(JSON);
}

function getusuari(id){ //GET id Usuari

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('GET', URL+"usuari/"+id, true);

	httpRequest.send();
}

function deleteUsuari(id){ //DELETE Usuari

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			return jsonParsed;
		}

	};

	httpRequest.open('DELETE', URL+"usuari/"+id, true);

	httpRequest.send();
}



/** END USUARI **/
