import { useState, useEffect } from 'react';

export function useStyle(props, obj) {
	const [styleClass, setStyleClass] = useState('');

	//for all the properties in a single object
	const singleStyleClass = (val, obj) => {
		let className = '';
		Object.keys(obj).forEach(key => {
			if (key === val) className = obj[key];
		});
		return className;
	};

	useEffect(() => {
		let className = '';
		Object.keys(props).forEach(
			prop => (className = className + ' ' + singleStyleClass(prop, obj))
		);
		const finalString = className.trim().replace(/  +/g, ' ');
		if (finalString.length < 1) setStyleClass(obj.default || '');
		else setStyleClass(finalString);
	}, []);
	return styleClass;
}
