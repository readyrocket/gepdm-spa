import React from 'react';

import { IconTabler } from './styles';

type CloseButtonBar = {
	closeButtonBar: {
		className: `open` | `close`
	}
}

const CloseButton: React.FC<CloseButtonBar> = (
	{ closeButtonBar: { className = `close` } }
) => {
	const hasOpenButton = className === `open` ? `close` : `open`;
	return (
		<IconTabler>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className={`${hasOpenButton} icon-tabler`}
				width="38"
				height="38"
				viewBox="0 0 24 24"
				strokeWidth="1.5"
				stroke="#fd0061"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<line x1="18" y1="6" x2="6" y2="18" />
				<line x1="6" y1="6" x2="18" y2="18" />
			</svg>
		</IconTabler>
	);
};

export { CloseButton };
