import React from 'react';
import { Content, Button } from '../components/customcomponent';
import { colors } from '../constants';
import Dash from '../components/Dash';
import { scroller } from 'react-scroll';
import { CoverImage, CroppedCover } from '../components/Hero';
import Newsletter from '../components/newsletter/Newsletter';
import FindUs from '../components/FindUs';

const DonationPage = () => {
	const jump = to => {
		scroller.scrollTo(to, {
			smooth: true,
			offset: -60,
		});
	};
	return (
		<div>
			<CroppedCover
				src='donatePage.jpg'
				heading='Donate'
				subHeading='Support SAMC'
				jump={jump}
			/>
			<div
				className='section-padding'
				id='body'
				style={{
					minHeight: '90vh',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column',
				}}>
				<Content style={styles.content}>
					As a nonprofit organization, SAMC relies on generous people like you
					to advance our work. With your support, SAMC is able to extend our
					support to the women and children.
				</Content>

				<div style={styles.linkContainer}>
					<li style={styles.li}>
						You donation help the people from chondipur to access basic care
						against COVID-19
					</li>
					<Button transparent rounded to='/paydonation/covid'>
						Donation for Covid 19
					</Button>
					<li style={styles.li}>
						Your donation provide women and children healthcare which is their
						right.
					</li>
					<Button transparent rounded to='/paydonation/samc'>
						Donation for SAMC
					</Button>
					<li style={styles.li}>
						Your Zakaat help a whole community in Chondipur
					</li>
					<Button transparent rounded to='/paydonation/zakat'>
						Donation for Zakat
					</Button>
				</div>
			</div>
			<Newsletter />
			<FindUs />
		</div>
	);
};

const styles = {
	top: {
		width: '100%',
		height: '100%',
		backgroundColor: colors.main,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '50px 0px',
		paddingTop: '15vh',
	},
	support: { color: colors.dark, fontSize: 35, fontWeight: 500 },
	roundedDonate: {
		display: 'flex',
		backgroundColor: colors.main,
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center',
		borderRadius: 300 / 2,
		height: 200,
		width: 200,
		textAlign: 'center',
		marginTop: -80,
		color: 'white',
		marginBottom: 40,
		border: `12px solid rgba(0,0,0,.7)`,
	},
	donate: {
		display: 'flex',
		backgroundColor: colors.main,
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center',
		width: '100%',
		textAlign: 'center',
		color: 'white',
		padding: 10,
	},
	linkContainer: {
		display: 'flex',
		justifyContent: 'flex-start',
		flexWrap: 'wrap',
		flexDirection: 'column',
		alignItems: 'flex-start',
		fontSize: '1.2rem',
		padding: '5% 10%',
	},
	content: {
		color: 'rgba(0,0,0,0.8)',
		textAlign: 'center',
		fontSize: '1.8rem',
		textAlign: 'center',
	},
	li: {
		padding: '1rem 0',
	},
};

export default DonationPage;
