import { useState, useEffect } from 'react';

export function useScreenSize(props) {
	const [screenSize, setScreenSize] = useState('');
	useEffect(() => {
		window.addEventListener('resize', () => {
			if (window.innerWidth < 900) setScreenSize('small');
			else setScreenSize('big');
		});
	});
	return screenSize;
}
