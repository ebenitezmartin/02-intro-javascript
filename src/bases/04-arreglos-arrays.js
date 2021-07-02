
//Esta forma de crear un array casca un Warning en la consola:
//The array literal notation [] is preferable  no-array-constructor
const array = new Array();
console.log( array );


//Hay que hacerlo asi:
const array2 = [];
console.log( array2 );


//Si se puede hacer cuando creamos un array con tamaño predefinido, es raro de utilizar
const array3 = new Array( 100 );
console.log( array3 );

//Para annadir al Array, aunque no es recomendable ya que modifica el objeto principal, Ver siguiente...
const array4 = [];
array4.push(1);
array4.push(2);
array4.push(3);
array4.push(4);

console.log( 'Array4: ', array4 );

let array5 = array4;
array5.push(5);

//Ahora ambos contienen lo mismo(referencia). Solucion en la siguiente:
console.log( 'Array4: ', array4 );
console.log( array5 );

//Asi se soluciona el problema de referencia al modificar el array
let array6 = [ ...array4, 6 ];

console.log( 'Array4: ', array4 );
console.log( array6 );

//Asi se soluciona el problema de referencia al modificar el array. Map devuelve un nuevo array7, por lo que no se modificara el mismo

const array7 = array4.map( function(numero){
    return numero * 2;
});

console.log( 'Array4: ', array4 );
console.log( array7 );
