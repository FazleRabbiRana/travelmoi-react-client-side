import React, { useEffect, useState } from 'react';
import FactCard from '../FactCard/FactCard';

const Facts = () => {
	const [facts, setFacts] = useState([]);

	// load all features
	useEffect(() => {
		fetch('https://still-tor-10790.herokuapp.com/facts')
			.then(res => res.json())
			.then(data => {
				// console.log(data);
				setFacts(data);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	return (
		<section id="home_facts" className="py-14 lg:py-20">
			<div className="container">
				<h2 className="text-center uppercase text-2xl lg:text-3xl mb-2 lg:mb-4">Did you know&#63;</h2>
				<p className="max-w-3xl mx-auto text-center text-sm leading-relaxed mb-10 lg:mb-12">
					Did you know that the Great Wall of China was built with sticky rice and that the Eiffel Tower changes its size with the seasons? Even if you are not traveling currently, you can enjoy learning some travel trivia.
				</p>
				<div className="all-facts grid grid-cols-1 sm:grid-cols-2 gap-y-8 sm:gap-x-4 lg:gap-4 xl:gap-8">
					{
						facts.map(fact => <FactCard key={fact._id} fact={fact} />)
					}
				</div>
			</div>
		</section>
	);
};

export default Facts;