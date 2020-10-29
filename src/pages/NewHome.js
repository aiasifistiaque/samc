import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { mapboxApiKey } from '../constants';
import Donation from '../components/donation';
import Team from '../components/newsletter/Team';
import Newsletter from '../components/newsletter/Newsletter';
import HomeDetailsTwo from '../components/HomeDetailsTwo';
import Page from '../components/Page';
import HomeDetailsHistory from '../components/HomeDetailsHistory';
import HomeHero from '../components/HomeHero';
import { scroller } from 'react-scroll';
import FindUs from '../components/FindUs';
import ProjectsHome from '../components/ProjectsHome';
import DonationBox from '../components/DonationBox';
import HomeFutureProjects from '../components/HomeFutureProjects';
import MapBox from '../components/MapBox';

const NewHome = () => {
	const [scroll, setScroll] = useState(0);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			setScroll(window.pageYOffset);
		});
	}, [window, scroll]);
	const jump = to => {
		scroller.scrollTo(to, {
			smooth: true,
			offset: -60,
		});
	};
	return (
		<Page
			style={{
				backgroundColor: 'whitesmoke',
			}}>
			<HomeHero jump={jump} />
			<div
				id='body'
				style={{
					//marginTop: scroll * -1,
					marginBottom: 0,
				}}>
				<div>
					<HomeDetailsTwo />
					<HomeDetailsHistory />
					<MapBox />
					<ProjectsHome />
					<HomeFutureProjects />

					<DonationBox />
					<Newsletter />
				</div>
				<FindUs />
			</div>
		</Page>
	);
};

const styles = {
	contentBoxTop: {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		//marginLeft: '5%',
		boxShadow: '0 0 5px rgba(0,0,0,.3)',
		//borderRadius: '20px',
		//marginTop: -70,
		flexDirection: 'column',
		backgroundAttachment: 'fixed',
		marginBottom: 140,
	},
	contentBox: {
		width: '92%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: '4%',
		//boxShadow: '0 0 10px rgba(0,0,0,.6)',
	},
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

export default NewHome;
