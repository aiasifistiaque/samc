import React, { useState } from 'react';
import Page from '../components/Page';
import FindUs from '../components/FindUs';
import ProjectsSideBar from '../components/ProjectsSideBar';
import ProjectImages from '../components/ProjectImages';

const ProjectWac = () => {
	return (
		<Page
			style={{
				display: 'flex',
				flexDirection: 'column',
				padding: '6vh 5%',
			}}>
			<h2 style={{ marginBottom: 0 }}>
				Project Title: Healthcare for Women and Children
			</h2>
			<div
				style={{ backgroundImage: `url(/womanandchildren.jpeg)` }}
				className='project-cover'>
				<div className='project-cover-container'>
					<h3>Healthcare for Women and Children</h3>
				</div>
			</div>
			<div className='project-body'>
				<div className='project-contents'>
					<h3>The Challange</h3>
					<p>
						22 million Bangladeshi live under the poverty line. Specially in the
						rural areas, access to healthcare is a huge challenge. Women face
						barriers such as location, financial burden, bureaucratic responses
						as patient, proper access to transportation resulting in
						“lengthening response time” and male providers.
					</p>
					<h3 style={{ marginTop: 50 }}>Our Response</h3>
					<p>
						Our commitment is to make small but fundamental change to resource
						allocation to provide better delivery of healthcare.
					</p>
					<p>
						We provide primary care to women and children of Chondipur and the
						neighbouring villages. This includes patients with symptoms such as
						fever, pain, runny nose, cough, sore muscle, skin rash and/ or
						menstrual issues. Pregnant woman and new mothers also visit the
						clinic. Provision for taking Weight, Blood Pressure and Checking
						Blood Sugar levels are available. Medications are also provided when
						needed. A Nebulizer is available For breathing problems for
						children. Women diagnosed with High Blood Pressure come regularly to
						the clinic for check up and medicine.
					</p>
					<p>
						The visit and medication charge is Taka five ( less than $ ten
						cents).
					</p>
					<p>
						Patients requiring Secondary or Tertiary care are referred by our
						providers. Often, our providers will contact the specialist to
						request reduced fees for our patient.
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
	{ src: '/womanandchildren.jpeg', caption: 'one' },
	{ src: '/h2.jpg', caption: 'two' },
	{ src: '/h3.jpg', caption: 'three' },
];

export default ProjectWac;
