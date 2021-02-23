import React from 'react';

const Wave = (props: any) => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
		<path
			fill="#f3f3f4"
			fillOpacity="1"
			d="M0,64L120,85.3C240,107,480,149,720,149.3C960,149,
		1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,
		960,320,720,320C480,320,240,320,120,320L0,320Z"
		/>
	</svg>
);

export { Wave };
