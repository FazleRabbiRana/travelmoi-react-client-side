import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../logo.svg';

const Header = () => {
	return (
		<header className="navbar py-3 md:py-4">
			<div className="container flex items-center justify-between">
				<div className="logo-wrapper">
					<Link to='/home' className="block">
						<img src={logo} alt="Travelmoi site logo" className="logo" />
					</Link>
				</div>
			</div>
			<h1>This is Header</h1>
		</header>
	);
};

export default Header;