import { useEffect, useState } from 'react';

export function useScroll(): {
  scrollY: number,
  scrollX: number,
  scrollDirection: string,
  } {
	const [lastScrollTop, setLastScrollTop] = useState(0);
	const [bodyOffset, setBodyOffset] = useState(
		document.body.getBoundingClientRect()
	);
	const [scrollY, setScrollY] = useState(bodyOffset.top);
	const [scrollX, setScrollX] = useState(bodyOffset.left);
	const [scrollDirection, setScrollDirection] = useState(`down`);

	const listener = (e: Event) => {
		setBodyOffset(document.body.getBoundingClientRect());
		setScrollY(-bodyOffset.top);
		setScrollX(bodyOffset.left);
		setScrollDirection(lastScrollTop > -bodyOffset.top ? `down` : `up`);
		setLastScrollTop(-bodyOffset.top);
	};

	useEffect(() => {
		window.addEventListener(`scroll`, listener);
		return () => {
			window.removeEventListener(`scroll`, listener);
		};
	});

	return {
		scrollY,
		scrollX,
		scrollDirection,
	};
}
