import React, { createContext, useEffect, useMemo, useState } from 'react';

import { TResponse } from '../../@types/request.type';
import { api } from '../../services/api';
import TokenGenerate from '../../utils/auth_gen_token';
import { AuthContextData, ContextProps } from './auth.type';


const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

/**
 * @param children is an React.Node components that are below the
 * provider and will use the signin and signout functions
 *
 * @Component | @useEffect |> verify if user is sigin on loading page
 * @Component | @SignIn |> will signin the user
 * @Component | @SignOut |> will signout the user
 */

const AuthContextProvider: React.FC<ContextProps> = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [isValidtoken, setValidToken] = useState(false);

	useEffect(() => {
		const checkValidateUser = async () => {
			try {
				const authToken: string = localStorage
					.getItem(`Deliverfy@token`) as string;

				if (authToken) {
					const response = await api.get(`/home`, {
						headers: {
							Authorization: TokenGenerate.generate(authToken),
						},
					});

					if (response.status === 202) {
						setValidToken(true);
						api.defaults.headers.Authorization = TokenGenerate.generate(
							authToken,
						);
					}
				}
			} catch (e) {
				SignOut();
			} finally {
				setLoading(false);
			}
		};
		checkValidateUser();
	}, []);

	const SignIn = async (email: string, password: string) => {
		try {
			const response: TResponse = await api
				.post(`/login`, {
					email,
					password,
				});

			if (response.status === 202) {
				const jwtToken: string = response?.data?.token;

				setValidToken(true);

				api.defaults.headers.Authorization = TokenGenerate.generate(
					jwtToken,
				);

				const tokenfy = JSON.stringify(jwtToken);

				localStorage.setItem(`Deliverfy@token`, JSON.parse(tokenfy));
				return response;
			}

			throw { response };

		} catch (error) {
			const response = error?.response;
			throw { response };
		} finally {
			setLoading(false);
		}
	};

	const SignOut = async () => {
		localStorage.removeItem(`Deliverfy@token`);
		api.defaults.headers.Authorization = undefined;
	};

	const values = useMemo(() => (
		{
			signed: isValidtoken,
			loading,
			SignIn,
			SignOut,
		}
	), [isValidtoken, loading]);

	return (
		<AuthContext.Provider
			value={values}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthContextProvider };
