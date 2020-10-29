import React from 'react';
import { Col, Image, Row, ListGroup } from 'react-bootstrap';

const HomeDetails = () => {
	return (
		<>
			<Row
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContents: 'center',
				}}>
				<Col md={6}>
					<Image
						src={window.location.origin + '/samc_history.JPG'}
						alt='aslidj'
						fluid
					/>
				</Col>
				<Col md={6}>
					<ListGroup>
						<ListGroup.Item>
							<h3>Learn More About Us</h3>
						</ListGroup.Item>
						<ListGroup.Item>
							Suraiya Ataur Medical Center (SAMC) is a non-profit medical clinic
							situated in the village of Chondipur, Bangladesh. It was
							established in 2014 to serve the basic health needs specifically
							of women and children of the village and surrounding rural areas.
							Many families live below the poverty level and access to the
							closest health facility is a challenge because of distance and
							cost.
						</ListGroup.Item>
						<ListGroup.Item>
							<a style={{ cursor: 'pointer' }}>learn mode</a>
						</ListGroup.Item>
					</ListGroup>
				</Col>
			</Row>
		</>
	);
};

export default HomeDetails;
