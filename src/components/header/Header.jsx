import { Link } from 'react-router-dom'

import CartBlock from '../CartBlock/CartBlock'

import './Header.css'

const Header = () => {
  return (
		<div className='header'>
			<div className='wrapper'>
				<Link to={'/'} className='header__store-title'>
					Game Store
				</Link>
				<Link to={'/cart'} className='wrapper header__cart-btn-wrapper'>
          <CartBlock/>
        </Link>
			</div>
		</div>
	);
}

export default Header