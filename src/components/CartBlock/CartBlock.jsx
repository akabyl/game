import { IoCartOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import './CartBlock.css';

import CartMenu from '../CartMenu/CartMenu';
import ItemsInCart from '../ItemsInCart/ItemsInCart'
import { calcTotalPrice } from '../utils';

const CartBlock = () => {
	const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
	const { items } = useSelector(state => state.cart);
	const totalPrice = calcTotalPrice(items);
	return (
		<div className='cart-block'>
		<ItemsInCart quantity={items.length}/>
			<IoCartOutline
				size={25}
				className='cart-block__icon'
				onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
			/>
			{totalPrice > 0 ? (
				<span className='cart-block__total-price'>{totalPrice}Р</span>
			) : null}
			{isCartMenuVisible ? (
				<CartMenu items={items} onClick={() => null} />
			) : null}
		</div>
	);
};

export default CartBlock;
