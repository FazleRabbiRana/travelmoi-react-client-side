import React from 'react';
import banner1 from '../../../images/banner-2.jpg';

const Banner = () => {
	const bannerBgStyle = {
		backgroundImage: `url(${banner1})`,
	};
	return (
		<section
			id="home_banner"
			className="min-h-screen-55 md:min-h-screen-70 bg-no-repeat bg-cover bg-center flex items-center justify-center"
			style={bannerBgStyle}
		>
			<div className="container text-center pb-8 text-white">
				<h2 className="text-white lg:text-xl">Welcome to the world's best</h2>
				<h1 className="mt-1 text-gray-800 text-2xl lg:text-4xl">
					Iconic Travel Agency 
					<span className="block mt-2 lg:mt-3 text-white font-extrabold text-6xl">Travelmoi</span>
				</h1>
			</div>
		</section>
	);
};

export default Banner;
