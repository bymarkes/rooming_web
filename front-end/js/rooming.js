function hola(){
getCategoriaRoom(1);
}

/** CATEGORIA **/
function postCategorias(JSON){ // POST

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			console.log(jsonParsed);
		}

	};

	httpRequest.open('POST', "http://localhost/rooming_api/public/api/categoria", true);

	httpRequest.send(JSON);
}

function getCategorias(){ // GET

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			console.log(jsonParsed);
		}

	};

	httpRequest.open('GET', "http://localhost/rooming_api/public/api/categoria", true);

	httpRequest.send();
}

function putCategorias(id, JSON){ // PUT

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			console.log(jsonParsed);
		}

	};

	httpRequest.open('PUT', "http://localhost/rooming_api/public/api/categoria/"+id, true);

	httpRequest.send(JSON);
}

function getCategoria(id){ //GET SHOW

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			console.log(jsonParsed);
		}

	};

	httpRequest.open('GET', "http://localhost/rooming_api/public/api/categoria/"+id, true);

	httpRequest.send();
}

function deleteCategoria(id){ //DELETE

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			console.log(jsonParsed);
		}

	};

	httpRequest.open('DELETE', "http://localhost/rooming_api/public/api/categoria/"+id, true);

	httpRequest.send();
}

function getCategoriaRoom(id){ //GET Rooms from Categoria

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			console.log(jsonParsed);
		}

	};

	httpRequest.open('GET', "http://localhost/rooming_api/public/api/categoria/"+id+"/room", true);

	httpRequest.send();
}
/**END CATEGORIA**/

function getRooms(){

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			console.log(jsonParsed);
		}

	};

	httpRequest.open('GET', "http://localhost/rooming_api/public/api/room", true);

	httpRequest.send();
}

function getRoom(id){

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			console.log(jsonParsed);
		}

	};

	httpRequest.open('GET', "http://localhost/rooming_api/public/api/room/"+id, true);

	httpRequest.send();
}



function getEstabliments(){

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			console.log(jsonParsed);
		}

	};

	httpRequest.open('GET', "http://localhost/rooming_api/public/api/establiment", true);

	httpRequest.send();
}

function getEstabliment(id){

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function (){

		if (httpRequest.readyState == 4 && httpRequest.status == 200 ) {

			var jsonParsed = JSON.parse(httpRequest.responseText);
			console.log(jsonParsed);
		}

	};

	httpRequest.open('GET', "http://localhost/rooming_api/public/api/establiment/"+id, true);

	httpRequest.send();
}