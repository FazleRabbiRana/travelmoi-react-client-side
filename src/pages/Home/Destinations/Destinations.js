import React, { useEffect, useState } from 'react';
import useMyAuthContexts from '../../../hooks/useMyAuthContexts';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';
import DestinationCard from '../DestinationCard/DestinationCard';

const Destinations = () => {
	const { isLoading, setIsLoading } = useMyAuthContexts();
	const [destinations, setDestinations] = useState([]);

	useEffect(() => {
		setIsLoading(true);
		fetch('https://still-tor-10790.herokuapp.com/destinations')
			.then(res => res.json())
			.then(data => {
				// console.log(data);
				setDestinations(data);
			})
			.catch(err => {
				console.log(err);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	return (
		<section id="home_destinations" className="py-14 lg:py-20 bg-white">
			<div className="container">
				<h2 className="uppercase text-center lg:text-left text-2xl lg:text-3xl mb-10 lg:mb-12">Our Destinations</h2>
				{
					isLoading && <LoadingSpinner />
				}
				<div className="all-destinations grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-y-12 sm:gap-y-8 sm:gap-x-4 md:gap-10 lg:gap-x-6 xl:gap-10">
					{
						destinations.map(destination => <DestinationCard key={destination._id} destination={destination} />)
					}
				</div>
			</div>
		</section>
	);
};

export default Destinations;