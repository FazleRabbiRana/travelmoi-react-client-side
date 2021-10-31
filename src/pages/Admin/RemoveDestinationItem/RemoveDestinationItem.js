import axios from 'axios';
import React from 'react';
import { HiTrash } from 'react-icons/hi';

const RemoveDestinationItem = ({ destination, destinations, setDestinations }) => {
	const { _id, title, image, address } = destination;

	// handle remove package/destination
	const handleremoveDestination = id => {
		const proceed = window.confirm('Will be removed from Database. \nProceed?');
		const url = `https://still-tor-10790.herokuapp.com/destinations/${id}`;
		if (proceed) {
			axios
				.delete(url)
				.then(res => {
					console.log(res);
					if (res.data.deletedCount) {
						const remaining = destinations.filter(order => order._id !== id);
						setDestinations(remaining);
					}
				})
				.catch(err => {
					console.log(err);
				});
		}
	};

	return (
		<div className="remove-item-block bg-gray-200 group flex flex-nowrap items-center justify-between lg:max-w-screen-sm">
			<div className="flex-auto flex flex-nowrap items-center space-x-2 md:space-x-4 text-my-xs sm:text-xs md:text-sm">
				<div className="image flex-shrink-0 w-16 overflow-hidden">
					<img src={image} alt={title} />
				</div>
				<h4 className="uppercase font-normal">{title}</h4>
				<p className="hidden sm:inline-block ">{address.city}, {address.country}</p>
			</div>
			<div className="flex-shrink-0">
				<button onClick={() => handleremoveDestination(_id)} className="p-2">
					<HiTrash className="text-xl text-red-600 hover:text-red-700" />
				</button>
			</div>
		</div>
	);
};

export default RemoveDestinationItem;