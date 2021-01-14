function obtenerDatos(){

var pregunta = document.getElementById("pregunta").value;
var t1 = document.getElementById("t1");
t1.innerHTML = pregunta;

var pregunta = document.getElementById("pregunta").value;
var t1 = document.getElementById("t1");
t1.innerHTML = pregunta;

var radio = document.getElementsByName('radio');
    for(i=0; i<radio.length; i++){
        if(radio[i].checked){
            var respuesta=radio[i].value;
            var t2 = document.getElementById("t2");
            t2.innerHTML = respuesta;
        }
    }

var puntuacion = document.getElementById("puntuacion").value;
var t3 = document.getElementById("t3");
t3.innerHTML = puntuacion;

var t4 = document.getElementById("t4");
t4.innerHTML = "Guardado";

}

