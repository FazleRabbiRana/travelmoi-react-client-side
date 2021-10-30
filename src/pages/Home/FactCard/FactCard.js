import React from 'react';

const FactCard = ({ fact }) => {
	const { title, image, description } = fact;
	return (
		<div className="fact-card bg-white lg:flex">
			<div className="image flex-shrink-0 bg-gray-300 h-48 lg:h-full lg:w-64 lg:max-w-half overflow-hidden relative">
				<img src={image} alt={title} className="h-full w-full object-cover" />
			</div>
			<div className="flex-auto p-4 lg:py-6 xl:p-8">
				<h3 className="uppercase text-base font-normal">{title}</h3>
				<p className="mt-2 mb-1 text-my-md xl:text-sm leading-relaxed md:leading-relaxed xl:leading-relaxed">{description}</p>
			</div>
		</div>
	);
};

export default FactCard;