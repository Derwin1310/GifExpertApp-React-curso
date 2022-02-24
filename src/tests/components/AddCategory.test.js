import {AddCategory} from '../../components/AddCategory';
import {shallow} from 'enzyme';

describe('Tests in <AddCategory />', () => {
	//El jest.fn() se utiliza para traer la funcion que realiza originalmente el programa para no volver a escribirla.
	const setCategories = jest.fn();
	let wrapper = shallow(<AddCategory setCategories={setCategories} />);

	//aqui utilizamos el beforeEach ya que en el segundo test utilizamos la funcion, y al hacer la prueba en el tercer test toma como si ya se hubiera llamado una vez.
	beforeEach(() => {
        //El clearAllMocks hace que las funciones que se ejecutaron en test anteriores empiecen como nuevas en otros tests.
		jest.clearAllMocks();
		wrapper = shallow(<AddCategory setCategories={setCategories} />);
	});

    //Test de hacer un snapshot al <AddCategory />
	test('should show <AddCategory /> correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});

    //Test para asegurarnos que el inputHandleValue cambia
	test('should change the text box of handleInputValue', () => {
		const input = wrapper.find('input');
		const value = 'Hello world';

		//Cuando el evento tiene un parametro (e) en la funcion, para usar el onChange se hace de esta manera
		input.simulate('change', {target: {value}});
		const res = wrapper.find('p').text();

		expect(res).toBe('Hello world');
	});

    //Test para simular un submit en el form con el handleSubmit
	test(`shouldn't post the info on submit (handleSubmit)`, () => {
		//Aqui mostramos el prevent default mandandole un objeto del evento submit para que no tenga un error
		wrapper.find('form').simulate('submit', {preventDefault() {}});

		//el toHaveBeenCalled lo utilizamos con las funciones para ver si se ejecutaron o no, en este caso para ver si no se ejecuto con el .not
		expect(setCategories).not.toHaveBeenCalled();
	});

    //Test probando que el handleInput cambie y luego quede vacio despues de un handleSubmit
	test('should call setCategories and clean the input', () => {
		// const input = wrapper.find('input');
		const value = 'Hello world';

		wrapper.find('input').simulate('change', {target: {value}});
		wrapper.find('form').simulate('submit', {preventDefault() {}});

        //Este expect nos hace el teste sobre si la funcion fue llamada
		expect(setCategories).toHaveBeenCalled();
        //Cuantas veces fue llamada la funcion
		expect(setCategories).toHaveBeenCalledTimes(1);
        //Expect para evaluar que se haya llamado como una funcion, string, number o boolean
		expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        //tarea resuelta
		expect(wrapper.find('p').text()).toBe('');
		// expect(res).toBe('');
	});
});
