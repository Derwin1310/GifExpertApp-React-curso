import React, {useEffect, useState} from 'react';
import {getGifs} from '../helpers/GetGifs';
import {GifGridItem} from './GifGridItem';

export const GifGrid = ({category}) => {
	//Aqui usamos el useState de esta funcion para poder imprimirla mas abajo con los gif en el li, y lo hacemos un array vacio para que tenga donde almacenar las imagenes
	const [images, setImages] = useState([]);

	useEffect(() => {
		//Lo que hicimos aqui fue borrar el componente que teniamos de getGifs y lo pasamos a otro archivo, de esa manera solo estamos trayendo la funcion para ejecutarla aqui y no tener tanto codigo en este archivo.
		//Y le colocamos el .then debido a que retorna una promesa al ser una funcion async
		getGifs(category)
            .then(setImages);
	}, [category]);

	return (
		<>
			<h3>{category}</h3>
			<div className='card-grid'>
				<ol>
					{images.map(img => (
						<GifGridItem
							key={img.id}
							//Aqui le asignamos el operador spread a img para que se traiga todo lo que recorre el images.map que son basicamente las imagenes de getGifs y no tener que colocar el url, title y esas cosas de manera manual, en pocas palabras le estamos asignando como parametro los id, titles y url de las imagenes a GGI.
							{...img}
						/>
					))}
				</ol>
			</div>
		</>
	);
};
