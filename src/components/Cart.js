import React, { Component } from 'react';
import CartItem from './ListItem';

class Cart extends Component {
	constructor() {
		super();
		this.setState = this.state;
	}

	render() {
		const cartList = this.state.groceryItems.map(item => {
			if (item.list === 'cart') {
				return <CartItem key={item.id} item={item} />;
			}
		});
		return (
			<div>
				<h2>Winkelmand</h2>
				<ul>{cartList}</ul>
			</div>
		);
	}
}

export default Cart;
