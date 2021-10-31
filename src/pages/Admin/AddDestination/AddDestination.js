import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { HiCheck } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const AddDestination = () => {
	const [addSuccess, setAddSuccess] = useState(false);

	// default form values
	const defaultValues = {
		title: 'Louvre Museum',
		image: 'https://i.ibb.co/8zKt6nN/louvre-museum-paris.jpg',
		address: {
			city: 'Paris',
			country: 'France',
		},
		hotelType: '5 Star',
		minimumStay: '2 Nights',
		cost: {
			from: 700,
			average: 900,
		},
		securityDeposit: 600,
		about: 'The Louvre, or the Louvre Museum, is the world\'s most-visited museum and a historic monument in Paris, France. It is the home of many of the most known work of arts, including the Mona Lisa. A central landmark of the city, it is located on the Right Bank of the Seine in the city\'s 1st arrondissement.',
	}

	// handle add new package form submit
	const { register, handleSubmit, reset, formState: { errors } } = useForm({defaultValues});
	const onSubmit = data => {
		// console.log(data);
		
		// add new destination to the server
		axios
			.post('https://still-tor-10790.herokuapp.com/destinations', data)
			.then(res => {
				console.log(res);
				if (res.data.insertedId) {
					setAddSuccess(true);
					reset();
				}
			})
			.catch(err => {
				console.log(err);
			});
	};

	// required field default text
	const requiredFieldText = 'This field is required';

	return (
		<section id="add_destination">
			<h2 className="text-xl uppercase mb-6">Add New Package</h2>
			<div className="w-full md:w-4/5 lg:w-8/12">
				<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
					<input
						{...register('title', { required: true })}
						placeholder="Package title / Destination name *"
						className="bg-gray-100 px-4 h-10 text-gray-700 text-sm md:text-base"
					/>
					{errors.title && <span className="text-red-600 text-sm">{requiredFieldText}</span>}

					<input
						{...register('image')}
						placeholder="Image url"
						className="mt-4 bg-gray-100 px-4 h-10 text-gray-700 text-sm md:text-base"
					/>
					<span className="text-xs text-gray-400 px-2">Try this: https://i.ibb.co/8zKt6nN/louvre-museum-paris.jpg</span>

					<input
						{...register('address.city')}
						placeholder="City name"
						className="mt-4 bg-gray-100 px-4 h-10 text-gray-700 text-sm md:text-base"
					/>

					<input
						{...register('address.country', { required: true })}
						placeholder="Country name *"
						className="mt-4 bg-gray-100 px-4 h-10 text-gray-700 text-sm md:text-base"
					/>
					{errors.country && <span className="text-red-600 text-sm">{requiredFieldText}</span>}

					<input
						{...register('hotelType')}
						placeholder="Hotel type"
						className="mt-4 bg-gray-100 px-4 h-10 text-gray-700 text-sm md:text-base"
					/>

					<input
						{...register('minimumStay', { required: true })}
						placeholder="Minimum stay *"
						className="mt-4 bg-gray-100 px-4 h-10 text-gray-700 text-sm md:text-base"
					/>
					{errors.minimumStay && <span className="text-red-600 text-sm">{requiredFieldText}</span>}

					<input
						type="number"
						{...register('cost.from', { required: true, min: 100 })}
						placeholder="Cost starts from *"
						className="mt-4 bg-gray-100 px-4 h-10 text-gray-700 text-sm md:text-base"
					/>
					{errors.from && <span className="text-red-600 text-sm">{requiredFieldText}</span>}

					<input
						type="number"
						{...register('cost.average', { min: 100 })}
						placeholder="Average cost"
						className="mt-4 bg-gray-100 px-4 h-10 text-gray-700 text-sm md:text-base"
					/>

					<input
						type="number"
						{...register('securityDeposit', { required: true, min: 100 })}
						placeholder="Security deposit *"
						className="mt-4 bg-gray-100 px-4 h-10 text-gray-700 text-sm md:text-base"
					/>
					{errors.securityDeposit && <span className="text-red-600 text-sm">{requiredFieldText}</span>}

					<textarea 
						{...register('about')}
						placeholder="About the destination or package"
						className="mt-4 bg-gray-100 px-4 py-2 text-gray-700 text-sm md:text-base"
					></textarea>

					<div className="mt-6">
						{!addSuccess ? (
							<>
								<input
									type="submit"
									value="Add destination"
									className="btn-regular text-sm px-6"
								/>
								<input
									type="reset"
									value="Reset"
									className="btn-regular bg-my-yellow text-sm px-6 ml-4"
								/>
							</>
						) : (
							<p className="text-center font-bold text-my-secondary-dark flex items-center justify-center">
								<HiCheck className="text-2xl mr-2" /> Destination added successfully.
							</p>
						)}
					</div>
				</form>

				{addSuccess && (
					<div className="text-center mt-2 space-x-6">
						<Link
							to="/home"
							className="text-sm underline text-my-primary hover:text-my-primary-dark"
						>
							Back to Home
						</Link>
					</div>
				)}
			</div>
		</section>
	);
};

export default AddDestination;