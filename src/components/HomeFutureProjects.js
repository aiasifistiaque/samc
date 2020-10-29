import React from 'react';

const HomeFutureProjects = () => {
	return (
		<div className='samc-home-section-cover-image'>
			<div className='samc-section-image-container-light'>
				<h1 className='samc-home-section-heading'>
					<center>Future Projects</center>
				</h1>
				<div
					className='samc-home-section-contents'
					style={{ textAlign: 'left', fontSize: 20, lineHeight: 1.6 }}>
					<li>Regular seminars and webinars for virtual experts from Dhaka</li>
					<li>
						Introducing domestic violence awareness through webinars and
						presentations by experts
					</li>
					<li>Creating support groups for victims of domestic violence</li>
					<li>
						Increase the number of scholarships we distribute to students hoping
						to go to nursing or medical school.
					</li>
					<li>
						Expansion of SAMC by constructing an adjacent building that will
						serve as the Suraiya Ataur Nursing School (SANS).
					</li>
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

export default HomeFutureProjects;
