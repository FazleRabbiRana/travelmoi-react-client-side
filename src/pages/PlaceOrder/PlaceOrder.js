import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import { SRLWrapper } from "simple-react-lightbox";
import { FaSearchPlus } from 'react-icons/fa';
import { HiCheck } from 'react-icons/hi';
import useMyAuthContexts from '../../hooks/useMyAuthContexts';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PlaceOrder = () => {
	const { itemId } = useParams();
	const [item, setItem] = useState({});
	const [orderSuccess, setOrderSuccess] = useState(false);
	const { user } = useMyAuthContexts();

	// load clicked item
	useEffect(() => {
		const url = `https://still-tor-10790.herokuapp.com/destinations/${itemId}`;
		fetch(url)
			.then(res => res.json())
			.then(data => {
				// console.log(data);
				setItem(data);
			})
			.catch(err => {
				console.log(err);
			});
	}, [itemId]);

	const { title, address, hotelType, minimumStay, cost, securityDeposit, image, about } = item;
	
	// handle place order form submit
	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = data => {
		// console.log(data);
		// const order = {...item};
		const itemName = item?.title;
		const itemId = item?._id;
		data.orderedItem = {itemName, itemId};
		data.status = 'Pending';

		// post order to the server
		axios
			.post('https://still-tor-10790.herokuapp.com/orders', data)
			.then(res => {
				// console.log(res);
				if (res.data.insertedId) {
					setOrderSuccess(true);
				}
			})
			.catch(err => {
				console.log(err);
			});
	};

	// disable past dates on date input
	const disablePastDate = () => {
		const today = new Date();
		const dd = String(today.getDate()).padStart(2, "0");
		const mm = String(today.getMonth() + 1).padStart(2, "0");
		const yyyy = today.getFullYear();
		return yyyy + "-" + mm + "-" + dd;
	};

	// lightbox options
	const lightboxOptions = {
		settings: {
			disableKeyboardControls: true,
			disableWheelControls: true,
		},
		buttons: {
			showAutoplayButton: false,
			showNextButton: false,
      showPrevButton: false,
		},
		thumbnails: {
			showThumbnails: false,
		}
	}

	return (
		<div className="py-10 lg:py-14">
			<section id="package_description">
				<div className="container">
					<h2 className="text-left text-lg font-normal lg:text-xl mb-4">
						{title} Package Details
					</h2>
					<div className="bg-white p-3 md:p-6">
						<div className="flex flex-col-reverse md:flex-row md:space-x-6">
							<div className="flex-shrink-0 bg-gray-100 p-2 md:p-4 lg:px-6 mt-3 md:mt-0 lg:w-2/5">
								<table className="table-auto text-left uppercase font-normal text-gray-700 text-my-xs sm:text-xs lg:text-sm">
									<tbody>
										<tr>
											<th className="text-my-primary font-normal py-2 pr-1">
												City
											</th>
											<td>&#58;&nbsp; {address?.city}</td>
										</tr>
										<tr>
											<th className="text-my-primary font-normal py-2 pr-1">
												Country
											</th>
											<td>&#58;&nbsp; {address?.country}</td>
										</tr>
										<tr>
											<th className="text-my-primary font-normal py-2 pr-1">
												Minimum stay
											</th>
											<td>&#58;&nbsp; {minimumStay}</td>
										</tr>
										<tr>
											<th className="text-my-primary font-normal py-2 pr-1">
												Hotel type
											</th>
											<td>&#58;&nbsp; {hotelType}</td>
										</tr>
										<tr>
											<th className="text-my-primary font-normal py-2 pr-1">
												Average cost
											</th>
											<td>&#58;&nbsp; &#36;{cost?.average}</td>
										</tr>
										<tr>
											<th className="text-my-primary font-normal py-2 pr-1">
												Security Deposit
											</th>
											<td>&#58;&nbsp; &#36;{securityDeposit}</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="image flex-auto bg-gray-100 overflow-hidden relative group">
								<SRLWrapper
									options={lightboxOptions}
									className="image bg-gray-300 overflow-hidden relative"
								>
									<a href={image}>
										<img
											src={image}
											alt={title}
											className="h-full w-full object-cover"
										/>
									</a>
									<span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none bg-my-gradient-radial p-12 rounded-full opacity-0 duration-300 group-hover:opacity-100">
										<FaSearchPlus className="text-3xl text-white" />
									</span>
								</SRLWrapper>
							</div>
						</div>
						<div>
							<p className="mt-2 md:mt-6 text-my-sm lg:text-sm leading-relaxed lg:leading-relaxed max-w-3xl mx-auto">{about}</p>
						</div>
					</div>
				</div>
			</section>

			<section
				id="place_order"
				className="mt-12 max-w-clear sm:max-w-lg md:max-w-xl mx-auto bg-white px-4 sm:px-8 lg:px-12 py-6"
			>
				<h2 className="text-center text-xl lg:text-2xl mb-6 lg:mb-8">
					Place Order
				</h2>
				<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
					<input
						readOnly
						value={user.displayName}
						{...register('name', { required: true })}
						placeholder="Name"
						className="bg-gray-100 px-4 h-10 text-gray-700"
					/>
					<input
						readOnly
						type="email"
						value={user.email}
						{...register('email', { required: true })}
						placeholder="Email"
						className="mt-6 bg-gray-100 px-4 h-10 text-gray-700"
					/>
					<input
						type="date"
						min={disablePastDate()}
						{...register('date', { required: true })}
						placeholder="date"
						className="mt-6 bg-gray-100 px-4 h-10 text-gray-700"
					/>
					{errors.date && (
						<span className="text-red-600 text-sm">This field is required</span>
					)}

					<div className="mt-6 text-center">
						{!orderSuccess ? (
							<input
								type="submit"
								value="Confirm order"
								className="btn-regular text-sm px-6"
							/>
						) : (
							<p className="text-center font-bold text-my-secondary-dark flex items-center justify-center">
								<HiCheck className="text-2xl mr-2" /> Order placed successfully.
							</p>
						)}
					</div>
				</form>
				{
					orderSuccess && <div className="text-center mt-2">
						<Link to='/home' className="text-sm underline text-my-primary hover:text-my-primary-dark">Back to Home</Link>
					</div>
				}
			</section>
		</div>
	);
};

export default PlaceOrder;
