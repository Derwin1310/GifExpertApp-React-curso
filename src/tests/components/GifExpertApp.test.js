import {shallow} from 'enzyme';
import GifExpertApp from '../../GifExpertApp';

describe('Tests in <GifExpertApp />', () => {
	test('should show <GifExpertApp /> correctly with an snapshot', () => {
		const wrapper = shallow(<GifExpertApp />);

		expect(wrapper).toMatchSnapshot();
	});

	test('should show a categories list', () => {
		const categories = ['One Punch', 'Attack on Titan'];
		const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
        console.log(wrapper);

        expect(wrapper).toMatchSnapshot();
        //Aqui hacemos un expect del GifGrid que es el que renderiza las busquedas en el GifExpertApp.
		expect(wrapper.find('GifGrid').length).toBe(categories.length);
	});
});
