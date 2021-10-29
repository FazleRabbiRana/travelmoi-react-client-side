import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const MyAuthContexts = createContext();

const MyAuthProvider = ({ children }) => {
	const authContexts = useFirebase();

	return (
		<MyAuthContexts.Provider value={authContexts}>
			{children}
		</MyAuthContexts.Provider>
	);
};

export default MyAuthProvider;