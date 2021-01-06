document.getElementById( "email" )
.hidden = true;
document.getElementById( "email" )
.value = "";

/**
 * Defino la función temporizador que se encargará de definir una espera de 5 segundos.
 **/
function temporizador( ) {
	return new Promise( ( resolver, devolver ) => {
		setTimeout( ( ) => {
			resolver( );
		}, 5000 );
	} );
}

/**
 * Y con la función mostrarPromesa se encargará de esperar los 5 segundos para a continuación ejecutar la
 * la función mostrarLogin.
 **/
async function mostrarPromesa( ) {
	await temporizador( );
	mostrarLogin( );
}

mostrarPromesa( );

/**
 * Defino la función mostrarLogin la cual mostrará en vez de una imagen con un texto,
 * un input de usuario para poder introducir el correo.
 **/

function mostrarLogin( ) {
	document.getElementById( "bienvenida" )
	.innerHTML = "";
	document.getElementById( "fondo" )
	.src = "";
	document.getElementById( "texto" )
	.textContent = "";

	document.getElementById( "text" )
	.textContent = "Usuario: ";
	document.getElementById( "email" )
	.hidden = false;
}

/**
 * Defino la función teclaPulsada la cual tras pulsar la combinación 
 * correcta, llamará a la función mostrarLogin.
 **/
function teclaPulsada( evento ) {

	tecla = evento.keyCode;

	if ( evento.ctrlKey && tecla == 121 ) {

		console.log( "Has presionado el ctrl + F10" );
		mostrarLogin( );
	}
}

document.addEventListener( "keyup", teclaPulsada );

/**
 * Defino el evento, que contiene la función verificarEmail, encargada de verificar el correo introducido,
 * mostrando un mensaje de si el correo es correcto o no. En caso de ser correcto, tras perder el foco 
 * redirigirá a otra pagina.
 **/
document.getElementById( "email" )
.addEventListener( "blur", function verificarEmail( ) {

		input = event.target;
		verifico = document.getElementById( "verificar" );
		emailCaracteres = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{1,})$/i;

		if ( emailCaracteres.test( input.value ) ) {
			verifico.innerText = "El correo introducido es válido. Estas siendo redirigido...";
			verifico.style.color = "green";
			var valor = document.getElementById( "email" )
			.value;
			console.log( valor );
			document.cookie = "usuario=" + valor;
			setTimeout( function ( ) {
				window.location.href = "Pantalla2.html";
			}, 2000 );
		} else {
			verifico.innerText = "El correo introducido es inválido";
			verifico.style.color = "red";
			input.select( );
		}

	}

);

//Aquí defino los formatos para la fecha y la hora.
let fecha = new Date( );
let formatoFecha = fecha.getDate( ) + "-" + ( fecha.getMonth( ) + 1 ) + "-" + fecha.getFullYear( );
let formatoHora = fecha.getHours( ) + ":" + fecha.getMinutes( ) + ":" + fecha.getSeconds( );

function obtenerCookie( cnombre ) {
	var nombre = cnombre + "=";
	var decodificador = decodeURIComponent( document.cookie );
	var ca = decodificador.split( ';' );
	for ( var i = 0; i < ca.length; i++ ) {
		var c = ca[ i ];
		while ( c.charAt( 0 ) == ' ' ) {
			c = c.substring( 1 );
		}
		if ( c.indexOf( nombre ) == 0 ) {
			return c.substring( nombre.length, c.length );
		}
	}
	return "";
}

/**
 * Y ahora defino la función establecerCookie, que define la fecha de expiración y muestra los elementos cómo el usuario, la fecha y la hora
 * a la misma vez.
 **/
function establecerCookie( cnombre, cvalor, diasExp ) {
	var tiempo = new Date( );
	tiempo.setTime( tiempo.getTime( ) + ( diasExp * 24 * 60 * 60 * 1000 ) );
	var expira = "expires=" + tiempo.toUTCString( );
	document.cookie = cnombre + "=" + cvalor + ";" + expira + ";path=/";
}

establecerCookie( "<br> el ", formatoFecha, 2 );
establecerCookie( "<br> a las ", formatoHora, 2 );
