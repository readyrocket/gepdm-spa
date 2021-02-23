import React from 'react';

import { IconTabler } from './styles';

type OpenButtonBar = {
	openButtonBar: {
		className: `open` | `close`
	}
}

const OpenButton: React.FC<OpenButtonBar> = (
	{ openButtonBar: { className = `open` } }
) => {
	const hasOpenNavBar = className === `close` ? `close` : `open`;
	return (
		<IconTabler>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className={`${hasOpenNavBar} icon-tabler`}
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
				<line x1="4" y1="8" x2="20" y2="8" />
				<line className="icon-tabler-line2" x1="4" y1="16" x2="20" y2="16" />
			</svg>
		</IconTabler>
	);
};

export { OpenButton };
