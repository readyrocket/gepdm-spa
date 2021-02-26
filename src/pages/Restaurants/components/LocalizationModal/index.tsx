import 'antd/dist/antd.css';

import { Divider, Modal } from 'antd';
import React, { FC } from 'react';

import { Location } from './styles';

const LocalizationModal: FC<any> = ({ visible, handleCancel }) => {
	console.log(visible, handleCancel);
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

				<Location.with.Input />

				<Divider>
					<Location.with.Label>ou</Location.with.Label>
				</Divider>

				<Location.with.Button type="button">
					Buscar do dispositivo
				</Location.with.Button>

			</Location.layout.Container>
		</Modal>
	);
};

export { LocalizationModal };
