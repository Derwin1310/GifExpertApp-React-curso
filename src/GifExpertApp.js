import {useState} from 'react';
import {AddCategory} from './components/AddCategory';
import {GifGrid} from './components/GifGrid';

const GifExpertApp = ({defaultCategories = []}) => {
	// const [categories, setCategories] = useState(['Attack on Titan']);
	const [categories, setCategories] = useState(defaultCategories);

	return (
		<>
			<h2 className='title'>GifExpertApp</h2>
			<AddCategory setCategories={setCategories} />

			<ol className='grid-wrapper'>
				{categories.map(category => (
					<GifGrid key={category} category={category} />
				))}
			</ol>
		</>
	);
};

export default GifExpertApp;
