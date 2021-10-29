import React from 'react';
import useMyAuthContexts from '../../../hooks/useMyAuthContexts';
import { FcGoogle } from 'react-icons/fc';
import { useLocation, useHistory } from 'react-router-dom';

const Login = () => {
	const { setIsLoading, signInUsingGoogle, setUser, user } = useMyAuthContexts();

	const location = useLocation();
	const history = useHistory();
	const redirect_uri = location.state?.from || '/home';

	// handle google sign in
	const handleGoogleSignIn = () => {
		setIsLoading(true);
		signInUsingGoogle()
			.then(result => {
				console.log(result.user);
				setUser(result.user);
				history.push(redirect_uri);
			})
			.catch(error => {
				console.log(error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}

	return (
		<section className="py-10 lg:py-12">
			<div className="max-w-clear sm:max-w-sm md:max-w-md mx-auto bg-white text-center px-4 py-10 lg:py-12">
				<h2 className="text-2xl">Login with</h2>
				<div className="mt-10 mb-2">
					{!user.email ? (
						<button
							onClick={handleGoogleSignIn}
							className="w-60 max-w-clear mx-auto border border-gray-300 bg-my-secondary text-white hover:bg-my-secondary-dark flex items-center"
						>
							<span className="flex-shrink-0 inline-block px-2 py-2 bg-gray-300 text-3xl">
								<FcGoogle />
							</span>
							<span className="flex-auto text-center text-xl font-bold">
								Google
							</span>
						</button>
					) : (
						<h4 className="text-xl text-green-600">Currently logged in !</h4>
					)}
				</div>
			</div>
		</section>
	);
};

export default Login;