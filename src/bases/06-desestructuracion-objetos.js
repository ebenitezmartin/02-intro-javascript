//Desestructuracion -- Asignacion Desestructurante
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
//Si tenemos que usar esos elementos muchas veces sería tedioso estar constantemente escribiendo persona.

const persona = {
    nombre : 'Tony',
    edad : 45,
    clave : 'Ironman'
};

console.log( persona.nombre );
console.log( persona.edad );
console.log( persona.clave );

//Solución:

const { nombre } = persona;

console.log( nombre );

//Si la variable nombre ya existiese, se renombraria:

const { nombre:nombre2 } = persona;

console.log( nombre2 );

//Si queremos todo:
const { nombre:nombre3, edad, clave } = persona;

console.log( nombre3 );
console.log( edad );
console.log( clave );

//Podemos incluir datos en el objeto que no existen
const usuario = {
    nombre : 'James',
    edad : 45,
    clave : 'Capitán América',
    // rango : 'Capitán'
};
//Si el rango no existe en el objeto lo ponemos por defecto
const getUsuario = ( { nombre, edad, rango = 'Soldado'} ) => {

    console.log( nombre, edad, rango );

};

getUsuario( usuario );

//Dada esta funcion, sacar los valores retornados
const useContext = ( { clave, nombre, edad, rango = 'Soldado'} ) => {

    return {
        nombreClave : clave,
        anios : edad,
        latlong : {
            lat : 14.1568,
            long : -15.2544
        }
    }

};

//Asi no
const avenger = useContext( persona );

console.log( avenger.nombreClave, avenger.anios, avenger.latlong );

//Asi si (Desestructuracion anidada)

const { nombreClave, anios, latlong: { lat, long } } = useContext( persona );

console.log( nombreClave, anios );
//Esto no funcionará ya que ese objeto ya no existe
// console.log( latlong );
//Funcionara asi
console.log( lat, long );