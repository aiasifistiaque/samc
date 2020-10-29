import React from 'react';
import { Button } from 'react-bootstrap';
//import { colors } from '../../constants/constants';

export default function Team() {
	return (
		<div
			class='team-parent-container'
			style={{
				display: 'flex',
				flexDirection: 'column',
				backgroundColor: 'whitesmoke',
				alignItems: 'center',
				justifyContent: 'center',
				padding: '100px 0',
			}}>
			<p style={styles.heading}>Our Team</p>
			<p style={styles.subheading}>Meet Our Volunteers</p>
			<div style={styles.imageContainer}>
				<img alt='' src='./t1.jpg' style={styles.image} />
				<img alt='' src='./t2.jpg' style={styles.image} />
				<img alt='' src='./t3.jpeg' style={styles.image} />
				<img alt='' src='./t4.jpeg' style={styles.image} />
			</div>
			<Button>Meet Our Team</Button>
		</div>
	);
}

const styles = {
	heading: {
		color: 'teal',
		alignSelf: 'center',
		fontSize: 30,
		marginBottom: 5,
		fontWeight: 600,
	},
	subheading: {
		marginTop: 0,
		marginBottom: 5,
		color: 'rgba(0,0,0,7)',
		alignSelf: 'center',
		fontSize: 40,
		fontWeight: 400,
	},
	image: {
		height: 250,
		width: 250,
		borderRadius: '50%',
		objectFit: 'cover',
		padding: 20,
	},
	imageContainer: {
		display: 'flex',
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-evenly',
		padding: '50px 0',
	},
	container: {},
};
