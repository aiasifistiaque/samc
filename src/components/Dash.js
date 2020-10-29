import React from 'react';

const Dash = ({ color }) => {
	return (
		<div
			style={{
				backgroundColor: color || 'white',
				height: 8,
				width: 25,
			}}></div>
	);
};

export default Dash;
