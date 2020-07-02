const jokeUrl     = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios =  'https://reqres.in/api/users?page=2';

//CloudDinary
const cloudPreset = 'pl08tqzc';
const cloudUrl    = 'https://api.cloudinary.com/v1_1/dxycp1ofq/upload';

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


};

const obtenerUsuarios = async() => {

    const resp = await fetch(urlUsuarios);
    const {data: usuarios} = await resp.json();
    return usuarios;
};


const subirImage =async(archivoSubir) => {

    const formData = new FormData();
    formData.append('upload_preset', cloudPreset);
    formData.append('file', archivoSubir);

    try {

        const response = await fetch(cloudUrl, {
            method: 'POST',
            body: formData 
        });

        if(response.ok){
            const cloudResponse = await response.json();
            return await cloudResponse.secure_url;
        } else {
            throw await response.json();
        }
        
    } catch (error) {
        throw error;
    }

};

export {
    obtenerChiste,
    obtenerUsuarios,
    subirImage,
}