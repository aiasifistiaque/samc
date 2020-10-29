import React, { useState } from 'react';
import { Style } from '../functions';
import { useScreenSize, useScrolled, useStyle } from '../hooks';

let isTransparent = false;

//Structures
const Structure = props => {
	return (
		<div className={props.className || ''} style={Style(props)}>
			{props.children}
		</div>
	);
};

/**
 *This is the NavBar Component
 */
export const Navbar = props => {
	const scrolled = useScrolled();
	isTransparent = props.transparent;
	const styleTransparent = () => {
		if (!props.transparent) return '';
		else if (scrolled) return 'nav-transparent-scrolled';
		else return 'nav-transparent-not-scrolled';
	};
	const customClass = useStyle(props, {
		default: '',
		shadow: 'nav-shadow',
	});
	const styleFixed = useStyle(props, {
		fixed: 'fixed-nav',
		default: '',
	});
	const styleClass = `nav ${customClass} ${styleTransparent()} ${styleFixed}`;
	console.log(styleClass);
	return (
		<div style={Style(props)}>
			<Structure className={styleClass} {...props} />
			{props.fixed && !props.transparent ? (
				<div style={{ marginTop: 48 }} />
			) : null}
		</div>
	);
};

/**
 * Container of items inside navbar
 * @param {center/left/right} allignment of the items inside container
 */
export const NavContainer = props => {
	const customClass = useStyle(props, values.containerAllignment);
	const styleClass = `nav-item-container ${customClass}`;
	return <Structure className={styleClass} {...props} />;
};

/**
 *Items of navbar
 */
export const NavItem = props => {
	return (
		<a href={props.to} className='nav-item' style={Style(props)}>
			{props.children}
		</a>
	);
};

export const NavToggleMenu = props => {
	const [isToggled, setIsToggled] = useState(false);

	return (
		<div>
			<a
				href='#'
				className='nav-toggle-button'
				onClick={() => setIsToggled(!isToggled)}>
				{props.title}
				<img src='/menu.svg' className='header-toggle-icon' />
			</a>
			{isToggled ? props.children : null}
		</div>
	);
};

export const NavToggle = props => {
	const [isToggled, setIsToggled] = useState(false);
	const isSmall = useScreenSize() === 'small' ? true : false;
	const customClass = useStyle(props, values.containerAllignment);
	const styleClass = {
		notSmall: `nav-item-container ${customClass}`,
		smallToggled: 'nav-item-container-toggled',
		isSmall: 'nav-toggle-button',
	};

	return isSmall ? (
		<div className='nav-toggled'>
			<div>
				<a
					href='#'
					className={styleClass.isSmall}
					onClick={() => setIsToggled(!isToggled)}>
					<img src='/menu.svg' className='header-toggle-icon' />
				</a>
				{isToggled ? (
					<Structure
						className={styleClass.smallToggled}
						{...props}
						style={isTransparent ? { backgroundColor: 'rgba(0,0,0,.9)' } : null}
					/>
				) : null}
			</div>
		</div>
	) : (
		<Structure className={styleClass.notSmall} {...props} />
	);
};

const values = {
	containerAllignment: {
		left: 'left',
		right: 'right',
		default: 'left',
		center: 'center',
	},
};
