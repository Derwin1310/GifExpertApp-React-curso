import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import {getGifs} from '../helpers/GetGifs';
// import {GifGridItem} from './GifGridItem';

export const GifGrid = ({category}) => {
	/* const [images, setImages] = useState([]);
    

	useEffect(() => {
		getGifs(category).then(setImages);
	}, [category]); */

    //En esta parte reemplazamos el codigo de arriba con este custom hook que nos permite cargar la informacion que le enviemos, el archivo se encuentra en hooks.
    //Aqui lo que hacemos es destructurar el objeto que tiene useFetchGifs()
    const {loading} = useFetchGifs();
    
	return (
		<>
			<h3>{category}</h3>
            {/*Y colocamos en esta parte el loading para que se ejecute la funcion del custom hook */}
            {loading ? 'Loading...' : 'Data succesfully charged'}
			{/* <div className='card-grid'>
				{images.map(img => (
					<GifGridItem key={img.id} {...img} />
				))}
			</div> */}
		</>
	);
};
