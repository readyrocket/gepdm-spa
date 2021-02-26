import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Restaurant } from '../../@types/Homescreen';
import { LocalizationModal } from '../../components/LocalizationModal';
import RestaurantList from '../../components/RestaurantList';
import { useScroll } from '../../hooks/useScroll';
import { DATA } from './data';
import { Screen } from './styles';

const Restaurants = () => {
	const [cep, setCep] = useState(``);
	const [data, setData] = useState<Restaurant[]>([]);
	const [isModalVisible, setModalVisible] = useState(false);
	const { scrollY } = useScroll();

	const handleFormSubmit = (event: ChangeEvent<HTMLFormElement>) => {
		event?.preventDefault();
		setData(DATA);
		setCep(event?.target?.value);
	};

	useEffect(() => {
		handleShowModalLocalization();

		const header = document.querySelector(`.header`);
		if (scrollY >= 90) header?.classList.add(`nav-fixed`);

		return () => {
			header?.classList.remove(`nav-fixed`);
			handleCancelModalSigIn();
		};
	}, [scrollY]);

	const handleShowModalLocalization = () => {
		setModalVisible((state) => !state);
	};

	const handleCancelModalSigIn = () => {
		setModalVisible(false);
	};

	return (
		<Screen.layout.Container>

			<Screen.layout.Header>
				<nav>
					<h1>Delivery Push</h1>
					<div className="nav-items">
						<Link to="/" title="menu">
							Menu
						</Link>
						<Link to="/" title="serviços">
							Serviços
						</Link>
						<Link to="/" title="contato">
							Contato
						</Link>
					</div>
				</nav>
			</Screen.layout.Header>

			<LocalizationModal visible={isModalVisible} handleCancel={handleCancelModalSigIn} />

			<Screen.layout.Content>
				<div>
					<h1>
						Encontre um <span>restaurante</span>
					</h1>
					<p>
						Sua comida
						<strong>
							<span>preferida</span>
						</strong>
						{` `}
						por
						<strong>
							<span>delivery</span>
						</strong>
						{` `},<span>encontre</span> um
						<span>resturante</span> próximo em apenas um
						<strong>
							<span>click</span>
						</strong>
						.
					</p>
				</div>

				<Screen.layout.Form onSubmit={handleFormSubmit}>
					<input placeholder="99680-000" />
					<button type="submit">Buscar</button>
				</Screen.layout.Form>
			</Screen.layout.Content>

			<Screen.layout.RestaurantList>
				<Screen.with.Restaurant>
					{data[0] ? (
						data?.map((restaurant) => (
							<div>
								<RestaurantList key={restaurant.id} restaurant={restaurant} />
							</div>
						))
					) : (
						<h1 style={{ fontSize: 30, color: `#FF5C29` }}>
							Procure por restaurantes
						</h1>
					)}
				</Screen.with.Restaurant>

			</Screen.layout.RestaurantList>

		</Screen.layout.Container>
	);
};

export default Restaurants;
