import React from 'react';
import { NavItem } from './Structure';

const Items = ({ itemcolor }) => {
	return (
		<div className='flex'>
			<NavItem to='/' style={itemcolor}>
				Home
			</NavItem>
			<NavItem to='/history' style={itemcolor}>
				Our Story
			</NavItem>
			<NavItem to='/projects' style={itemcolor}>
				Projects
			</NavItem>
			<NavItem to='/covid19_situation_at_samc' style={itemcolor}>
				Covid 19 Response
			</NavItem>

			<NavItem to='/team' style={itemcolor}>
				Our Team
			</NavItem>
			<NavItem style={itemcolor}>Contact</NavItem>
			<NavItem to='/donate' style={itemcolor}>
				Donate
			</NavItem>
		</div>
	);
};

const ProjectsDropdown = () => {
	return (
		<div className='projects-dropdown' style={{ backgroundColor: 'red' }}>
			<p>One</p>
			<p>two</p>
			<p>three</p>
		</div>
	);
};

export default Items;
