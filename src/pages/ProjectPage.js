import React from 'react';
import Page from '../components/Page';
import { scroller } from 'react-scroll';
import { LeftIndentCover, CroppedCover } from '../components/Hero';
import FindUs from '../components/FindUs';
import Newsletter from '../components/newsletter/Newsletter';
import { Vertical } from '../components/customcomponent';
import { useSize } from '../hooks';
import FutureProjects from '../components/FutureProjects';
import DonationBox from '../components/DonationBox';

const ProjectPage = () => {
	const jump = to => {
		scroller.scrollTo(to, {
			smooth: true,
			offset: -100,
		});
	};
	return (
		<Page>
			<div className='container-vertical'>
				<CroppedCover
					src='projects_2.jpeg'
					heading='Our Work'
					subHeading='Our Current and Future Projects'
					jump={jump}
				/>
				<div className='container-horizontal'>
					<div
						className='samc-history-content-container'
						id='body'
						style={{ backgroundColor: 'white' }}>
						<div className='page-project'>
							<p>Our Work</p>
							<h3>Current Projects</h3>
							<ProjectItem
								reverse
								to='/project_women_and_children'
								src='/womanandchildren.jpeg'
								title='Women and Children Healthcare Project'>
								22 million Bangladeshi live under the poverty line. Specially in
								the rural areas, access to healthcare is a huge challenge. Women
								face barriers such as location, financial burden, bureaucratic
								responses as patient, proper access to transportation resulting
								in “lengthening response time” and male providers.
							</ProjectItem>
							<ProjectItem
								src='/eowhome.jpeg'
								to='/project_empowerment_of_women'
								title='Empowerment of Women'>
								Bangladesh has made remarkable improvements in the past few
								decades in women’s empowerment. Mortality and fertility rates
								are declining which is a positive change. There is less
								disparity between men and women in school enrollments. In 2018,
								male literacy rate was 76% and the female literacy rate was 71%.
								However, gender based violence and discrimination is rampant and
								keeps women from achieving their full potential.
							</ProjectItem>
							<ProjectItem
								reverse
								src='/nshome.jpeg'
								to='/project_nursing_school_and_scholarship'
								title='Nursing School and Scholarship'>
								There is a significant shortage of qualified Nurses in
								Bangladesh. Many young women wishing to get into the field have
								limited opportunity or the funds to get into the schools. A huge
								gap exists for young women being exposed to options other than
								the traditional marriage. This is the scenario especially in
								villages like Chondipur.
							</ProjectItem>
						</div>
					</div>
					<div className='projectpage-future'>
						<FutureProjects />
					</div>
				</div>
			</div>
			<DonationBox />
			<Newsletter />
			<FindUs />
		</Page>
	);
};

const ProjectItem = ({ children, src, title, to, reverse }) => {
	const screen = useSize();
	const rev =
		screen === 'small' ? false : screen === 'medium' ? false : reverse;
	return (
		<div className='project-page-card'>
			{!rev && <img alt='' src={src} />}
			<Vertical style={{ marginRight: rev && '3%' }}>
				<h4>{title}</h4>
				<h5>The Challange:</h5>
				<p>{children}</p>
				<a href={to}>View our response</a>
			</Vertical>
			{rev && <img alt='' src={src} style={{ marginRight: rev && 0 }} />}
		</div>
	);
};

export default ProjectPage;
