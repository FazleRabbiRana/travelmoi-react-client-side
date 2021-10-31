import React, { useState } from 'react';
import { HiCog, HiMinus, HiOutlinePlus } from 'react-icons/hi';
import AddDestination from '../AddDestination/AddDestination';
import ManageOrders from '../ManageOrders/ManageOrders';
import RemoveDestination from '../RemoveDestination/RemoveDestination';

const AdminDashBoard = () => {
	const [control, setControl] = useState('manageAllOrders');

	// set dashboard menu active class
	const setActiveClass = controlName => {
		if (controlName.toLowerCase() === control.toLowerCase()) {
			return 'text-gray-500';
		}
	}

	return (
		<div id="admin_dashboard" className="py-6 md:py-8 lg:py-10">
			<div className="dashboard grid grid-cols-1 lg:grid-cols-12 gap-y-6 md:gap-y-8 lg:gap-4 2xl:gap-10">
				<div className="dashboard-menu bg-white p-4 md:py-6 xl:p-6 2xl:p-8 lg:col-span-3 2xl:col-span-3 xl:mr-4 2xl:mr-8 lg:min-h-screen-70">
					<h2 className="text-xl uppercase mb-6">Admin Dashboard</h2>
					<ul className="text space-y-3">
						<li>
							<button 
								onClick={() => setControl('manageAllOrders')}
								className="flex flex-nowrap items-center text-my-primary hover:text-my-primary-dark"
							>
								<HiCog className="block mr-2" />
								<span className={setActiveClass('manageAllOrders')}>Manage All Orders</span>
							</button>
						</li>
						<li>
							<button 
								onClick={() => setControl('addNewPackage')}
								className="flex flex-nowrap items-center text-my-primary hover:text-my-primary-dark"
							>
								<HiOutlinePlus className="block mr-2" />
								<span className={setActiveClass('addNewPackage')}>Add New Package</span>
							</button>
						</li>
						<li>
							<button 
								onClick={() => setControl('removePackage')}
								className="flex flex-nowrap items-center text-my-primary hover:text-my-primary-dark"
							>
								<HiMinus className="block mr-2" />
								<span className={setActiveClass('removePackage')}>Remove Package</span>
							</button>
						</li>
					</ul>
				</div>
				<div className="dashboard-content bg-white p-4 md:py-6 xl:p-6 2xl:p-8 lg:col-span-9 2xl:col-span-9">
					{control === 'manageAllOrders' && <ManageOrders />}
					{control === 'addNewPackage' && <AddDestination />}
					{control === 'removePackage' && <RemoveDestination />}
					{control === '' && <h2 className="text-xl uppercase mb-6">Dashboard Content</h2>}
				</div>
			</div>
		</div>
	);
};

export default AdminDashBoard;
