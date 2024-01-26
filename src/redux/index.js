import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/cartReducer'
import gamesReducer from './games/gamesReducer'

const store = configureStore({
	reducer: {
		cart: cartReducer,
		game: gamesReducer,
	},
});

export default store;
