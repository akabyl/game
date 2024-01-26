import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setCurrentGame } from '../../redux/games/gamesReducer'
import GameCover from '../GameCover/GameCover';
import GameBuy from '../GameBuy/GameBuy';
import GameGenre from '../GameGenre/GameGenre';

import './game-item.css';

const GameItem = ({ game }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(setCurrentGame(game));
		navigate(`/app/${game.title}`);
	};
	return (
		<div className='game-item' onClick={handleClick}>
			<GameCover image={game.image} />
			<div className='game-item__details'>
				<h3 className='game-item__title'>{game.title}</h3>
				<div className='game-item__genre'>
					{game.genres.map(genre => (
						<GameGenre genre={genre} key={genre} />
					))}
				</div>
				<div className='game-item__buy'>
					<GameBuy game={game} />
				</div>
			</div>
		</div>
	);
};

export default GameItem;
