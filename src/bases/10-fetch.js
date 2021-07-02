/**
 * Fetch API - Libreria para hacer peticiones HTTP
 * https://developer.mozilla.org/es/docs/Web/API/Fetch_API
 * 
 */

/**
 * En la web de 
 * https://developers.giphy.com/dashboard/?create=true
 * Nos creamos una nueva APP API
 * Vamos a Docs -> API Endpoints -> Random ID Endpoint y copiamos la url
 * En una nueva pestaña del navegador pegamos la url:
 * api.giphy.com/v1/randomid
 * Seguido de:
 * ?api_key=9TlMeEkThC5hVwjtYWom7DMBj4nf5rjx
 * Los datos que necesitaremos seran data->images->elegimos uno->url
 * 
 * */

 const apiKey = '9TlMeEkThC5hVwjtYWom7DMBj4nf5rjx';

 //Devuelve una promesa y devuelve un response
 const httpCall = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
 
 
 //Esto está bien, pero es muy feo, mucha info, el .json también devuelve una promesa:
 
 // httpCall
 // .then( response => {
     // response.json().then( data => {
         // console.log( data );
     // } );
 // })
 // .catch( console.warn );
 
 //Por lo que la solución es que las promesas pueden encadenarse asi(2):
 
 // httpCall
 // .then( response => response.json() )
 // .then( data => console.log( data ) )
 // .catch( console.warn );
 
 //Para extraer algo concreto (desestructuracion)
 
 httpCall
 .then( response => response.json() )
 .then( ({ data : { images : { original : { url } } } }) => {
     const imageUrl = url; 
     const img = document.createElement('img');
     img.src = imageUrl;
 
     document.body.append( img );
 })
 .catch( console.warn );
 