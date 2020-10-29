import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const AfterPayment = () => {
	const params = useParams();
	const [message, setMessage] = useState('');

	useEffect(() => {
		const query = new URLSearchParams(window.location.search);

		if (query.get('success')) {
			setMessage(
				'Donation Successful! You will receive an email confirmation.'
			);
		}
		if (query.get('canceled')) {
			setMessage(
				"Payment cancelled -- continue to shop around and checkout when you're ready."
			);
		}
	}, []);

	return <Message message={message} />;
};

const Message = ({ message }) => {
	return (
		<div
			style={{
				marginTop: '20vh',
				display: 'flex',
				alignItems: 'center',
				justifyContents: 'center',
			}}>
			<p>{message}</p>
		</div>
	);
};

export default AfterPayment;
