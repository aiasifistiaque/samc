import React from 'react';

const BigButton = props => {
	return (
		<a href={props.to || '#'} className='button-big'>
			{props.children.toUpperCase()}
		</a>
	);
};

export default BigButton;
