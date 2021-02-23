import React from 'react';

import { AuthContextProvider } from './context/auth/auth.context';
import { Routes } from './routes/routes';
import { GlobalStyles } from './styles/global';

function App() {
	return (
		<>
			<GlobalStyles />
			<AuthContextProvider>
				<Routes />
			</AuthContextProvider>
		</>
	);
}

export { App };
