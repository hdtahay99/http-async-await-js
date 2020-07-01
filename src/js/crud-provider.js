

const urlCRUD = 'https://reqres.in/api/users';


const getUsuario = async(id) => {

    const response = await fetch(`${urlCRUD}/${id}`);
    const {data: usuario} = await response.json();
    return usuario;
}

const postUsuario = async(usuario) => {

    const response = await fetch(urlCRUD, {
       method: 'POST',
       body: JSON.stringify(usuario),
       headers: {
        'Content-Type': 'applicatio/json'           
       }
    });

    return await response.json();

}

const putUsuario = async(usuario) =>{
    const response = await fetch(`${urlCRUD}/${usuario.id}`, {
        method: 'PUT',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'applicatio/json'           
        }
    })

    return await response.json();
}

const deleteUsuario = async(id) =>{
    const response = await fetch(`${urlCRUD}/${id}`, {
        method: 'DELETE'
    });

    return (response.ok) ? 'Borrado' : 'No se pudo eliminar';
}


export {
    getUsuario,
    postUsuario,
    putUsuario,
    deleteUsuario,
}