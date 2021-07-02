
// var no se debe usar

const nombre = 'Elisabet';
// Solo usar  let si estamos seguros de que vamos a cambiar el valor
//let apellido = 'Benitez';


//No hace falta volver a declarar el let si vamos a cambiar su valor (mientras este dentro del mismo scope)
let valorDado = 5;
valorDado = 4;

console.log( nombre, valorDado );

if ( true ) {
    //Aquí si porque ya no estamos en el mismo scope, si no usamos el let estariamos usando el valorDado del window (scope general)

    let valorDado = 6;

    console.log( valorDado );
}

console.log( valorDado );