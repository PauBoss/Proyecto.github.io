/**
 * Defino la función obtenerDatos la cual se encargará de recoger la información del formulario y engancharla a la tabla.
 **/
function obtenerDatos(){

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

let cuestionario = [
    {
      correo: 'hola@gmail.com'
      , fecha: '2021-01-01'
      , preguntas: [
        {
          titulo: 'Pregunta 1'
          , respuesta: true
          , puntuacion: 2
          , estado: 'OK'
        , }
  
        
        , ]
    , }
  
    
    , ];
  
  console.log( cuestionario[ 0 ].correo );
  console.log( cuestionario[ 0 ].preguntas[ 0 ].titulo );
  
  let strCuestionario = JSON.stringify( cuestionario );
  let objCuerstionario = JSON.parse( strCuestionario );
  
  let persona = {
    correo: 'hola2@gmail.com'
    , fecha: '2021-01-02'
    , preguntas: [
      {
        titulo: 'Pregunta 2'
        , respuesta: true
        , puntuacion: 2
        , estado: 'OK'
      , }
  
      
      , ]
  , };
  
  objCuerstionario.push( persona );
  let str2Cuestionario = JSON.stringify( objCuerstionario );
  let obj2Cuerstionario = JSON.parse( str2Cuestionario );
  
  console.log( obj2Cuerstionario[ 1 ].correo );

}

