import { IoCartOutline } from 'react-icons/io5';

import './CartBlock.css';

const CartBlock = () => {

	return (
		<div className='cart-block'>
			<IoCartOutline size={25} className='cart-block__icon' />
			<span className='cart-block__total-price'>2500Р</span>
		</div>
	);
};

export default CartBlock;
