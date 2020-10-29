import React from 'react';
import { NavContainer, NavBrand, FixedNavbar, NavItem } from './Structure';
import Sidebar from '../Sidebar';
import { useSize } from '../../hooks';
import Items from './Items';
import MenuIcon from '@material-ui/icons/Menu';

const HeaderFixed = () => {
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
	const itemcolor = { cursor: 'pointer' };

	return (
		<div>
			{sideBarStatus && (
				<Sidebar open={sideBarStatus} onClose={onSideBarClose} />
			)}

			<header>
				<FixedNavbar fixed shadow>
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
				</FixedNavbar>
			</header>
		</div>
	);
};

export default HeaderFixed;
