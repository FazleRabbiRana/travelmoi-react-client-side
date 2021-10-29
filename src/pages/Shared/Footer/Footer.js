import React from 'react';
import { HiArrowNarrowUp } from 'react-icons/hi';

const Footer = () => {
	const today = new Date();
	const fullYear = today.getFullYear();

	return (
		<footer className="bg-white">
			<div className="container py-8">
				
			</div>
			<div className="bg-gray-200 py-3">
					<div className="container flex items-center justify-between">
						<p className="text-sm">
							&copy; {fullYear} <span className="font-bold">Travelmoi</span>
						</p>
						<button className="flex-shrink-0 w-8 h-8 rounded-full text-center bg-white border-2 border-my-primary-light duration-300 hover:border-my-primary-dark">
							<HiArrowNarrowUp className="mx-auto" />
						</button>
					</div>
				</div>
		</footer>
	);
};

export default Footer;