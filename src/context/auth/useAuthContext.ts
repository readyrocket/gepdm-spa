import { useContext } from 'react';

import { AuthContext } from './auth.context';
import { AuthContextData } from './auth.type';

export const useAuthContext = (): AuthContextData => {
	const { signed, loading, SignIn, SignOut } = useContext(AuthContext);
	return { signed, loading, SignIn, SignOut };
};
