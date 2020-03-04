import React from 'react';

function clickItemList(event) {
	const { key, value } = event.target;
	console.log('clicked', key, value);
	// this.setState = {
	// 	list: 'cart'
	// };
}

function ListItem(props) {
	const list = props.item.map(item => <li key={item.id}>{item.title}</li>);
	return list;
}

export default ListItem;
