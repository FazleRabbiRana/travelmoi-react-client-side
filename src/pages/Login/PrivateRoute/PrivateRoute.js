import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useMyAuthContexts from '../../../hooks/useMyAuthContexts';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';

const PrivateRoute = ({ children, ...rest }) => {
	const { user, isLoading } = useMyAuthContexts();

	if (isLoading) {
		return <LoadingSpinner />
	}

	return (
		<Route 
			{...rest}
			render={({ location }) => 
				user.email ? (
					children
				) : (
					<Redirect 
						to={{
							pathname: '/login',
							state: { from: location }
						}}
					/>
				)
			}
		/>
	);
};

export default PrivateRoute;
