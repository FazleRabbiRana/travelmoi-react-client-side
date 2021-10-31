import React, { useEffect, useState } from 'react';
import useMyAuthContexts from '../../hooks/useMyAuthContexts';
import OrderCard from '../OrderCard/OrderCard';

const MyOrders = () => {
	const { user } = useMyAuthContexts();
	const [myOrders, setMyOrders] = useState([]);

	// load orders
	useEffect(() => {
		fetch('https://still-tor-10790.herokuapp.com/orders')
			.then(res => res.json())
			.then(data => {
				console.log(data);
				const matchedOrders = data.filter(order => order.email === user.email);
				setMyOrders(matchedOrders);
			});
	}, []);

	return (
		<div className="py-10 lg:py-14">
			<div className="container">
				{
					myOrders.length < 1 && <h2 className="text-center text-xl uppercase mb-6">You have no orders yet.</h2>
				}
				<div className="all-orders grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-y-12 sm:gap-y-8 sm:gap-x-4 md:gap-10 lg:gap-x-6 xl:gap-10">
					{myOrders.map(order => (
						<OrderCard
							key={order._id}
							order={order}
							myOrders={myOrders}
							setMyOrders={setMyOrders}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default MyOrders;
