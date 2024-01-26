import Button from '../button/Button';
import './game-buy.css';

const GameBuy = ({ game }) => {
	return (
		<div className='game-buy'>
			<span className='game-buy__price'>{game.price} руб.</span>
			<Button onClick={() => null} type='primary'>В Корзину</Button>
		</div>
	);
};

export default GameBuy;
