

const nombre = 'Elisabet';
const apellido = 'Benitez';

// const nombreCompleto = nombre + ' ' + apellido;
// Template strings - Codigo de javascript - Se tienen en cuenta los saltos de linea, espacios, resultados de operaciones y funciones...
const nombreCompleto = `
${ nombre }
${ apellido }
 ${ 1 + 1 }
 `;

console.log( nombreCompleto );

/************************ */

function getSaludo(){
    return 'Hola Mundo!';
}

console.log( `Este es un texto: ${ getSaludo() } ` );

/************************ */

const nombreCompleto2 = `${ nombre } ${ apellido }`;

console.log( nombreCompleto2 );

function getSaludo2( nombre ){
    return 'Hola ' + nombre;
}

console.log( `Este es un texto: ${ getSaludo2( nombreCompleto2 ) } ` );

/************************ */
