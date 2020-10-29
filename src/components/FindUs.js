import React from 'react';

const FindUs = () => {
	return (
		<div className='find-us' style={{ flexDirection: 'column' }}>
			<div className='find-us'>
				<p>Find us on</p>
				<img
					alt='facebook'
					src='/facebook-1.png'
					className='findus-icon'
					onClick={() =>
						(window.location.href = 'http://www.facebook.com/SAMCBangladesh')
					}
				/>
				<img
					alt='instagram'
					src='/instagram-2.png'
					className='findus-icon'
					onClick={() => (window.location.href = 'https://www.instagram.com')}
				/>
				<img
					alt='youTube'
					src='/youtube-2.png'
					className='findus-icon'
					onClick={() =>
						(window.location.href =
							'https://www.youtube.com/channel/UCCNWTqZFB4c7NlMkzXHaowA')
					}
				/>
			</div>
		</div>
	);
};

export default FindUs;
