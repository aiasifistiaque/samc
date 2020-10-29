import React from 'react';
import {
	FooterContainerHorizontal as Horizontal,
	FooterContainerVertical as Vertical,
	FooterIconItem as Item,
	Footer as Container,
	FooterItemTitle as ItemTitle,
} from './customcomponent';

export default function Footer() {
	return (
		<Container>
			<Horizontal style={{ backgroundColor: 'whitesmoke', color: 'black' }}>
				<Vertical>
					<ItemTitle>
						Suraiya Ataur Medical <br /> Centre (SAMC)
					</ItemTitle>
					<Item>Chondipur, Bangladesh</Item>
					<Item icon='phone-color'>+1 206-276-0024</Item>
					<Item icon='mail'>samcbangladesh@gmail.com</Item>
				</Vertical>
				{
					// <Vertical>
					// 	<ItemTitle>Events</ItemTitle>
					// 	<Item>Donate</Item>
					// 	<Item>Present Events</Item>
					// 	<Item>Upcoming Events</Item>
					// </Vertical>
				}
				<Vertical>
					<ItemTitle>About Us</ItemTitle>
					<Item to='/history'>Who Are We</Item>
					<Item to='/projects'>What We Do</Item>
					<Item to='/projects'>Our Team</Item>
				</Vertical>
				<Vertical>
					<ItemTitle>Our Projects</ItemTitle>
					<Item to='/project_women_and_children'>
						Healthcare for Women
						<br />
						and Children
					</Item>
					<Item to='/project_empowerment_of_women'>Empowerment of Women</Item>
					<Item to='/project_nursing_school_and_scholarship'>
						Nursing School
					</Item>
				</Vertical>
				<Vertical>
					<ItemTitle>Social Media</ItemTitle>
					<Item icon='facebook' to='https://www.facebook.com/SAMCBangladesh'>
						Facebook
					</Item>
					<Item icon='instagram'>Instagram</Item>
					<Item icon='twitter'>Twitter</Item>
					<Item
						icon='youtube'
						to='https://www.youtube.com/channel/UCCNWTqZFB4c7NlMkzXHaowA'>
						YouTube
					</Item>
				</Vertical>

				<Vertical>
					<ItemTitle>Useful Links</ItemTitle>
					<Item to='/'>Home</Item>
					<Item>Contact Us</Item>
					<Item>FAQ's</Item>
					<Item>Privacy Policy</Item>
				</Vertical>
			</Horizontal>
			<Horizontal className='footer-bottom'>
				<Item>
					<span style={{ color: 'whitesmoke' }}>
						SAMC is a project of Interfaith Community Sanctuary (ICS) which is
						registered with the federal govt. as a 501(c)3 non profit
						organization and is registered with the State of Washington as a
						charity organization.
					</span>
				</Item>
			</Horizontal>
			<Horizontal>
				<Item>
					<span style={{ color: 'whitesmoke' }}>
						Copyright © 2020, Suraiya Ataur Medical Center(SAMC) | All rights
						reserved.
					</span>
				</Item>
			</Horizontal>
		</Container>
	);
}
