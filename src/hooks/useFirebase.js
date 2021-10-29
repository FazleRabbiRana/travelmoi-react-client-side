import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged  } from "firebase/auth";
import initializeFirebase from "../firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
	const [user, setUser] = useState({});
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

	// handle offCanvas toggle
	const handleOffCanvasToggle = () => {
		setOffCanvasOpen(!offCanvasOpen);
	}

	return {
		signInUsingGoogle,
		logOut,
		setUser,
		user,
		setIsLoading,
		isLoading,
		handleOffCanvasToggle,
		setOffCanvasOpen,
		offCanvasOpen,
	}
}

export default useFirebase;