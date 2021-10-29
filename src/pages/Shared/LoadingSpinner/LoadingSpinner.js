import React from 'react';
import { ImSpinner9 } from 'react-icons/im';

const LoadingSpinner = () => {
	return (
		<div className="flex items-center justify-center text-center py-6">
			<div className="inline-flex items-center px-8 py-3 bg-my-secondary-dark text-white">
				<ImSpinner9 className="text-xl animate-spin" />
				<span className="text-lg ml-4">Loading...</span>
			</div>
		</div>
		// <div className="flex items-center justify-center text-center p-6 fixed top-0 inset-0 bg-black bg-opacity-70 z-50">
		// 	<div className="inline-flex items-center px-8 py-3 bg-my-secondary-dark text-white">
		// 		<ImSpinner9 className="text-xl animate-spin" />
		// 		<span className="text-lg ml-4">Loading...</span>
		// 	</div>
		// </div>
	);
};

export default LoadingSpinner;