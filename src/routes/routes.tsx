import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Loading } from '../components/Loading';
import AppPrivateRoutes from './app.router';

const Homescreen = lazy(() => import(`../pages/Home`));

const Landing = lazy(() => import(`../pages/Landing`));

const Error = () => <h1>404: not found</h1>;

const Routes = () => (
	<BrowserRouter>
		<Suspense fallback={<Loading />}>
			<Switch>
				<Route exact path="/" component={Landing} />
				<AppPrivateRoutes path="/home" component={Homescreen} />
				<AppPrivateRoutes path="/restaurants" component={Homescreen} />
				<Route path="*" component={Error} />
			</Switch>
		</Suspense>
	</BrowserRouter>
);

export { Routes };
