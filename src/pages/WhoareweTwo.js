import React from 'react';
import Aboutus from '../components/Aoutus';
import { colors, css } from '../constants';
import Donation from '../components/donation';
import Newsletter from '../components/newsletter/Newsletter';

const HistoryPage = () => {
	return (
		<div style={{ marginTop: '8vh' }}>
			<div className='c-history'>
				<div
					className='blur-5'
					style={{
						height: '100%',
						width: '100%',
						backgroundColor: 'rgba(0,0,0,.3)',
					}}></div>
			</div>
			<div
				style={{
					backgroundColor: colors.main,
					height: 60,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					boxShadow: css.boxShadow,
				}}>
				<p
					style={{
						color: 'white',
						fontSize: 30,
						fontWeight: 500,
						margin: '10px 0',
					}}>
					Who Are We
				</p>
			</div>
			<div className='section-padding-x-extreme'>
				<p
					style={{
						fontSize: 50,
						alignSelf: 'center',
						fontWeight: 400,
						color: 'rgba(0,0,0,.7)',
						marginBottom: 30,
					}}>
					<center>The Story of SAMC</center>
				</p>
				<hr />
				<div style={{ marginTop: 30 }}>
					<Aboutus />
				</div>
			</div>
			<Donation />
			<Newsletter />
		</div>
	);
};

export default HistoryPage;
