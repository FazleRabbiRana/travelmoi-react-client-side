import React from 'react';
import bgImg from '../../images/global-map-2.jpg';
import errorImg from '../../images/error-404.png';
import { Link } from 'react-router-dom';

const NotFound = () => {
	// page background image
	const pageBgStyle = {
		backgroundImage: `url(${bgImg})`,
	}

	return (
		<div id="not_found_error" className="fixed inset-0 bg-gray-800 z-highest">
			<div className="inner h-full w-full bg-no-repeat bg-cover bg-fixed" style={pageBgStyle}>
				<div className="bg-overlay h-full w-full bg-gray-800 bg-opacity-95 text-white">
					<div className="container h-full flex flex-col justify-center text-center pb-8">
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