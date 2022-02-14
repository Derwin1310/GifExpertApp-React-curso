import {useState} from 'react';
import {AddCategory} from './components/AddCategory';
import {GifGrid} from './components/GifGrid';

//el snippet rafc ya hace todo el functional component por nosotros.
export const GifExpertApp = () => {
	const [categories, setCategories] = useState(['Attack on Titan']);

	return (
		<>
			<h2>GifExpertApp</h2>
			<AddCategory setCategories={setCategories} />
			<hr />

			<ol>
				{
					//Aqui preparamos el ol de categories para que devuelva lo que tiene GifGrid que es un h3 de los elementos que vamos a estar insertando en el input del AddCategories y los muestra ahi
					categories.map(category => (
						<GifGrid key={category} category={category} />
					))
				}
			</ol>
		</>
	);
};
