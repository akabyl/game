import GameItem from '../../components/GameItem/GameItem';
import { GAMES } from '../../store/store';

import './home-page.css';


const HomePage = () => {
	return (
		<div className='home-page'>
			{GAMES.map(game => (
				<GameItem game={game} key={game.id} />
			))}
		</div>
	);
};

export default HomePage;
