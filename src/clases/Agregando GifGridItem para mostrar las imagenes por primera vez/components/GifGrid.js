import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    //Aqui usamos el useState de esta funcion para poder imprimirla mas abajo con los gif en el li, y lo hacemos un array vacio para que tenga donde almacenar las imagenes
    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs();
    }, [])

    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick and Morty&limit=12&api_key=46Sat15Rc1PEzzKY0bFdQs2ly07cuhtk';
        const res = await fetch(url);
        const { data } = await res.json();

        const gif = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url,
            };
        });
        console.log(gif)
        //Aqui es donde le colocamos los gif al setImages para que al momento de ejecutar la funcion se muestren las imagenes
        setImages(gif)
    };


    return (
        <div>
            <h3>{category}</h3>
            <ol>
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            //Aqui le asignamos el operador spread a img para que se traiga todo lo que recorre el images.map que son basicamente las imagenes de getGifs y no tener que colocar el url, title y esas cosas de manera manual, en pocas palabras le estamos asignando como parametro los id, titles y url de las imagenes a GGI.
                            {...img}
                        />
                    ))
                }
            </ol>
        </div>
    )
}
