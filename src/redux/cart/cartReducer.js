import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: [],
	},
	reducers: {
		setAddItem: (state, action) => {
			state.items.push(action.payload);
		},
		setDelItem: (state, action) => {
			state.items = state.items.filter(game => game.id !== action.payload);
		}
	},
});

export const { setAddItem, setDelItem } = cartSlice.actions;
export default cartSlice.reducer;


