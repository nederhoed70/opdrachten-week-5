import React from 'react';
import ListItem from './ListItem';

function List(props) {
	return (
		<ul style={{ margin: '0px', padding: '0px' }}>
			<ListItem item={props.item} handleClick={props.handleClick} />
		</ul>
	);
}

export default List;
