import React from 'react';
import { Navbar, NavContainer, NavBrand, NavItem } from './Structure';
import Sidebar from '../Sidebar';
import MenuIcon from '@material-ui/icons/Menu';
import { useSize } from '../../hooks';
import { useScrolled } from '../customcomponent/hooks';
import Items from './Items';

const Header = () => {
	const [sideBarStatus, setSideBarStatus] = React.useState(false);
	const size = useSize();

	const bigScreen =
		size === 'extraLarge' ? true : size === 'large' ? true : false;
	const onSideBarClose = () => {
		setSideBarStatus(false);
		console.log(sideBarStatus);
	};
	const onSideBarOpen = () => {
		setSideBarStatus(true);
		console.log(sideBarStatus);
	};
	const scrolled = useScrolled();

	const itemcolor = { color: !scrolled ? 'white' : 'black', cursor: 'pointer' };
	return (
		<div>
			{sideBarStatus && (
				<Sidebar open={sideBarStatus} onClose={onSideBarClose} />
			)}

			<header>
				<Navbar fixed transparent>
					<NavBrand to='/'>SAMC</NavBrand>

					<NavContainer right>
						{bigScreen ? (
							<Items itemcolor={itemcolor} />
						) : (
							<NavItem onClick={onSideBarOpen} style={itemcolor}>
								<MenuIcon className='menuIcon' />
							</NavItem>
						)}
					</NavContainer>
				</Navbar>
			</header>
		</div>
	);
};

export default Header;
