import React, { useEffect, useState } from 'react';
import RemoveDestinationItem from '../RemoveDestinationItem/RemoveDestinationItem';

const RemoveDestination = () => {
	const [destinations, setDestinations] = useState([]);

	// load all destinations
	useEffect(() => {
		fetch('https://still-tor-10790.herokuapp.com/destinations')
			.then(res => res.json())
			.then(data => {
				// console.log(data);
				setDestinations(data);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	return (
		<section id="remove_destination">
			<h2 className="text-xl uppercase mb-6">Remove Package</h2>
			<div className="all-destinations flex flex-col space-y-4">
				{
					destinations.map(destination => <RemoveDestinationItem 
						key={destination._id}
						destination={destination}
						destinations={destinations}
						setDestinations={setDestinations}
					/>)
				}
			</div>
		</section>
	);
};

export default RemoveDestination;