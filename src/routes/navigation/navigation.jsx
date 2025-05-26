import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import CrwnLogo from '../../assets/crown.svg?react';
import './navigation.scss';

const Navigation = () => {
	return (
		<>
			<div className='navigation'>
				<div className='logo-container'>
					<Link className='logo' to='/'>
						<CrwnLogo className='logo' />
					</Link>
				</div>
				<div className='nav-links-container'>
					<Link className='nav-link' to='/shop'>
						Shop
					</Link>
					<Link className='nav-link' to='/auth'>
						Sign In
					</Link>
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
