import React from 'react';
import { Container } from 'react-bootstrap';
import Donation from '../donation';
import Team from '../newsletter/Team';
import Newsletter from '../newsletter/Newsletter';
import HomeDetailsTwo from '../HomeDetailsTwo';
import Page from '../Page';
import HomeDetailsHistory from '../HomeDetailsHistory';
import HomeHero from '../HomeHero';

const Home = () => {
	return (
		<Page>
			<div>
				<HomeHero />
			</div>
			<div>
				<HomeDetailsTwo />
			</div>
			<Container fluid className='section-padding' style={styles.history}>
				<HomeDetailsHistory />
			</Container>
			<Donation />
			<Team />
			<Newsletter />
		</Page>
	);
};

const styles = {
	imageContainer: {
		padding: 25,
		height: '100%',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alighItems: 'center',
		justifyContent: 'center',
		//backgroundColor: 'rgba(7, 204, 164,.2)',
	},
	content: {
		fontSize: 20,
		padding: '10px',
		textAlign: 'justify',
	},
	logoContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
	},
	homeDetails: {
		display: 'flex',
		width: '80%',
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center',
	},
	history: {
		paddingTop: 150,
		backgroundColor: 'whitesmoke',
	},
};

export default Home;
