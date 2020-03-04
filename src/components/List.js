import React, { Component } from 'react';
import ListItem from './ListItem';

function List(props) {
	return (
		<ul>
			<ListItem item={props.item} />
		</ul>
	);
}

export default List;
