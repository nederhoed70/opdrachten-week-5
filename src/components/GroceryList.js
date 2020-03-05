import React from 'react';
import List from './List';
import InputField from './InputField';

function GroceryList(props) {
	console.log('props in GroceryList', props.item);
	return (
		<div>
			<h2>Boodschappen</h2>
			<InputField
				inputGrocery={props.inputGrocery}
				handleChange={props.handleChange}
				item={props.item}
			/>
			<List item={props.item} handleClick={props.handleClick} />
		</div>
	);
}

export default GroceryList;
