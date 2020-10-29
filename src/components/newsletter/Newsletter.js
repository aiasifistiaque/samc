import React from 'react';
import { Container, Left, Right, Item } from './Structure';
import Seperator from '../customcomponent/Seperator';

export default function Newsletter() {
	return (
		<Container>
			<Left>
				<Item>
					Subscribe to our Newsletter and get exclusive updates on our work
				</Item>
			</Left>
			<Seperator color='whitesmoke' />
			<Right>
				<Item>Enter your details</Item>
				<input className='nl-form' placeholder='Your Email*' />
				{
					// <div className='samc-newsletter-button' style={{ marginTop: '2rem' }}>
					// 	<a>SUBSCRIBE</a>
					// </div>
				}

				<button className='nl-button'>Subscribe</button>
			</Right>
		</Container>
	);
}
