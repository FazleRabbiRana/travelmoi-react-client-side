import React from 'react';
import bgImg from '../../images/global-map-2.jpg';
import errorImg from '../../images/error-404.png';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';

const NotFound = () => {
	// page background image
	const pageBgStyle = {
		backgroundImage: `url(${bgImg})`,
	}

	return (
		<div id="not_found_error" className="fixed inset-0 bg-gray-800 z-highest">
			<div className="inner h-full w-full bg-no-repeat bg-cover bg-fixed" style={pageBgStyle}>
				<div className="bg-overlay h-full w-full bg-gray-800 bg-opacity-95 text-white">
					<header className="py-3 md:py-4 bg-white text-center">
						<div className="logo-wrapper">
							<Link to="/home" className="block">
								<img src={logo} alt="Travelmoi site logo" className="logo" />
							</Link>
						</div>
					</header>
					<div className="container h-full flex flex-col justify-center text-center pb-12">
						<div>
							<div className="w-96 max-w-clear mx-auto mb-6">
								<img src={errorImg} alt="Error 404" />
							</div>
							<h2 className="text-white text-3xl lg:text-5xl">Page Not Found!</h2>
						</div>
						<div className="mt-8 flex items-center justify-center space-x-4">
							<Link to="/home" className="btn-regular text-base">
								Back to Home
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NotFound;