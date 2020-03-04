import React from 'react';
import List from './List';

function GroceryList(props) {
	console.log('props in GroceryList', props.item);
	return (
		<div>
			<h2>Boodschappen</h2>
			<List item={props.item} />
		</div>
	);
}

export default GroceryList;
