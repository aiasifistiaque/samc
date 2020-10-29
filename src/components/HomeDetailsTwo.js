import React from 'react';

const HomeDetailsTwo = () => {
	return (
		<div
			className='samc-home-section-cover-image'
			style={{
				backgroundImage: `url(/who.jpeg)`,
			}}>
			<div className='samc-section-image-container-light blur'>
				<h2 className='samc-home-section-heading'>
					<center>Who Are We</center>
				</h2>
				<p className='samc-home-section-contents'>
					Suraiya Ataur Medical Center (SAMC) is a non-profit medical clinic
					situated in the village of Chondipur, Bangladesh. It was established
					in 2014 to serve the basic health needs specifically of women and
					children of the village and surrounding rural areas.
				</p>

				<a href='/history' className='learn-more'>
					Learn More
				</a>
			</div>
		</div>
	);
};

export default HomeDetailsTwo;
