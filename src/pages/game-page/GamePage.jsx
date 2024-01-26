import { useSelector } from 'react-redux';
import './GamePage.css';
import GameCover from '../../components/GameCover/GameCover';
import GameGenre from '../../components/GameGenre/GameGenre';
import GameBuy from '../../components/GameBuy/GameBuy';

const GamePage = () => {
	const game = useSelector(state => state.game.currentGame);
  
	if (!game) {
    <div>Loading...</div>
  }
	return (
		<div className='game-page'>
			<h1 className='game-page__title'>{game.title}</h1>
			<div className='game-page__content'>
				<div className='game-page__left'>
					<iframe
						src={game.video}
						width={'90%'}
						height={'400px'}
						title='Youtube video player'
            frameBorder={"0"}
					/>
				</div>
				<div className='game-page__right'>
					<GameCover image={game.image} />
					<p>{game.description}</p>
					<p className='secondary-text'>Популярные метки этого продукта:</p>
					{game.genres.map(genre => (
						<GameGenre genre={genre} key={genre} />
					))}
					<div className='game-page__buy-game'>
						<GameBuy game={game} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default GamePage;
