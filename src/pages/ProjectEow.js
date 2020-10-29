import React from 'react';
import Page from '../components/Page';
import FindUs from '../components/FindUs';
import ProjectsSideBar from '../components/ProjectsSideBar';
import ProjectImages from '../components/ProjectImages';

const ProjectEow = () => {
	return (
		<Page
			style={{
				display: 'flex',
				flexDirection: 'column',
				padding: '6vh 5%',
			}}>
			<h2 style={{ marginBottom: 0 }}>Project Title: Empowerment of women</h2>
			<div
				className='project-cover'
				style={{
					backgroundImage: `url(/eowhome.jpeg)`,
				}}>
				<div className='project-cover-container'>
					<h3>Empowerment of women</h3>
				</div>
			</div>
			<div className='project-body'>
				<div className='project-contents'>
					<h3>The Challange</h3>
					<p>
						Bangladesh has made remarkable improvements in the past few decades
						in women’s empowerment. Mortality and fertility rates are declining
						which is a positive change. There is less disparity between men and
						women in school enrollments. In 2018, male literacy rate was 76% and
						the female literacy rate was 71%. However, gender based violence and
						discrimination is rampant and keeps women from achieving their full
						potential.
					</p>
					<h3 style={{ marginTop: 50 }}>Our Response</h3>
					<p>
						In a remote village in Bangladesh called Chondipur, formally known
						as Mohdipur, the ancestral village of Jamal Rahman, a makeshift
						school for girls was established in 1967 by his grandfather Maulana
						Hedayatullah, a revered spiritual teacher and healer. The land for
						the school was also donated by him. The school made it possible for
						girls from the village to have the opportunity to get an education
						which otherwise wouldn’t be possible for most of them. Young girls
						were not allowed to attend schools with the boys. Maulana
						Hedayatullah and his wife were modern thinkers - open minded
						individuals for their time and felt it was important for girls in
						the village to get the opportunity to be educated in order to have a
						better life and future.
					</p>
					<p>
						In 1994 Jamal, his friends and extended family established an annual
						fundraiser in Seattle to support and expand the school. Around 2010
						the school was fully accredited which meant that the government took
						responsibility for all the expenses including teacher’s salaries. It
						became part of the official school district. This was a great
						accomplishment that took many years with the Rahman family’s
						persistence.
					</p>
					<p>
						Suraiya Ataur Medical Center for women and children was established
						in 2014. The women and children from the area had very limited
						access to receive healthcare as it was unaffordable for them. The
						women preferred to see women doctors which was not always possible.
						Chondipur village, similar to many villages in Bangladesh, is remote
						and has very limited infrastructure compared to larger cities like
						Rajshahi and Dhaka. The population in these villages are mostly poor
						and have very limited resources. Transportation for the poor is
						difficult as they can’t afford it and main roads are unpaved. Travel
						normally consists of walking, taking rickshaws or a local bus.
						Visits to the local hospital are expensive and difficult for the
						average villager. These trips take away time from essential chores.
						The clinic is right in the center of the village, making it possible
						for women in Chondipur and neighboring villages to walk over easily.
					</p>
					<p>
						Initially the patients were being seen in one of the school
						classrooms during off- school hours. Doctor Nadira Begum, a family
						cousin with vast medical experience, started seeing patients there
						every two weeks and provided medicine to patients. She commuted over
						70 km to provide these services purely on a voluntary basis. Girls
						from the school volunteered to help check in patients, write their
						names and the purpose of their visit while they waited to see the
						doctor. In August 2016, the construction of the building adjacent to
						the school was completed and is now the permanent home for Suraiya
						Ataur Medical Center. The clinic has its own paid staff now
						including two female providers, a female coordinator and a female
						caretaker to serve the community. In addition, the patients receive
						information on health-related issues that are essential.
					</p>
					<p>
						The young women of Chondipur find it hard to seek the right help
						they need. Addressing issues of mental health, emotional and
						physical abuse is challenging. Suraiya Ataur Medical Center plans to
						provide a platform to support and highlight these important issues.
						This will be provided via educational seminars with topics such as
						mental health, nutrition, hygiene, pregnancy, menopause, Blood
						pressure, violence awareness and self defence. We are committed to
						providing this in a safe and welcoming environment where the
						Chondipur villagers feel empowered, inspired and respected.
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
	{ src: '/w1.jpeg', caption: 'one' },
	{ src: '/w2.jpeg', caption: 'two' },
	{ src: '/w3.jpeg', caption: 'three' },
];

export default ProjectEow;
