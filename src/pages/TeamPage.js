import React from 'react';
import { Vertical } from '../components/customcomponent';
import Newsletter from '../components/customcomponent/newsletter/Newsletter';
import { teamList } from '../volunteerList';
import { colors } from '../constants';
import { CroppedCover } from '../components/Hero';
import { scroller } from 'react-scroll';
import DonationBox from '../components/DonationBox';
import FindUs from '../components/FindUs';

export default function TeamPage() {
	const jump = to => {
		scroller.scrollTo(to, {
			smooth: true,
			offset: -100,
		});
	};
	return (
		<div>
			<CroppedCover src='/teamcover.jpg' heading='Team' jump={jump} />
			<div>
				<div style={styles.container}>
					<p style={styles.heading} id='body'>
						Our Team
					</p>
					<p style={styles.subheading}>Meet Our Volunteers</p>
				</div>
				<div
					class='team-parent-container'
					style={{ backgroundColor: 'whitesmoke' }}>
					<div style={styles.imageContainer}>
						{teamList.map(member => (
							<Team
								src={member.image}
								name={member.name}
								position={member.title}
							/>
						))}
					</div>
				</div>
				<DonationBox />
				<Newsletter />
				<FindUs />
			</div>
		</div>
	);
}

function Team({ src, name, position }) {
	return (
		<div>
			<div style={styles.imageContainer}>
				<Vertical center>
					<img alt='' src={src} style={styles.image} />
					<p
						style={{
							color: 'rgba(0, 0, 0, 0.7)',
							fontSize: 20,
							fontWeight: 'bold',
							margin: 0,
						}}>
						{name}
					</p>
					{position && (
						<p
							style={{
								color: 'rgba(0, 0, 0, 0.7)',
								fontSize: 15,
								margin: 0,
							}}>
							{position}
						</p>
					)}
				</Vertical>
			</div>
		</div>
	);
}

//{const CoverImage = ({ children, src }) => {
//	return (
//		<div
//			style={{ backgroundImage: `url(${src})` }}
//			className='samc-teampage-cover-image'>
//			{children}
//		</div>
//	);
//};}

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
		color: 'rgba(0, 0, 0, 0.7)',
		alignSelf: 'center',
		fontSize: 40,
		fontWeight: 400,
	},
	image: {
		height: 250,
		width: 250,
		borderRadius: '50%',
		objectFit: 'cover',
		padding: '20px 20px',
		margin: '5px 10px',
	},
	imageContainer: {
		display: 'flex',
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-evenly',
		padding: '50px 0',
		//flexDirection: 'column',
	},
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'whitesmoke',
		paddingTop: 40,
	},
	homeTitle: {
		//border: '5px solid whitesmoke',
		padding: '5%',
		borderRadius: '30px',
		backgroundColor: 'rgba(255,255,255,.8)',
		color: '#07cca4',
		textShadow: 'none',
		fontWeight: 300,
		fontSize: 50,
	},
	backgroundBlue: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
	},
};

const styles2 = {
	coverContent: {
		display: 'flex',
		flexDirection: 'column',
		color: 'whitesmoke',
		fontSize: 30,
		alignSelf: 'center',
		marginBottom: 0,
		fontWeight: 600,
		paddingBottom: 10,
		margin: 0,
		alignSelf: 'center',
		textAlign: 'center',
		padding: 20,
		backgroundColor: colors.main,
		height: '20vh',
		justifyContent: 'flex-end',
	},
	content: {
		padding: 10,
		fontSize: 22,
		fontWeight: 300,
		lineHeight: 1.5,
		color: 'whitesmoke',
	},
};
