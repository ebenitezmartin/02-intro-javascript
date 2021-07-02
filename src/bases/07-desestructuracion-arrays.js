//Desestructuracion de Arrays

//Ante esta situacion:
const personajes = ['Ironman', 'Capitán America', 'Hulk'];

console.log( personajes[0] );
console.log( personajes[1] );
console.log( personajes[2] );

//Lo solucionamos asi:

const [ ironman ] = personajes;
const [ , capi ] = personajes;
const [ , , hulk] = personajes;

console.log( ironman );
console.log( capi );
console.log( hulk );

//Para usarlo en una funcion flecha

const array = () => (['ABC', 123]);
const [ , numeros ] = array();

console.log( numeros );

//Tarea
// 1. Traer el primer valor del array como nombre
// 2. Traer la funcion como setNombre()
const useState = ( valor ) => ([ valor, () => {
    console.log( 'Hola Mundo' );
}]);

//Asi no

const array2 = useState( 'Ironman' );
console.log( array2[0] );
array2[1]();

//Asi si

const [ nombre, setNombre ] = useState('Ironman');

console.log( nombre );
setNombre();