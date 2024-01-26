import { useDispatch, useSelector } from 'react-redux';
import Button from '../button/Button';
import './game-buy.css';
import { setAddItem, setDelItem } from '../../redux/cart/cartReducer';

const GameBuy = ({ game }) => {
	const dispatch = useDispatch();
	const { items } = useSelector(state => state.cart);
	const isItemInCart = items.some(item => item.id === game.id);
	const handleClick = event => {
		event.stopPropagation();
		if (isItemInCart) {
			dispatch(setDelItem(game.id));
		} else {
			dispatch(setAddItem(game));
		}
		// isItemInCart ? dispatch(setDelItem(game.id)) : dispatch(setAddItem(game));
	};
	return (
		<div className='game-buy'>
			<span className='game-buy__price'>{game.price} руб.</span>
			<Button
				type={isItemInCart ? 'secondary' : 'primary'}
				onClick={handleClick}
			>
				{isItemInCart ? 'Убрать из корзины' : 'В Корзину'}
			</Button>
		</div>
	);
};

export default GameBuy;
