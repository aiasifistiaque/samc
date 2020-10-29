import React from 'react';

const ProjectsHome = () => {
	return (
		<div className='projects-home-container'>
			<h3>Our Projects</h3>
			<div className='projects-stack'>
				<Project src='/wachome.jpeg' to='/project_women_and_children'>
					Women And Children Healthcare Project
				</Project>
				{
					// <Project src='/cpshome.jpeg' to='#'>
					// 	Chondipur School
					// </Project>
				}
				<Project src='/eowhome.jpeg' to='/project_empowerment_of_women'>
					Empowerment of Women
				</Project>
				<Project
					src='/nshome.jpeg'
					to='/project_nursing_school_and_scholarship'>
					Nursing School and Scholarship
				</Project>
			</div>
		</div>
	);
};

const Project = ({ children, src, to }) => {
	return (
		<a
			href={to}
			style={{ backgroundImage: `url(${src})` }}
			className='project-cards'>
			<div className='project-card-content-container'> {children}</div>
		</a>
	);
};

export default ProjectsHome;
