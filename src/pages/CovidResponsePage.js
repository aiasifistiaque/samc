import React from 'react';
import Page from '../components/Page';
import FindUs from '../components/FindUs';
import ProjectsSideBar from '../components/ProjectsSideBar';

const CovidResponsePage = () => {
	return (
		<Page
			style={{
				display: 'flex',
				flexDirection: 'column',
				padding: '6vh 5%',
			}}>
			<h2 style={{ marginBottom: 0 }}>Covid 19 Impact on SA Medical Center</h2>
			<div
				style={{ backgroundImage: `url(/covid_two.jpg)` }}
				className='project-cover'>
				<div className='project-cover-container'>
					<h3>Covid 19 Impact on SA Medical Center</h3>
				</div>
			</div>
			<div className='project-body'>
				<div className='project-contents'>
					<h3>Current situation at the Clinic:</h3>
					<p>
						Suraiya Ataur Medical Clinic (SAMC) had been closed since end of
						March 2020 when Covid-19 pandemic spread to Bangladesh. The clinic
						primarily serves only women and children from the village and other
						neighboring villages. The clinic was closed for about 6 months and
						during closure, the clinic was able to provide patients with only
						routine medications. Fortunately none of the staff, predominantly
						women, lost their jobs. They continued to get paid during closure.
						Six Staff members includes the Doctor, Paramedic, Administrator,
						Receptionist, Cleaner and a Guard. Unfortunately for many patients,
						it was a hardship as they were not able to get the medical help the
						clinic normally provided.
					</p>
					<p>
						Situation around Chondipur and neighboring villages seems to have
						minimal reported cases of Covid- 19 patients. There have not been
						any reported cases from the clinic itself. Great news for the locals
						and neighboring villagers is that the clinic was recently able to
						re-open safely and resume their services as of September 26th. SAMC
						had already made some changes during closure to accommodate
						patient’s medicine needs. About 15 patients came the first day of
						reopening which was a positive sign. Unfortunately because of the
						current situation, the clinic isn’t able to have any Volunteers from
						the nearby school to help as they had in the past. The school is
						also still closed for the pandemic.
					</p>
					<p>
						The SAMC is able to resume their normal services with extra
						precautions for Covid-19. For staff and patient’s safety PPE
						supplies such as masks, gloves and hand-washing facilities are being
						provided by 2 the clinic without any extra cost to patients. Clinic
						staff are also educating the patients about cleanliness and safe
						distancing requirements during this time. There have been patients
						who either don’t understand or have disagreements about what they
						need to do in order to keep everyone safe. The Staff has been
						instrumental in mitigating problems, for the most part, patients
						eventually complied as they understood that they would not be
						attended to otherwise. The clinic is on the right path today and
						everyone is feeling fortunate to be able to continue to serve the
						community.
					</p>
				</div>
				<ProjectsSideBar />
			</div>

			<FindUs />
		</Page>
	);
};

export default CovidResponsePage;
