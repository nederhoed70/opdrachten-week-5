import React from 'react';
import List from './List';

function ShoppingCart(props) {
	return (
		<div id='cart-container' style={{ width: '25%' }}>
			<h2>Winkelmandje</h2>
			<button onClick={props.emptyCart}>Leeg Winkelmandje</button>
			<List item={props.item} />
		</div>
	);
}

export default ShoppingCart;
