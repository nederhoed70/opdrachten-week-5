import React, { Component } from 'react';

function InputField(props) {
	return (
		<form onSubmit={props.inputGrocery}>
			<input
				type='text'
				name='boodschappen'
				onChange={props.handleChange}
				value={props.value}
				placeholder='nieuwe boodschap'
			/>
			<button>voeg toe</button>
		</form>
	);
}

export default InputField;