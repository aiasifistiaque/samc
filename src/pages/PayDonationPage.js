import React from 'react';
import { Form, Button } from 'react-bootstrap';

const PayDonationPage = props => {
	return (
		<div style={styles.container}>
			<Form style={styles.form}>
				<Form.Group controlId='fromName'>
					<Form.Label style={styles.customFormLabel}>Name</Form.Label>
					<Form.Control
						style={styles.customForm}
						type='text'
						required
						value={props.name}
						onChange={e => props.setName(e.target.value)}
					/>
				</Form.Group>
				<Form.Group controlId='formBasicEmail'>
					<Form.Label style={styles.customFormLabel}>Amount</Form.Label>
					<Form.Control
						style={styles.customForm}
						type='number'
						required
						value={props.amount}
						onChange={e => props.setAmount(e.target.value)}
					/>
				</Form.Group>
				<Form.Group controlId='formBasicEmail'>
					<Form.Label style={styles.customFormLabel}>Email</Form.Label>
					<Form.Control
						style={styles.customForm}
						type='email'
						value={props.email}
						required
						onChange={e => props.setEmail(e.target.value)}
					/>
					<Form.Text className='text-muted'>
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>
				<Form.Group controlId='forselection' style={{ display: 'none' }}>
					<Form.Label style={styles.customFormLabel}>Donation Type</Form.Label>
					<Form.Control
						style={styles.customForm}
						as='select'
						props='one time'
						onChange={e => props.setPaymentType(e.target.value)}>
						<option key={1} value='One Time'>
							One Time
						</option>
						<option key={2} value='Monthly Subscription'>
							Monthly Subscription
						</option>
					</Form.Control>
				</Form.Group>
				<Form.Group controlId='formBasicEmail'>
					<Form.Label style={styles.customFormLabel}>Donation for</Form.Label>
					<Form.Control
						style={styles.customForm}
						type='text'
						value={props.title}
						disabled
					/>
				</Form.Group>
				<Form.Group controlId='formBasicEmail'>
					<Form.Label style={styles.customFormLabel}>Payment Method</Form.Label>
					<Form.Control
						style={styles.customForm}
						type='text'
						value='Card'
						disabled
					/>
				</Form.Group>

				<Form.Group controlId='formBasicCheckbox' style={styles.terms}>
					<p style={{ marginBottom: 5 }}>
						By clicking on Proceed, you agree to SAMC's{' '}
						{
							// 	<a href='#' style={{ color: 'dodgerblue' }}>
							// 	Terms and Conditions of Use{' '}
							// </a>
							// and
						}
						<a href='#' style={{ color: 'dodgerblue' }}>
							Privacy Policy
						</a>
					</p>
				</Form.Group>
				{props.isError && (
					<div style={styles.error}>{`**${props.errorMessage}`}</div>
				)}
				<Button
					style={{ width: '380px', marginTop: 0 }}
					onClick={props.handleClick}>
					{props.loading ? 'Processing...' : 'Proceed to Pay'}
				</Button>
				<div
					style={{ textAlign: 'right', color: 'rgba(0,0,0,.6)', fontSize: 14 }}>
					Powered by <b>Stripe</b>
				</div>
			</Form>
		</div>
	);
};

const styles = {
	container: {
		paddingTop: '10vh',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		flexWrap: 'wrap',
	},
	leftContainer: {
		display: 'flex',
		flexDirection: 'column',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: '0 50px',
		backgroundColor: '#f8f8f8',
		height: '100vh',
		boxSizing: 'border-box',
		minWidth: '400px',
		borderRight: '2px solid rgba(235, 237, 240, 0.4)',
	},

	leftDescription: {
		color: 'rgba(0,0,0,.7)',
		fontSize: 20,
		textAligh: 'justify',
	},
	form: {
		display: 'flex',
		flexDirection: 'column',
		padding: '0 200px 0 200px',
		flex: 1,
		minWidth: '500px',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'transparent',
	},
	customForm: {
		borderRadius: 6,
		border: '1px solid rgba(0,0,0,.1)',
		fontSize: 15,
		boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)',
		width: '380px',
		color: 'black',
		marginTop: 0,
		marginBottom: 0,
	},
	customFormLabel: {
		fontSize: 13,
		fontWeight: 600,
		color: 'rgba(0,0,0,.8)',
		marginBottom: 4,
	},
	terms: {
		display: 'flex',
		margin: 0,
		fontSize: 11,
		width: '350px',
		textAlign: 'center',
		color: 'rgba(0,0,0,.5)',
	},
	error: {
		color: 'crimson',
		fontSize: 12,
		fontWeight: 400,
		marginTop: 0,
	},
};

export default PayDonationPage;
