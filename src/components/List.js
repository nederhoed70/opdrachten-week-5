import React from 'react';
import ListItem from './ListItem';

function List(props) {
	return (
		<ul>
			<ListItem item={props.item} handleClick={props.handleClick} />
		</ul>
	);
}

export default List;
