import React from 'react';
import { HiArrowNarrowUp } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import ScrollUpButton from "react-scroll-up-button";

const Footer = () => {
	const today = new Date();
	const fullYear = today.getFullYear();

	const footerLinksActiveStyle = {
		color: 'var(--clr-primary-dark)',
	}

	return (
		<footer className="bg-white">
			<div className="container py-8">
				<div>
					<NavLink 
						to='/terms-of-services' 
						activeStyle={footerLinksActiveStyle}
						className="footer-link"
					>
						Terms of Services
					</NavLink>
					<NavLink 
						to='/privacy-policy' 
						activeStyle={footerLinksActiveStyle}
						className="footer-link"
					>
						Privacy Policy
					</NavLink>
				</div>
			</div>
			<div className="bg-gray-200 py-3">
					<div className="container flex items-center justify-between">
						<p className="text-sm">
							&copy; {fullYear} <span className="font-bold">Travelmoi.</span>
						</p>
						<ScrollUpButton 
							StopPosition={0}
							ShowAtPosition={0}
							EasingType='easeOutCubic'
							AnimationDuration={500}
							ContainerClassName='flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-center bg-white border-2 border-my-primary-light duration-300 hover:border-my-primary-dark cursor-pointer'
							TransitionClassName='ScrollUpButton__Toggled'
							style={{}}
							ToggledStyle={{}}
						>
							<HiArrowNarrowUp className="mx-auto" />
						</ScrollUpButton>
					</div>
				</div>
		</footer>
	);
};

export default Footer;