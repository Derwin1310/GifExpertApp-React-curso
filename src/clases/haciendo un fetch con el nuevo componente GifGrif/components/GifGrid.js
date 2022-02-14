import React from 'react'

//Aqui estamos creando el componente funcional y exportandolo para usarlo en el GEA
export const GifGrid = ({ category }) => {

    //Como estamos haciendo una peticion recordamos que tenemos que hacerla asincrona.
    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick and Morty&limit=10&api_key=46Sat15Rc1PEzzKY0bFdQs2ly07cuhtk';
        const res = await fetch(url);
        const {data} = await res.json();

        //aqui creamos esta constante  llamada gif para que muestra la data desestructurada de la respuesta del formato json que nos llega de la peticion fetch
        //Usamos el .map para que recorra toda la data y nos devuelva un array nuevo con los elementos que le estamos pidiendo
        const gif = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url,
            };
        });
        console.log(gif)
    };

    getGifs();

    return (
        <div>
            {/* Este category es el que estamos mostrando en pantalla del input de AddCategory */}
            <h3>{category}</h3>
        </div>
    )
}
