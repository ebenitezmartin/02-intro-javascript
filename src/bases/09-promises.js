//Promesas
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise

import { getHeroById2 } from './08-imp-exp';

/**
 * Las promesas son asíncronas, por lo que primero se van a ejecutar todo el código síncrono y las promesas van 
 * a caer a una pila de tareas que no se ejecutará hasta que no se ejecute lo demás
 */

// const promesa = new Promise( ( resolve, reject ) => {

//     //Permite ejecutar una tarea en cierto tiempo, recibiendo un callback
//     setTimeout(() => {
//         const heroe = getHeroById2(2);
//         console.log( heroe );
//         resolve( heroe );
//         // reject( 'No se pudo encontrar el héroe' );
//     }, 2000);
// });

// promesa.then( ( heroe ) => {
//     console.log('Then de la promesa', heroe);
// })
// .catch( err => console.warn(err) );

const getHeroByIdAsync = ( id ) => {

    //Si no ponemos return no encontraremos el then, finally o catch fuera.

    return new Promise( ( resolve, reject ) => {

        //Permite ejecutar una tarea en cierto tiempo, recibiendo un callback
        setTimeout(() => {
            const heroe = getHeroById2(id);
            if(heroe){
                resolve( heroe );
            }else{
                reject( 'No se pudo encontrar el héroe' );
            }
        }, 2000);
    });
    
}

getHeroByIdAsync(1)
//Ambas son lo mismo:
// .then( ( heroe ) => {
//     console.log('Then de la promesa', heroe);
// })
.then( console.log )
//Ambas son lo mismo:
// .catch( err => console.warn(err) );
.catch( console.warn );