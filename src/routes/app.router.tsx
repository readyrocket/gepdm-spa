import React, { memo } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { Loading } from '../components/Loading';
import { useAuthContext } from '../context/auth/useAuthContext';

const AppPrivateRoutes: React.FC<any> = ({ component: Component, ...rest }) => {
	const { signed, loading } = useAuthContext();

	if (loading) return <Loading />;

	return (
		<>
			<Route
				{...rest}
				render={(props) => (signed === true ? (
					<Component {...props} />
				) : (
					<Redirect to={{ pathname: `/`, state: props.location }} />
				))
				}
			/>
		</>
	);
};

export default memo(AppPrivateRoutes);
