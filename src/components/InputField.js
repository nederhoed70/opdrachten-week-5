import React from 'react';

function InputField(props) {
	return (
		<form name='boodschappenform' onSubmit={props.inputGrocery}>
			<input
				type='text'
				name='boodschappen'
				onChange={props.handleInput}
				value={props.value}
				placeholder='nieuwe boodschap'
			/>
			<button>voeg toe</button>
		</form>
	);
}

export default InputField;
