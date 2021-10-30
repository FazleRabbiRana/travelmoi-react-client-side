import React from 'react';
import { Link } from 'react-router-dom';
import { SRLWrapper } from "simple-react-lightbox";
import { FaSearchPlus } from 'react-icons/fa';

const DestinationCard = ({ destination }) => {
	const { _id, title, image, address, cost } =  destination;

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
		<div className="destination-card bg-gray-200 group">
			<div className="image bg-gray-300 h-60 sm:h-52 overflow-hidden relative">
				<SRLWrapper options={lightboxOptions} className="image bg-gray-300 h-60 sm:h-52 overflow-hidden relative">
					<a href={image}>
						<img src={image} alt={title} className="h-full w-full object-cover" />
					</a>
					<span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none bg-my-gradient-radial p-12 rounded-full opacity-0 duration-300 group-hover:opacity-100">
						<FaSearchPlus className="text-3xl text-white" />
					</span>
				</SRLWrapper>
			</div>
			{/* <div className="image bg-gray-300 h-60 sm:h-52 overflow-hidden relative">
				<div className="absolute inset-0 bg-my-secondary-dark opacity-30"></div>
				<img src={image} alt={title} className="h-full w-full object-cover" />
			</div> */}
			<div className="px-2 py-4 md:p-4">
				<div className="flex flex-nowrap justify-between">
					<div>
						<h3 className="text-base">{title}</h3>
						<p className="uppercase text-xs">{address?.country}</p>
					</div>
					<div className="uppercase text-right">
						<p className="text-xs leading-normal">From</p>
						<h4 className="text-xl leading-none tracking-wider text-my-secondary-dark">&#36;{cost?.from}</h4>
					</div>
				</div>
				<div className="text-center mt-6">
					<Link to={`/destinations/${_id}`} className="btn-regular">
						Book Now
					</Link>
				</div>
			</div>
		</div>
	);
};

export default DestinationCard;