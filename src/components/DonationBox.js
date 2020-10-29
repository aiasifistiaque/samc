import React from 'react';

const DonationBox = () => {
	return (
		<div className='donation-box'>
			<div className='donation-box-top'>
				<h3>Donate</h3>
				<p>
					Your donations make our work possible. Because <br /> of you, our work
					can continue.
				</p>
			</div>
			<div className='donation-box-bottom'>
				<div className='donation-card'>
					<h3>Donation for Covid 19</h3>
					<a href='/paydonation/covid'>Donate</a>
				</div>
				<div className='donation-card border-around'>
					<h3>Donation for SAMC</h3>
					<a href='/paydonation/samc'>Donate</a>
				</div>
				<div className='donation-card'>
					<h3>Donation for Zakaat</h3>
					<a href='/paydonation/zakat'>Donate</a>
				</div>
			</div>
		</div>
	);
};

export default DonationBox;
