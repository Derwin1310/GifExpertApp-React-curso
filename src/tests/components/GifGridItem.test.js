import {shallow} from 'enzyme';
import {GifGridItem} from '../../components/GifGridItem';

describe('Tests in Gif Grid Item', () => {
	const title = 'Very nice title';
	const url = 'https://localhost/something.jpg';
	const wrapper = shallow(<GifGridItem title={title} url={url} />);

	test('should show the component correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('should have a paragraph with the title', () => {
		const p = wrapper.find('p').text();

		expect(p).toBe(title);
	});

	test('should have the same image as the url with props', () => {
		const img = wrapper.find('img');
		// const imgSrc = wrapper.find('img').prop('src');
		// const imgAlt = wrapper.find('img').prop('alt');

		expect(img.prop('src')).toBe(url);
		expect(img.prop('alt')).toBe(title);
	});

	test('should have the className animate_backInLeft', () => {
		const div = wrapper.find('div').hasClass('animate__backInLeft')
		// const div = wrapper.find('div').prop('className').includes('animate__backInLeft')

		// console.log(div)

		// const clas = 'animate_backInLeft';

		expect(div).toBe(true);
	});
});
