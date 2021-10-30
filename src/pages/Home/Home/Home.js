import React from 'react';
import Banner from '../Banner/Banner';
import Destinations from '../Destinations/Destinations';
import Facts from '../Facts/Facts';
import Features from '../Features/Features';

const Home = () => {
	return (
		<section id="home">
			<Banner />
			<Destinations />
			<Facts />
			<Features />
		</section>
	);
};

export default Home;