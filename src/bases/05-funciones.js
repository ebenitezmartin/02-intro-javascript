
// Esto no, porque se puede equivocar uno y editar/renombrar el nombre de funcion en algún momento.
function saludar( nombre ){
    return `Hola ${ nombre }`;
}
//Asi:

saludar = 20;

console.log( saludar );


//Asi si:
const saludar2 = function( nombre ){
    return `Hola ${ nombre }`;
}

console.log( saludar2('Eli') );

//Funcion de flecha

const saludar3 = ( nombre ) => {
    return `Hola ${ nombre }`;
}

console.log( saludar3('Fran') );

//Si todo lo que tiene la funcion es un return se puede simplificar

const saludar4 = ( nombre ) => `Hola ${ nombre }`;

console.log( saludar4('Carlos') );

//En el caso de regresar un objeto habria que meterlo dentro de un () para poder diferenciar los {} propios de la funcion de los del objeto en si
//Esto esta mal:
// const getUser = ( ) => {
//     uid: '23342',
//     user: 'ebema19891'
// };

// console.log( getUser() );


//Esto esta bien:
const getUser2 = ( ) => ({
    uid: '23342',
    user: 'ebema19891'
});

console.log( getUser2() );

//TAREA:
// 1. Transformar a funcion flecha
// 2. Devolver un objeto implicito
// 3. Pruebas

function getUsuarioActivo( nombre ){
    return {
        uid: '23342',
        user: nombre
    };
}

const usuarioActivo = getUsuarioActivo('Fernando');
console.log( usuarioActivo );

//Resultado

const getUsuarioActivo2 =( nombre ) => ({
        uid: '23342',
        user: nombre
    });

const usuarioActivo2 = getUsuarioActivo2('Pedro');
console.log( usuarioActivo2 );
