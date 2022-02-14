import React, {useState} from 'react';
import PropTypes from 'prop-types';

//Aqui estamos agarrando el parametro que le colocamos en el anterior componente como si fuera de el.
export const AddCategory = ({setCategories}) => {
	//Si no le colocamos un valor al parametro del useState, y utilizamos el onChange para el input, nos va a dar un error ya que el valor que se va a cambiar es undefined, y eso daria error.
	//Si no queremos mostrar nada en el input simplemente colocamos un string vacio y ahi no tendra errores porque un input vacio no es igual que undefined.
	const [inputValue, setinputValue] = useState('');

	const handleInputValue = e => {
		setinputValue(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		// console.log('Submit realizado');
		// console.log(inputValue);
		//Aqui hacemos una validacion para que el muestre el inputValue solo si es mayor de 2 caracteres y que luego de eso el input sea un string vacio.
		if (inputValue.length > 2) {
			setCategories(cats => [inputValue, ...cats]);
			setinputValue('');
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type='text' value={inputValue} onChange={handleInputValue} />
		</form>
	);
};

//Aqui hacemos que sea un prototipo obligatorio, y al ser una funcion le colocamos PropTypes.func ya que es el que se utiliza para funciones
AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired,
};
