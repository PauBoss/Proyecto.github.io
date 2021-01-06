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
