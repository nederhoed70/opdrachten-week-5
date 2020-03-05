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
			shoppingListItems: [{ id: 7, title: 'Bier' }],

			tempItems: [{ id: '', title: '' }]
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.emptyCart = this.emptyCart.bind(this);
		this.inputGrocery = this.inputGrocery.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleClick(event) {
		this.handleChange(parseInt(event.target.id));
	}

	handleChange(id) {
		const index = this.state.groceryItems.findIndex(item => item.id === id);
		this.setState(prevState => {
			const itemToCart = prevState.groceryItems.find(item => item.id === id);
			return prevState.shoppingListItems.push(itemToCart);
		});
		this.setState(prevState => {
			return prevState.groceryItems.splice(index, 1);
		});
	}
	inputGrocery(event) {
		event.preventDefault();
		console.log(
			'input',
			event.value,
			this.state.groceryItems.length,
			this.state.shoppingListItems.length
		);
		// let newId =
		// 	this.state.groceryItems.length + this.state.shoppingListItems.length + 1;
		// this.setState({
		// 	groceryItems: [{ id: newId, title: this.tempItemsvalue }]
		// });
	}

	// handleChange = event => {
	// 	const { value } = event.target;
	// 	console.log(value);
	// 	this.setState({
	// 		tempItems: [
	// 			{
	// 				title: value
	// 			}
	// 		]
	// 	});
	// };

	emptyCart() {
		// this.setState(prevState => {
		// 	const clearCart = prevState.shoppingListItems;
		// 	return prevState.groceryItems.push(clearCart);
		// });
		this.setState({ shoppingListItems: [] });
		// this.setState(state => {
		// 	this.state.shoppingListItems = [];
		// });
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
				<GroceryList
					item={groceryList}
					handleClick={this.handleClick}
					inputGrocery={this.inputGrocery}
					handleChange={this.handleChange}
				/>
				<ShoppingCart item={cartList} emptyCart={this.emptyCart} />
			</div>
		);
	}
}
export default Container;
