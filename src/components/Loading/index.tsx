import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import React from 'react';

import { LoadingWrapper } from './styles';

const Loading = () => {
	const loadingIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

	return (
		<LoadingWrapper>
			<Spin
				className="s-loadin-spin"
				size="large"
				spinning
				indicator={loadingIcon}
			/>
		</LoadingWrapper>
	);
};

export {Loading};
