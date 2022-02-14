import {useState, useEffect} from 'react';
import {getGifs} from '../helpers/GetGifs';

//Aqui estamos realizando el custom hook como una funcion comun y corriente, solo que al colocarle la palabra use al inicio ya lo podemos manejar como un hook, y lo que hace es una funcion sencilla que retorna el nuevo valor del state tras un setTimeOut para que aplique la logica en el GifGrid.
export const useFetchGifs = category => {
	const [state, setState] = useState({
		data: [],
		loading: true,
	});

    //Podemos aplicar el useEffect asi como el useState dentro de nuestros custom hooks para que lo renderize una sola vez.
	useEffect(() => {
        //Recordemos que este category es el parametro que trae desde el GifGrid que viene de GifExpertApp para mostrar las imagenes
		getGifs(category).then(img => {
            //El setTimeOut es para simular una carga mas lenta de la api
			setTimeout(() => {
                console.log(img)
                //Y usamos la funcion del useState para resolver la promesa del getGifs volviendo la data: img para destructurarla en GifGrid
				setState({
					data: img,
					loading: false,
				});
			}, 3000);
		});
	}, [category]);

	return state;
};
