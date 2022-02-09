import React, { useState } from 'react'

export const AddCategory = () => {

    const [inputValue, setinputValue] = useState('Hola mundo');

    //Esta es la funcion que nos permite saber que tecla estamos escribiendo para poder modificar el value del input con el onChange que contiene
    const handleInputValue = (e) => {
        setinputValue(e.target.value);
    };

    //Esta otra funcion nos permite mostrar un mensaje luego de que le damos el submit al formulario y evitar que se refresque colocando el preventDefault().
    const handleSubmit =(e) => {
        e.preventDefault();
        console.log('Submit realizado');
        console.log(inputValue);
    };

    return (
        //Aqui estamos quitando el <> fragment y agregando el form ya que al final hace la misma funcion de mostrar una parte de codigo html en un contenedor, en este caso un formulario
        //El onSubmit nos permite hacer que cuando escribamos algo en el form y le demos a enter la pagina funcione como un boton de submit, aqui le agregamos la funcion de handleSubmit para que no se pueda refrescar y nos muestre un mensaje por la consola.
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                //El onChange lo tenemos que utilizar en los input cuando le colocamos un value por defecto para luego poder escribir en el o modificar el input que contiene por defecto.
                //Le estamos agregando el handleInputValue que lo que hace es leer el valor de la tecla que estamos escribiendo y nos permite modificarlo 
                onChange={handleInputValue}
            />
        </form>
    )
}

