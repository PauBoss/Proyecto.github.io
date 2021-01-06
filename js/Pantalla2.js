var valorUsuario = document.cookie.replace( /(?:(?:^|.*;\s*)usuario\s*\=\s*([^;]*).*$)|^.*$/, "$1" );

document.getElementById( "saludo" )
.innerHTML = "Hola " + valorUsuario;

document.getElementById( "fecha" )
.innerHTML = "La última vez que entraste fue <br> con el " + document.cookie;

//Aquí vuelvo a definir los formatos para la fecha y la hora para mostrarlos sin tener que actualizar la página.
let fecha = new Date( );
let formatoFecha = fecha.getDate( ) + "-" + ( fecha.getMonth( ) + 1 ) + "-" + fecha.getFullYear( );
let formatoHora = fecha.getHours( ) + ":" + fecha.getMinutes( ) + ":" + fecha.getSeconds( );

/**
 * Y ahora defino la función establecerCookie otra vez, que define la fecha de expiración y muestra los elementos cómo el usuario, la fecha y la hora
 * a la misma vez.
 **/
function establecerCookie( cnombre, cvalor, diasExp ) {
	var tiempo = new Date( );
	tiempo.setTime( tiempo.getTime( ) + ( diasExp * 24 * 60 * 60 * 1000 ) );
	var expira = "expires=" + tiempo.toUTCString( );
	document.cookie = cnombre + "=" + cvalor + ";" + expira + ";path=/";
}

establecerCookie( "<br> el ", formatoFecha );
establecerCookie( "<br> a las ", formatoHora );
