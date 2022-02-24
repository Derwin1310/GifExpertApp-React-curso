import {GifGrid} from '../../components/GifGrid';
import {shallow} from 'enzyme';
import {useFetchGifs} from '../../hooks/useFetchGifs';
//Este jest.mock con el path de nuestro useFetchGifs hace que podamos utilizar este custom hook en los test para diferentes pruebas y no tener que importar las dependencias que este contiene.
jest.mock('../../hooks/useFetchGifs');

describe('Tests in <GifGrid />', () => {
	const category = 'Attack on Titan';

    //En este test hacemos un snapshot de como queda el jsx antes de usar al custom hook
	test('should show <GifGrid /> correctly', () => {
        //usamos el useFetchGifs con el return value para simular que lo estamos usando con una data que no existe en realidad.
        //En este test lo probamos como si no se usara.
		useFetchGifs.mockReturnValue({
			data: [],
			loading: true,
		});

		const wrapper = shallow(<GifGrid category={category} />);
		expect(wrapper).toMatchSnapshot();
	});

    //Y en este mostramos como queda el jsx despues de usar el custom hook.
	test('should show items when useFetchGifs get used', () => {
        //Aqui creamos un array con un objeto para simular que esto es lo que estamos devolviendo en el custom hook
		const gifs = [
			{
				id: 'Derwin',
				title: 'Im a title',
				url: 'https://localhost/any/anything.jpg',
			},
			{
				id: 'Eduardo',
				title: 'Im a title vol.2',
				url: 'https://localhost/any/anythingVol2.jpg',
			},
		];

        //Y una vez este se crea el custom hook ahora le colocamos los valores que deberia tener cuando la data cambia por un objeto que se trajo y hacemos un snapshot para mostrar como queda.
		useFetchGifs.mockReturnValue({
			data: gifs,
			loading: false,
		});

		const wrapper = shallow(<GifGrid category={category} />);

		expect(wrapper).toMatchSnapshot();
		//Aqui evaluanos sobre si el parrafo que dice Loading no existe cuando esta en false.
		expect(wrapper.find('p').exists()).toBe(false);
		//Aqui evaluamos si el GGI que es quien recibe el array de objetos de gifs es igual a gifs
		expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
		//Aqui mas de lo mismo con lo de arriba(importante no redundar, solo lo hice por temas de aprendizaje )
		expect(wrapper.find('GifGridItem').length).toBe(2);
	});
});
