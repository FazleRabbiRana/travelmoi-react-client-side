import axios from 'axios';
import React, { useEffect, useState } from 'react';

const OrderCard = ({ order, myOrders, setMyOrders }) => {
	// console.log(order);
	const { orderedItem } = order;
	const [item, setItem] = useState({});

	// load ordered item
	useEffect(() => {
		const url = `https://still-tor-10790.herokuapp.com/destinations/${orderedItem?.itemId}`;
		fetch(url)
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setItem(data);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	// handle cancel order
	const handleCancelOrder = id => {
		const url = `https://still-tor-10790.herokuapp.com/orders/${id}`;
		const proceed = window.confirm('Are you sure to Cancel?');
		if (proceed) {
			axios
				.delete(url)
				.then(res => {
					console.log(res);
					if (res.data.deletedCount) {
						const remaining = myOrders.filter(order => order._id !== id);
						setMyOrders(remaining);
					}
				})
				.catch(err => {
					console.log(err);
				});
		}
	};

	const { title, image, address, cost } = item;

	return (
		<div className="destination-card bg-gray-200 group">
			<div className="image bg-gray-300 h-60 sm:h-52 overflow-hidden relative">
				<img src={image} alt={title} className="h-full w-full object-cover" />
			</div>
			<div className="px-2 py-4 md:p-4">
				<div className="flex flex-nowrap justify-between">
					<div>
						<h3 className="text-base">{title}</h3>
						<p className="uppercase text-xs">{address?.country}</p>
					</div>
					<div className="uppercase text-right">
						<p className="text-xs leading-normal">From</p>
						<h4 className="text-xl leading-none tracking-wider text-my-secondary-dark">
							&#36;{cost?.from}
						</h4>
					</div>
				</div>
				<div className="text-center mt-6">
					<button
						onClick={() => handleCancelOrder(order._id)}
						className="btn-regular bg-my-yellow hover:bg-yellow-600"
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
};

export default OrderCard;
