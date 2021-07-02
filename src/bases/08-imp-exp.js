//Importar y exportar
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find


/**
 * El beneficio principal de la exportación e importación por defecto es indicar que esa exportación (función, una clase, un objeto o cualquier otra cosa) 
 * es de mayor relevancia o es la única del archivo. Adicionalmente puedes usar cualquier nombre para su importación, al contrario de las exportaciones por nombre.
 * 
 * En este caso, se exporta por defecto "heroes" porque es el arreglo que se va a utilizar, mientras que owner solo es para un ejemplo.
 */

// import { heroes } from './harcoded/heroes';
//Si se hace una exportacion por defecto no se colocan llaves:
// import heroes from "./harcoded/heroes";
//Si en el mismo archivo de exportacion tenemos una por defecto y otra normal, habrá que destructurar la normal:
import heroes, { owners } from '../harcoded/heroes';

// console.log(owners);

//Esto es innecesariamente largo
const getHeroById = ( id ) => {
    return heroes.find( ( heroe ) =>{
        if(heroe.id === id){
            return true;
        }else{
            return false;
        }
    } );
}

// console.log( getHeroById(2) );

//Asi si

const getHeroById1 = ( id ) => {
    return heroes.find( ( heroe ) => heroe.id === id )
};

// console.log( getHeroById1(2) );

//Mas corto
export const getHeroById2 = ( id ) => heroes.find( ( heroe ) => heroe.id === id );
// console.log( getHeroById2(2) );

//Aun más corto
const getHeroById3 = ( id ) => heroes.find( heroe => heroe.id === id );
// console.log( getHeroById3(2) );


//Para recibir varios iguales:

export const getHeroByOwner = ( owner ) => heroes.filter( ( heroe ) => heroe.owner === owner );
// console.log( getHeroByOwner('DC') );