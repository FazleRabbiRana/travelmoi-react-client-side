import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useMyAuthContexts from '../../../hooks/useMyAuthContexts';
import logo from '../../../logo.svg';
import { HiMenuAlt1 } from 'react-icons/hi';
import { HiX } from 'react-icons/hi';

const Header = () => {
	const { user, logOut, handleOffCanvasToggle, offCanvasOpen } = useMyAuthContexts();

	// topbar nav link active color
	const topbarLinkActiveStyle = {
		backgroundColor: 'var(--clr-yellow)',
	};

	// main nav link active color
	const navLinkActiveStyle = {
		color: 'var(--clr-primary-dark)',
	}

	return (
		<header className="main-header bg-white shadow-sm pt-7">
			<div className="topbar bg-my-primary text-white shadow-sm fixed top-0 inset-x-0 w-full z-30">
				<div className="container flex flex-nowrap justify-end items-center">
					{!user.email ? (
						<NavLink
							to="/login"
							activeStyle={topbarLinkActiveStyle}
							className="btn-topbar"
						>
							Login
						</NavLink>
					) : (
						<>
							<div className="p-2 uppercase font-bold text-xs leading-none tracking-wide">
								<span className="text-gray-200">{user.displayName}</span>
							</div>
							<button
								onClick={logOut}
								className="btn-topbar"
							>
								Logout
							</button>
						</>
					)}
				</div>
			</div>
			<nav className="navbar relative">
				<div className="container py-3 md:py-4 flex flex-nowrap justify-between">
					<div className="logo-wrapper">
						<Link to="/home" className="block">
							<img src={logo} alt="Travelmoi site logo" className="logo" />
						</Link>
					</div>
					<div className={`main-menu-wrapper ${offCanvasOpen && '-translate-x-0'}`}>
						<ul className="main-menu">
							<li>
								<NavLink
									to="/home"
									activeStyle={navLinkActiveStyle}
									className="nav-link"
								>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/my-orders"
									activeStyle={navLinkActiveStyle}
									className="nav-link"
								>
									My Orders
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/manage-orders"
									activeStyle={navLinkActiveStyle}
									className="nav-link"
								>
									Manage Orders
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
				<button
					onClick={handleOffCanvasToggle}
					className="mobile-menu-toggler"
				>
					{offCanvasOpen === false ? (
						<HiMenuAlt1 className="mx-auto text-3xl md:text-4xl transform -rotate-180" />
					) : (
						<HiX className="mx-auto text-3xl md:text-4xl" />
					)}
				</button>
			</nav>
		</header>
	);
};

export default Header;
