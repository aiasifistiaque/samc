import React from 'react';
import Page from '../components/Page';
import { Container } from 'react-bootstrap';
import Donation from '../components/donation';
import Newsletter from '../components/newsletter/Newsletter';
import { css, colors } from '../constants/index';

const Whoarewe = () => {
	return (
		<Page style={{ backgroundColor: 'whitesmoke' }}>
			<div
				style={{
					backgroundColor: 'white',
					boxShadow: '0 4px 8px -2px rgba(0,0,0,.2)',
				}}>
				<Container>
					<div
						fluid
						style={{
							backgroundImage: `url(/who.jpeg)`,
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							backgroundPosition: 'center',
							backgroundSize: 'cover',
							height: '40vh',
							borderBottomRightRadius: 6,
							borderBottomLeftRadius: 6,
						}}></div>
					<div
						style={{
							alignSelf: 'center',
							padding: '20px 0',
						}}>
						<h3 style={{ textAlign: 'center' }}>Who We Are</h3>
					</div>
				</Container>
			</div>

			<Container style={{ marginTop: 50 }}>
				<h2>About SAMC</h2>
			</Container>

			<Container
				style={{
					marginTop: '20px',
					marginBottom: '50px',
					padding: '50px 50px',
					borderRadius: 6,
					boxShadow: 'border-box',
					backgroundColor: 'white',
					boxShadow: css.boxShadow,
				}}>
				<p style={styles.p}>
					Suraiya Ataur Medical Center (SAMC) is a non-profit medical clinic
					situated in the village of Chondipur, Bangladesh. It was established
					in 2014 to serve the basic health needs specifically of women and
					children of the village and surrounding rural areas. Many families
					live below the poverty level and access to the closest health facility
					is a challenge because of distance and cost.
				</p>
				<p style={styles.p}>
					SAMC also provides critical education on nutrition, reproductive
					health and hygiene. Classes and workshops are held in the clinic and
					in the adjoining school for women.
				</p>
				<p style={styles.p}>
					Our center is staffed by female salaried professionals. The medical
					doctor is available eight days a month, while a physician’s assistant
					is available for services four days a week. Three staff members help
					with the administration duties and young girls from the nearby school
					offer volunteer services. Serious medical cases which are beyond the
					scope of our center’s services are referred to a local hospital in the
					area. Currently, the clinic sees 800 patients monthly and the numbers
					continue to grow.
				</p>
				<p style={styles.p}>
					SAMC medical services are essentially free. A nominal fee of five BDT,
					equivalent to less than five cents in USD is charged per doctor visit,
					which covers all costs including any prescribed medications.
				</p>
				<p style={styles.p}>
					SAMC has a motto crafted by the women of Chondipur who feel a sense of
					deep kinship with their clinic: “SAMC – Where Every Patient is
					Family.”
				</p>
			</Container>
			<Container
				style={{
					backgroundColor: 'white',
					borderRadius: 6,
					marginBottom: 40,
					boxShadow: css.boxShadow,
				}}>
				<Donation />
			</Container>
			<Container
				style={{
					backgroundColor: colors.main,
					borderRadius: 6,
					boxShadow: css.boxShadow,
				}}>
				<Newsletter />
			</Container>
			<br />
			<br />
		</Page>
	);
};

const styles = {
	p: { textAlign: 'justify', fontSize: 20, lineHeight: 1.4 },
};

export default Whoarewe;
