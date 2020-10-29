import React from 'react';
import { colors } from '../constants';

export const SamcBackgroundImage = ({ src, children }) => {
	return (
		<div
			style={{
				backgroundImage: `url(${src})`,
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundPosition: 'center',
				backgroundSize: 'cover',
			}}>
			{children}
		</div>
	);
};

export const SamcMainContainer = ({ bg, children }) => {
	const bkg = bg === 'light' ? 'img-bg-light' : 'img-bg';
	return <div className={`${bkg} blur`}>{children}</div>;
};

export const SamcContentHeader = ({ children }) => {
	return (
		<h2
			className='c-image-text-light'
			style={{
				alignSelf: 'center',
				fontSize: 60,
				fontWeight: 700,
				color: colors.main,
				fontWeight: 500,
				marginBottom: 20,
			}}>
			<center>{children}</center>
		</h2>
	);
};

export const SmacContent = ({ children, bg }) => {
	return (
		<div
			className={bg === 'light' ? 'img-text-light' : 'img-text'}
			style={{
				textAlign: 'justify',
				lineHeight: 1.4,
				fontSize: 23,
				fontWeight: 300,
			}}>
			{children}
		</div>
	);
};

export const SamcImageTop = ({ children }) => {
	return <div>{children}</div>;
};
