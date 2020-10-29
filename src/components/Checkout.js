import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import PayDonationPage from '../pages/PayDonationPage';
import { stripeApiKey } from '../constants/basic';
import { useCookies } from 'react-cookie';

const stripePromise = loadStripe(stripeApiKey);

const Message = ({ message }) => (
	<section style={{ padding: '200px 100px' }}>
		<p>{message}</p>
	</section>
);

export default function Checkout() {
	const [message, setMessage] = useState('');
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [amount, setAmount] = useState();
	const [isError, setIsError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [loading, setLoading] = useState(false);
	const [paymentType, setPaymentType] = useState('One Time');
	const [terms, setTerms] = useState(true);
	const params = useParams();
	const title =
		params.id === 'covid'
			? 'Donation for Covid 19 response'
			: params.id === 'samc'
			? 'Donation for SAMC'
			: 'Donation for Zakat';

	const [cookies, setCookie] = useCookies(['name', 'amount', 'email']);

	useEffect(() => {
		// Check to see if this is a redirect back from Checkout
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

	const handleClick = async event => {
		setLoading(true);
		if (!terms || !email || !name || !amount) {
			setIsError(true);
			setLoading(false);
			setErrorMessage(
				!terms
					? 'Accepting the terms is required'
					: !email
					? 'Email is required'
					: !name
					? 'Name is required'
					: 'Amount is required'
			);
			return;
		}

		setIsError(false);
		const stripe = await stripePromise;
		const response = await fetch('/create-session', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: name,
				price: amount,
				email: email,
				url: window.location.href,
				productName: title,
				type: paymentType,
			}),
		});
		const session = await response.json();
		// When the customer clicks on the button, redirect them to Checkout.
		const result = await stripe.redirectToCheckout({
			sessionId: session.id,
		});

		if (result.error) {
			console.log(result.error);
			setIsError(true);
			setLoading(false);
			setErrorMessage(result.error.message);
			return;
		}

		setLoading(false);
	};

	return message ? (
		<Message message={message} />
	) : (
		<PayDonationPage
			title={title}
			handleClick={handleClick}
			name={name}
			email={email}
			amount={amount}
			paymentType={paymentType}
			terms={terms}
			setName={val => setName(val)}
			setAmount={val => setAmount(val)}
			setEmail={val => setEmail(val)}
			setPaymentType={val => setPaymentType(val)}
			setTerms={val => setTerms(val)}
			loading={loading}
			setLoading={setLoading}
			isError={isError}
			setIsError={setIsError}
			errorMessage={errorMessage}
			setErrorMessage={setErrorMessage}
		/>
	);
}
