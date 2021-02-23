import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Loading } from '../components/Loading';
import AppPrivateRoutes from './app.router';

const Restaurants = lazy(() => import(`../pages/Restaurants`));

const Landing = lazy(() => import(`../pages/Landing`));

const Routes = () => (
	<BrowserRouter>
		<Suspense fallback={<Loading/>}>
			<Switch>
				<Route exact path="/" component={Landing} />
				<AppPrivateRoutes to="/home" component={Restaurants} />
				<AppPrivateRoutes to="/restaurants" component={Restaurants} />
			</Switch>
		</Suspense>
	</BrowserRouter>
);

export { Routes };
