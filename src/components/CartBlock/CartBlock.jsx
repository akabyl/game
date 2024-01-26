import { IoCartOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom'

import CartMenu from '../CartMenu/CartMenu';
import ItemsInCart from '../ItemsInCart/ItemsInCart'
import { calcTotalPrice } from '../utils';
import './CartBlock.css';

const CartBlock = () => {
	const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
	const { items } = useSelector(state => state.cart);
	const totalPrice = calcTotalPrice(items);
	const navigate = useNavigate()
	const handleClick = useCallback(() => {
		// setIsCartMenuVisible(false);
		navigate('order');
	}, [navigate]);
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
				<CartMenu items={items} onClick={handleClick} />
			) : null}
		</div>
	);
};

export default CartBlock;
