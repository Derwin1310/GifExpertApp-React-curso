import React, {useMemo, useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
	const [inputValue, setinputValue] = useState('');

	const handleInputValue = (e) => {
		setinputValue(e.target.value);
		// console.log('handleInputChange called');
	};

	const handleSubmit = e => {
		e.preventDefault();
		// console.log('handleSubmit', inputValue);
		if (inputValue.length > 2) {
			// setCategories(cats => [inputValue, ...cats]);
			setCategories(cats => [inputValue, ...cats]);
			setinputValue('');
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input placeholder='Search something' type='text' value={inputValue} onChange={handleInputValue} />
		</form>
	);
};

AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired,
};
