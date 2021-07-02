/***
 * Operador condicional ternario
 */

 const activo = true;

 let mensaje = '';
 
 
 //Forma clásica
 if( activo ){
     mensaje = 'Activo';
 }else{
     mensaje = 'Inactivo';
 }
 
 console.log( mensaje );
 
 //Operador ternario
 
 const mensaje2 = ( activo ) ? 'Activo' : 'Inactivo';
 console.log( mensaje2 );
 
 
 //Ejecutar código sólo cuando esta condicion se cumple - Forma aún más corta de hacer un if, más mantenible
 //Asi manda 'Activo'
 const mensaje3 = activo && 'Activo';
 console.log( mensaje3 );
 //Así manda false por que no se cumple
 const mensaje4 = !activo && 'Activo';
 console.log( mensaje4 );