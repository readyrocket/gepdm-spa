import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';
import { TRestaurant } from './types';


const RestaurantList = ({ restaurant }: TRestaurant) => (
	<S.RestaurandCard>
		<S.RestaurandCardItem>
			<img
				src={restaurant.profile}
				title={`profile restaurant ${restaurant.name}`}
				alt={`profile restaurant ${restaurant.name}`} />
			<S.RestaurantCardDescriptionWrapper>
				<Link to="/">{restaurant.name}</Link>
				<p>{restaurant.description}</p>
				<S.RestaurantInformaions>
					<S.NumberStars>{restaurant.stars}</S.NumberStars>
					<div>
						<h1>Stars</h1>
					</div>
					<div className="isOpen">
						<span>{restaurant.open}</span>
					</div>
				</S.RestaurantInformaions>
			</S.RestaurantCardDescriptionWrapper>
		</S.RestaurandCardItem>
		<S.RestaurantLink to="/">
			<h1>Arrow</h1>
		</S.RestaurantLink>
	</S.RestaurandCard>
);

export default memo(RestaurantList);
