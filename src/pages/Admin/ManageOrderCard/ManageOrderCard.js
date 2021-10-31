import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageOrderCard = ({ order, setAllOrders, allOrders }) => {
	// console.log(order);
	const { _id, name, date, status, orderedItem } = order;
	const [orderItemDetail, setOrderItemDetail] = useState({});
	// const [isApproved, setIsApproved] = useState(false);

	// load the order item detail
	useEffect(() => {
		const url = `https://still-tor-10790.herokuapp.com/destinations/${orderedItem?.itemId}`;
		fetch(url)
			.then(res => res.json())
			.then(data => {
				console.log(data);
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
					// const updatedOrders = {...allOrders};
					// console.log(updatedOrders);
					// setAllOrders(updatedOrders);
					console.log('updated');
					window.location.reload();
				}
			})
	}

	// handle cancel order
	const handleCancelOrder = id => {
		const url = `https://still-tor-10790.herokuapp.com/orders/${id}`;
		const proceed = window.confirm('Order will be Cancelled. Proceed?');
		if (proceed) {
			axios
				.delete(url)
				.then(res => {
					console.log(res);
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
				<img src={orderItemDetail.image} alt={orderItemDetail.title} className="h-full w-full object-cover" />
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
					{/* {
						status.toLowerCase() === 'approved' ? <p className="inline-block text-xs uppercase font-bold p-2 text-my-secondary-dark">
							Approved
						</p> : <button
							onClick={() => handleApproveOrder(_id)}
							className="btn-regular bg-my-secondary hover:bg-my-secondary-dark"
						>
							Approve
						</button>
					} */}
					{
						status.toLowerCase() !== 'approved' && <button
							onClick={() => handleApproveOrder(_id)}
							className="btn-regular bg-my-secondary hover:bg-my-secondary-dark"
						>
							Approve
						</button>
					}
					{/* <button
						onClick={() => handleApproveOrder(_id)}
						className="btn-regular bg-my-secondary hover:bg-my-secondary-dark"
					>
						Approve
					</button> */}
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