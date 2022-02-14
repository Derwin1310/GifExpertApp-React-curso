import {useState, useEffect} from 'react';
import {getGifs} from '../helpers/GetGifs';

export const useFetchGifs = category => {
	const [state, setState] = useState({
		data: [],
		loading: true,
	});
	useEffect(() => {

		getGifs(category).then(img => {
			setTimeout(() => {
                console.log(img)
				setState({
					data: img,
					loading: false,
				});
			}, 3000);
		});
	}, [category]);

	return state;
};
