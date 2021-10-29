import React from 'react';

const FeatureCard = ({ feature }) => {
	const { title, description, image } = feature;

	return (
		<div className="feature-card bg-white">
			<div className="image bg-gray-300 h-40 overflow-hidden relative">
				<div className="absolute inset-0 bg-my-secondary-dark opacity-30"></div>
				<img src={image} alt={title} className="h-full w-full object-cover" />
			</div>
			<div className="p-4 lg:px-5 lg:py-6">
				<h3 className="text-xl font-normal">{title}</h3>
				<p className="mt-3 mb-1 text-sm leading-relaxed">{description}</p>
			</div>
		</div>
	);
};

export default FeatureCard;