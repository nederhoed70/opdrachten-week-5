import React, { Component, Children } from 'react';

class ListItem extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return this.props.item.map(item => (
			<li
				className='listItems'
				key={item.id}
				onClick={this.props.handleClick}
				id={item.id}
				name={item.title}
				style={{
					listStyle: 'none',
					border: '2px solid #ccc',
					padding: '10px',
					margin: '4px 0px'
				}}
			>
				{item.title}
			</li>
		));
	}
}

export default ListItem;
