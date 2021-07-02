
/***
 * ASYNC
 * Hay dos maneras de construir una promesa:
 */

//Forma larga
const getImagenPromesa = () => new Promise( resolve => resolve('http://asdasasadc.com'));
getImagenPromesa().then( console.log );


//Forma corta - async - Convierte en asincrona una función

const getImage = async() => {
    return 'http://asdasasadc.com';
}

getImage().then( console.log );

//Podemos tratarla como síncrona usando el await (no se puede usar sin el async)
//Para manejar aquí los errores seerá necesario usar try-catch

const getImage2 = async() => {

    try{

        const apiKey = '9TlMeEkThC5hVwjtYWom7DMBj4nf5rjx';
        
        //await - Espera a que esta instrucción termine antes de ejecutar la siguiente linea de código
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data : { images : { original : { url } } }  } = await response.json();
        const imageUrl = url; 
        const img = document.createElement('img');
        img.src = imageUrl;
    
        document.body.append( img );
    } catch(err){
        //manejo del error
        console.error(err);
    };
}

getImage2();