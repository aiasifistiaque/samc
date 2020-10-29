import React from 'react';
import Page from '../components/Page';
import FindUs from '../components/FindUs';
import ProjectsSideBar from '../components/ProjectsSideBar';
import ProjectImages from '../components/ProjectImages';

const ProjectNss = () => {
	return (
		<Page
			style={{
				display: 'flex',
				flexDirection: 'column',
				padding: '6vh 5%',
			}}>
			<h2 style={{ marginBottom: 0 }}>
				Project Title: Nursing School & Scholarship
			</h2>
			<div
				style={{ backgroundImage: `url(/nsshome.jpeg)` }}
				className='project-cover'>
				<div className='project-cover-container'>
					<h3>Nursing School & Scholarship</h3>
				</div>
			</div>
			<div className='project-body'>
				<div className='project-contents'>
					<h3>The Challange</h3>
					<p>
						There is a significant shortage of qualified Nurses in Bangladesh.
						Many young women wishing to get into the field have limited
						opportunity or the funds to get into the schools. A huge gap exists
						for young women being exposed to options other than the traditional
						marriage. This is the scenario especially in villages like
						Chondipur.
					</p>
					<p>
						The Maulana Hedayetullah Girls School in Chondipur has about 300
						students. These students usually have very few options to further
						their studies. Reasons include affordability and options.
					</p>
					<iframe
						style={{
							height: '55vh',
							margin: '3rem 0 0 0',
							border: 'none',
							borderRadius: 10,
							width: '90%',
							//alignSelf: 'center',
						}}
						src='https://www.youtube.com/embed/obhs_I36YA0'
						frameborder='1'
						allow='autoplay; encrypted-media'
						allowfullscreen
						title='video'
					/>
					<p
						style={{
							width: '90%',
							fontSize: '.9rem',
							color: 'rgba(0,0,0,.7)',
							fontWeight: 600,
							textDecorationLine: 'underline',
							textAlign: 'left',
							marginBottom: '2rem',
							lineHeight: 1.4,
						}}>
						Our first Nursing School Scholarship recipient Tina shares her
						gratitude and joy at being able to pursue her dream of earning a
						degree in nursing.
					</p>

					<h3 style={{ marginTop: 50 }}>Our Response</h3>
					<p>
						A discussion with the village leadership including students and the
						teachers about future empowerment projects was to establish a
						Nursing School. The nearest one is an hour away with limited
						available space and high cost. In the future, having an option to
						attend this Nursing School will empower the young women to have
						control over their lives. Typically the parents of the young women
						arrange their marriage. When this Chondipur Nursing School becomes a
						reality, the Maulana Hedayetullah Girl’s School students would be
						assured of a seat (if qualified) paying a minimal fee.
					</p>
					<p>
						As part of the goal to empower women we offered a four year Nursing
						scholarship for the first time in 2019 thanks to the generous
						donations from the Seattle Interfaith Community Sanctuary.
					</p>
					<p>
						We hope to offer similar scholarships in 2021 and every year until
						our own Nursing School is a reality.{' '}
					</p>
					<ProjectImages images={images} />
				</div>
				<ProjectsSideBar />
			</div>
			<FindUs />
		</Page>
	);
};

const images = [
	{ src: '/n1.jpeg', caption: 'one' },
	{ src: '/n2.jpeg', caption: 'two' },
	{ src: '/n3.jpeg', caption: 'three' },
];

export default ProjectNss;
