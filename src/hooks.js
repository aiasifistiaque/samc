import { useEffect, useRef, useState } from 'react';

const isClient = typeof window === 'object';

export const useParallax = () => {
	const [scroll, setScroll] = useState(window.pageYOffset);
	//const initialMargin = -10;
	useEffect(() => {
		window.addEventListener('scroll', () => {
			setScroll(window.pageYOffset);
		});
	}, [scroll]);
	return scroll === 0 ? -100 : -100 + scroll * -1;
};

export function useSize() {
	const [screenSize, setScreenSize] = useState(
		window.innerWidth >= 992
			? 'extraLarge'
			: window.innerWidth > 785
			? 'large'
			: window.innerWidth > 600
			? 'medium'
			: window.innerWidth >= 600
			? 'small'
			: 'none'
	);
	useEffect(() => {
		window.addEventListener('resize', () => {
			if (window.innerWidth >= 992) setScreenSize('extraLarge');
			else if (window.innerWidth > 768) setScreenSize('large');
			else if (window.innerWidth > 600) setScreenSize('medium');
			else if (window.innerWidth <= 600) setScreenSize('small');
		});
	});
	return screenSize;
}

export const useWindowScroll = () => {
	const frame = useRef(0);
	const [state, setState] = useState({
		x: isClient ? window.pageXOffset : 0,
		y: isClient ? window.pageYOffset : 0,
	});

	useEffect(() => {
		function handler() {
			cancelAnimationFrame(frame.current);
			frame.current = requestAnimationFrame(() => {
				setState({
					x: window.pageXOffset,
					y: window.pageYOffset,
				});
			});
		}

		window.addEventListener('scroll', handler, {
			capture: false,
			passive: true,
		});

		return () => {
			cancelAnimationFrame(frame.current);
			window.removeEventListener('scroll', handler);
		};
	}, []);

	return state;
};
