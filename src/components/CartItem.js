import React from 'react';

const clickItemCart = event => {
	console.log('clicked', event.target.value);
};

function CartItem(props) {
	const { id, title } = props.item;
	return (
		<li>
			<a
				href=''
				key={id}
				className='cart-item'
				onClick={clickItemCart}
				value={title}
			>
				{title}
			</a>
		</li>
	);
}

export default CartItem;
