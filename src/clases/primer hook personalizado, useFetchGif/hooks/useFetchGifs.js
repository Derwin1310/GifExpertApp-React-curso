import {useState} from 'react';

//Aqui estamos realizando el custom hook como una funcion comun y corriente, solo que al colocarle la palabra use al inicio ya lo podemos manejar como un hook, y lo que hace es una funcion sencilla que retorna el nuevo valor del state tras un setTimeOut para que aplique la logica en el GifGrid.
export const useFetchGifs = () => {
	const [state, setState] = useState({
		data: [],
		loading: true,
	});

    setTimeout(() => {
        setState({
            data: [1,2,3],
            loading: false,
        })
    },3000);

    return state;
};
