import React, { useState } from 'react';
import useMyAuthContexts from '../../../hooks/useMyAuthContexts';
import { HiCog, HiOutlinePlus } from 'react-icons/hi';
import ManageOrders from '../ManageOrders/ManageOrders';

const AdminDashBoard = () => {
	const { user, setIsAdminChecked, isAdminChecked } = useMyAuthContexts();
	// const [control, setControl] = useState('');

	// handle set admin
	const handleToggleAdminChecked = e => {
		const value = e.target.checked;
		setIsAdminChecked(value);
	};

	return (
		<div id="admin_dashboard" className="pb-6 md:pb-8 lg:pb-10">
			<div className="dashboard-heading container text-center py-6 md:py-8">
				<div className="flex flex-nowrap items-center justify-center space-x-2 text-left sm:text-lg">
					<input
						onChange={handleToggleAdminChecked}
						type="checkbox"
						id="admin_role"
						className="transform scale-150"
					/>
					<label htmlFor="admin_role" className="text-my-primary-dark">
						Is Admin?
					</label>
				</div>
			</div>

			{(user.email && isAdminChecked) && (
				<div className="dashboard grid grid-cols-1 lg:grid-cols-12 gap-y-6 mg:gap-y-8 lg:gap-4 2xl:gap-12">
					<div className="dashboard-menu bg-white p-4 md:py-6 xl:p-6 2xl:p-8 lg:col-span-3 2xl:col-span-2 xl:mr-6 2xl:mr-0 lg:min-h-screen-70">
						<h2 className="text-xl uppercase mb-6">Admin Dashboard</h2>
						<ul className="text space-y-3">
							<li>
								<button className="flex flex-nowrap items-center text-my-primary hover:text-my-primary-dark">
									<HiCog className="block mr-2" />
									Manage All Orders
								</button>
							</li>
							<li>
								<button className="flex flex-nowrap items-center text-my-primary hover:text-my-primary-dark">
									<HiOutlinePlus className="block mr-2" />
									Add New Package
								</button>
							</li>
						</ul>
					</div>
					<div className="dashboard-content bg-white p-4 md:py-6 xl:p-6 2xl:p-8 lg:col-span-9 2xl:col-span-10">
						<h2 className="text-xl uppercase mb-6">Dashboard Content</h2>
						<ManageOrders />
					</div>
				</div>
			)}
		</div>
	);
};

export default AdminDashBoard;
