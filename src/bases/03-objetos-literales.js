const persona = {
    nombre : 'Eli',
    apellido : 'Benitez',
    edad : 31,
    direccion : {
        calle : 'La Noria',
        cp : 41500
    }
}

// El .table muestra los datos del objeto en formato tabla.
// El meter el objeto entre dos {} hace que en la consola nos aparezca el tipo de objeto concreto que es en lugar de el Object
console.table( { persona } );
console.log( { persona } );


//Javascript trabaja por asignacion de referencia, aqui no estamos creando un nuevo objeto a partir de otro 
//y asignando un valor distinto al nuevo objeto, estamos modificando ambos (ESTO NO SE DEBE HACER)
const persona2 = persona;

persona2.nombre = 'Pedro';

console.log( persona );
console.log( persona2 );

// Se debe hacer asi:

const persona3 = { ...persona };

persona3.nombre = 'Juan';

console.log( persona );
console.log( persona3 );