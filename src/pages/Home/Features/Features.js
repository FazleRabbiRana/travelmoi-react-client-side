import React, { useEffect, useState } from 'react';
import FeatureCard from '../FeatureCard/FeatureCard';
import featureBg from '../../../images/global-map-1.jpg';

const Features = () => {
	const [features, setFeatures] = useState([]);

	// load all features
	useEffect(() => {
		fetch('https://still-tor-10790.herokuapp.com/features')
			.then(res => res.json())
			.then(data => {
				// console.log(data);
				setFeatures(data);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	return (
		<section id="home_features" className="py-14 lg:py-20 bg-no-repeat bg-cover bg-center bg-fixed" style={{backgroundImage: `url(${featureBg})`}}>
			<div className="container">
				<h2 className="text-center uppercase text-2xl lg:text-3xl text-white mb-10 lg:mb-12">Why choose us</h2>
				<div className="features grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 sm:gap-6 md:gap-10 lg:gap-4 xl:gap-10 2xl:gap-14">
					{
						features.map(feature => <FeatureCard key={feature._id} feature={feature} />)
					}
				</div>
			</div>
		</section>
	);
};

export default Features;