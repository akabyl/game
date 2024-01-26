import { Route, Routes } from "react-router-dom";

import { Header } from "./components";
import { HomePage } from "./pages/home-page";
import GamePage from './pages/game-page/GamePage'
import OrderPage from './pages/OrderPage/OrderPage'

function App() {
  return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/app/:title' element={<GamePage />} />
				<Route path='/order' element={<OrderPage />} />
			</Routes>
		</div>
	);
}

export default App;
