import React, { Component } from 'react';
import GroceryList from './components/GroceryList';
import ShoppingCart from './components/ShoppingCart';

class Container extends Component {
	constructor() {
		super();
		this.state = {
			groceryItems: [
				{ id: 1, title: 'Appels' },
				{ id: 2, title: 'Mandarijnen' },
				{ id: 3, title: 'Bloemkool' },
				{ id: 4, title: 'Bruinbrood' },
				{ id: 5, title: 'Kikkererwten' },
				{ id: 6, title: 'Pak melk' }
			],
			shoppingListItems: [{ id: 1, title: 'Bier' }]
		};
	}
	render() {
		const groceryList = this.state.groceryItems.map(item => {
			return item;
		});

		const cartList = this.state.shoppingListItems.map(item => {
			return item;
		});

		return (
			<div>
				<GroceryList item={groceryList} />
				<ShoppingCart item={cartList} />
			</div>
		);
	}
}
export default Container;
