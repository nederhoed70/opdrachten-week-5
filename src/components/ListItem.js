import React, { Component } from 'react';

class ListItem extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return this.props.item.map(item => (
			<li
				key={item.id}
				onClick={this.props.handleClick}
				id={item.id}
				name={item.title}
			>
				{item.title}
			</li>
		));
	}
}

export default ListItem;
