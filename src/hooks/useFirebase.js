import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged  } from "firebase/auth";
import initializeFirebase from "../firebase/firebase.init";
import { useLocation } from "react-router-dom";

initializeFirebase();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [isAdminChecked, setIsAdminChecked] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [offCanvasOpen, setOffCanvasOpen] = useState(false);

	const auth = getAuth();
	const googleProvider = new GoogleAuthProvider();

	// handle sign in using google
	const signInUsingGoogle = () => {
		return signInWithPopup(auth, googleProvider);
	}

	// observe user auth status
	useEffect(() => {
		const unsubscribed = onAuthStateChanged(auth, user => {
			if (user) {
				setUser(user);
			} else {
				setUser({});
			}
			setIsLoading(false);
		});
		return () => unsubscribed;
	}, []);

	// logout function
	const logOut = () => {
		setIsLoading(true);
		signOut(auth)
			.then(() => {
				setUser({});
			})
			.catch(error => {
				console.log(error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	// toggle admin checked
	// const toggleAdminChecked = () => {
	// 	setIsAdminChecked(!isAdminChecked);
	// }

	// handle offCanvas toggle
	const handleOffCanvasToggle = () => {
		setOffCanvasOpen(!offCanvasOpen);
	}

	// close offCanvas on route change
	const location = useLocation();
	useEffect(() => {
		setOffCanvasOpen(false);
	}, [location]);

	return {
		signInUsingGoogle,
		logOut,
		setUser,
		user,
		setIsLoading,
		isLoading,
		// toggleAdminChecked,
		setIsAdminChecked,
		isAdminChecked,
		handleOffCanvasToggle,
		setOffCanvasOpen,
		offCanvasOpen,
	}
}

export default useFirebase;