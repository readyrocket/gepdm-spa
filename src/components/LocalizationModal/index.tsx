/* eslint-disable max-len */
import 'antd/dist/antd.css';
import 'react-toastify/dist/ReactToastify.css';

import { Divider, Modal } from 'antd';
import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';

import { AppProps, Position, UserPositon } from '../../@types/LocalizationModal';
import { ERROR_GET_POSITION, SUCCESS_GET_POSITION, UNSUPPORTED_GEOLOCATION } from '../../utils/user.messages';
import { showToastfy } from '../Toastfy';
import { Location } from './styles';

const LocalizationModal = ({ visible, handleCancel }: AppProps) => {
	const [userPosition, setUserPosition] = useState<UserPositon>({} as UserPositon);

	const handleSearchLocation = (event: ChangeEvent<HTMLInputElement>) => {
		console.log(event.currentTarget.value);
	};

	const handleGetLocation = () => {
		const sucess = (position: Position) => {
			const { coords } = Object(position);

			setUserPosition(coords);

			localStorage.setItem(`hasLocation`, `true`);

			showToastfy(SUCCESS_GET_POSITION).sucess();
		};

		const error = () => showToastfy(ERROR_GET_POSITION).error();

		const geolocation = navigator?.geolocation;

		if (!geolocation) {
			showToastfy(UNSUPPORTED_GEOLOCATION).warning();
			return;
		}

		geolocation.getCurrentPosition(
			sucess,
			error,
			{
				enableHighAccuracy: true,
			}
		);
	};

	useEffect(() => {
		const hasLocation = localStorage.getItem(`hasLocation`);

		if (hasLocation) {
			handleCancel();
		}
	}, [handleCancel]);

	return (
		<Modal
			visible={visible}
			onCancel={handleCancel}
			centered
			footer={null}
			destroyOnClose
		>
			<Location.layout.Container>

				<Location.with.Title>
					Para receber seu pedido,
					<p>precisamos da sua localização</p>
				</Location.with.Title>

				<Location.with.Input onChange={handleSearchLocation} />
				<ToastContainer />

				<Divider>
					<Location.with.Label>ou</Location.with.Label>
				</Divider>

				<Location.with.Button type="button" onClick={handleGetLocation}>
					Buscar do dispositivo
				</Location.with.Button>

			</Location.layout.Container>
		</Modal>
	);
};

export { LocalizationModal };
