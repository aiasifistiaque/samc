import React from 'react';
import '../customcomponent/styles/style.scss';
import './newsletter.css';

export const Container = props => {
	return (
		<div className='samc-newsletter-parent-container'>{props.children}</div>
	);
};

export const Left = props => {
	return <Contain>{props.children}</Contain>;
};

export const Right = props => {
	return <Contain>{props.children}</Contain>;
};

export const Item = props => {
	return <p className='samc-newsletter-item'>{props.children}</p>;
};

const Contain = props => {
	return <div className='samc-newsletter-contain'>{props.children}</div>;
};

export const Button = props => {
	return (
		<button className='samc-button-secondary-big'>
			{props.children.toUpperCase()}
		</button>
	);
};

export const ButtonContainer = props => {
	return <div className='samc-newsletter-fab-container'>{props.children}</div>;
};
