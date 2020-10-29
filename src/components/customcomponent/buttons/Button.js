import React from 'react';

const Button = props => {
	return (
		<a href={props.to || '#'} className='button'>
			{props.children.toUpperCase()}
		</a>
	);
};

export default Button;
