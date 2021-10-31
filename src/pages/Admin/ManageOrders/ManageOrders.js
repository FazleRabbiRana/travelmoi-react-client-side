import React, { useEffect, useState } from 'react';
import ManageOrderCard from '../ManageOrderCard/ManageOrderCard';

const ManageOrders = () => {
	const [allOrders, setAllOrders] = useState([]);

	// load all orders
	useEffect(() => {
		fetch('https://still-tor-10790.herokuapp.com/orders')
			.then(res => res.json())
			.then(data => {
				// console.log(data);
				setAllOrders(data);
			})
			.catch(err => {
				console.log(err);
			})
	}, []);

	return (
		<section id="manage_orders">
			<h2 className="text-xl uppercase mb-6">Manage All Orders</h2>
			<div className="all-orders grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-y-12 sm:gap-y-8 sm:gap-x-4 md:gap-10 lg:gap-x-4 lg:gap-y-6 xl:gap-8 2xl:gap-10">
				{
					allOrders.map(order => <ManageOrderCard 
						key={order._id} 
						order={order} 
						allOrders={allOrders}
						setAllOrders={setAllOrders}
					/>)
				}
			</div>
		</section>
	);
};

export default ManageOrders;