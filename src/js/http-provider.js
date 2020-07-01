const jokeUrl = 'https://api.chucknorris.io/jokes/random';

// fetch(jokeUrl).then((response) => {

//     response.json().then( (data) => {
//         console.log(data.id, data.value);
//     });

// });

//Errores con las peticiones HTTP
//200 lo hizo bien
//201 registro se creó y lo hizo correctamente
//404 no encontró el recurso
//500 problemas propios del lado del servidor


// fetch( jokeUrl ).then(resp => resp.json())
//                 .then(console.log);

const obtenerChiste = async() => {

    try {

        const resp = await fetch(jokeUrl);

        if( !resp.ok ) throw ('No se pudo realizar la petición');
        
        const {icon_url, id, value} = await resp.json();
        return {icon_url, id, value};
        
    } catch (error) {
        
        throw error;

    }


}

export {
    obtenerChiste,
}