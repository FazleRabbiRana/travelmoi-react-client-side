import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageOrderCard = ({ order, setAllOrders, allOrders }) => {
	// console.log(order);
	const { _id, name, date, status, orderedItem } = order;
	const [orderItemDetail, setOrderItemDetail] = useState({});

	// load the order item detail
	useEffect(() => {
		const url = `https://still-tor-10790.herokuapp.com/destinations/${orderedItem?.itemId}`;
		fetch(url)
			.then(res => res.json())
			.then(data => {
				// console.log(data);
				setOrderItemDetail(data);
			})
	}, [orderedItem?.itemId]);

	// handle approve order
	const handleApproveOrder = id => {
		const updatedOrder = {...order}
		updatedOrder.status = 'Approved';
		const url = `https://still-tor-10790.herokuapp.com/orders/${id}`;
		axios
			.put(url, updatedOrder)
			.then(res => {
				if (res.data.modifiedCount) {
					const reload = window.confirm('✔️ Approved successfully. \nSelect "Ok" to refresh this page.');
					if (reload) {
						window.location.reload();
					}
				}
			})
	}

	// handle cancel order
	const handleCancelOrder = id => {
		if (allOrders.length < 5) {
			alert('For demo purpose can\'t remove when less then 5 orders');
			return;
		}

		const proceed = window.confirm('Order will be removed. \nProceed?');
		const url = `https://still-tor-10790.herokuapp.com/orders/${id}`;
		if (proceed) {
			axios
				.delete(url)
				.then(res => {
					// console.log(res);
					if (res.data.deletedCount) {
						const remaining = allOrders.filter(order => order._id !== id);
						setAllOrders(remaining);
					}
				})
				.catch(err => {
					console.log(err);
				});
		}
	}

	// status color class
	let statusColorClass = '';
	if (status.toLowerCase() === 'pending') {
		statusColorClass = 'text-my-yellow';
	} else if (status.toLowerCase() === 'approved') {
		statusColorClass = 'text-my-secondary';
	}

	return (
		<div className="destination-card bg-gray-200 group">
			<div className="image bg-gray-300 h-60 sm:h-52 overflow-hidden relative">
				<img src={orderItemDetail?.image} alt={orderItemDetail?.title} className="h-full w-full object-cover" />
			</div>
			<div className="px-2 py-4 md:p-4">
				<div className="flex flex-nowrap justify-between space-x-2">
					<div className="text-sm">
						<h3>{name}</h3>
						<p className="uppercase text-my-sm">{date}</p>
					</div>
					<div className="text-right text-xs font-bold">
						<p className={statusColorClass}>{status}</p>
					</div>
				</div>
				<div className="flex items-center justify-center text-center mt-4 space-x-2">
					{
						(status.toLowerCase() !== 'approved') && <button
							onClick={() => handleApproveOrder(_id)}
							className="btn-regular bg-my-secondary hover:bg-my-secondary-dark"
						>
							Approve
						</button>
					}
					<button
						onClick={() => handleCancelOrder(_id)}
						className="btn-regular bg-red-500 hover:bg-red-600"
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
};

export default ManageOrderCard;