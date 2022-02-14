import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import {GifGridItem} from './GifGridItem';

export const GifGrid = ({category}) => {
	
    //Aqui lo que hacemos es aplicar el custom hook pero ya utilizandolo de verdad con la peticion https del fetch y le colocamos el category para que muestre las imagenes.
    //De modo que ya no necesitamos el getGifs
    const {data: imgs, loading} = useFetchGifs(category);
    
	return (
		<>
			<h3>{category}</h3>
            {/* Aqui colocamos el loading con una condicion para que muestre un parrafo mientras vienen las imagenes */}
            {loading && <h4>Loading...</h4>}
			<div className='card-grid'>
                {/* Y aqui le hacemos el .map al imgs ya que el es quien tiene la funcion del getGifs para traer las imagenes */}
				{imgs.map(img => (
					<GifGridItem key={img.id} {...img} />
				))}
			</div>
		</>
	);
};
