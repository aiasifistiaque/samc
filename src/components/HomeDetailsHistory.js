import React from 'react';

const HomeDetailsHistory = () => {
	return (
		<div className='samc-home-section-cover-image'>
			<div className='samc-section-image-container-light'>
				<h1 className='samc-home-section-heading'>
					<center>Our History</center>
				</h1>
				<div>
					<p className='samc-home-section-contents'>
						The medical clinic is rooted in the vision and work of Maulana
						Hedayatullah(1881-1945) and his beloved wife Sayeda Mehrunnesa
						(1901-1951).
					</p>
				</div>
				<div style={{ alignSelf: 'center' }}>
					<a href='/history' className='learn-more'>
						Learn More
					</a>
				</div>
			</div>
		</div>
	);
};

export default HomeDetailsHistory;
