import React, { useState } from 'react';
import { colors, css } from '../constants';
import Page from '../components/Page';
import { scroller } from 'react-scroll';
import { useSize } from '../hooks';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import { LeftIndentCover, CroppedCover } from '../components/Hero';
import FindUs from '../components/FindUs';
import Newsletter from '../components/newsletter/Newsletter';

const HistoryPage = () => {
	const screen = useSize();
	const [visible, setVisible] = useState(false);
	const jump = to => {
		scroller.scrollTo(to, {
			smooth: true,
			offset: -100,
		});
		setVisible(false);
	};
	return (
		<Page>
			<div className='container-vertical'>
				<CroppedCover
					src='historyPage.jpeg'
					heading='History'
					subHeading='The Journey of SAMC'
					jump={jump}
				/>

				<div className='container-horizontal'>
					<div className='samc-history-content-container' id='body'>
						<p className='samc-history-content' style={styles.contentHeader}>
							<center>Who we are</center>
						</p>

						<div className='samc-history-content'>
							<div id='story'>
								<h3 style={{ fontSize: 35 }}>Our Story</h3>
								<p style={styles.p}>
									Suraiya Ataur Medical Center (SAMC) is a non-profit medical
									clinic situated in the village of Chondipur, Bangladesh. It
									was established in 2014 to serve the basic health needs
									specifically of women and children of the village and
									surrounding rural areas. Many families live below the poverty
									level and access to the closest health facility is a challenge
									because of distance and cost.
								</p>
								<p style={styles.p}>
									SAMC also provides critical education on nutrition,
									reproductive health and hygiene. Classes and workshops are
									held in the clinic and in the adjoining school for women.
								</p>
								<p style={styles.p}>
									Our center is staffed by female salaried professionals. The
									medical doctor is available eight days a month, while a
									physician’s assistant is available for services four days a
									week. Three staff members help with the administration duties
									and young girls from the nearby school offer volunteer
									services. Serious medical cases which are beyond the scope of
									our center’s services are referred to a local hospital in the
									area. Currently, the clinic sees 800 patients monthly and the
									numbers continue to grow.
								</p>
								<p style={styles.p}>
									SAMC medical services are essentially free. A nominal fee of
									five BDT, equivalent to less than five cents in USD is charged
									per doctor visit, which covers all costs including any
									prescribed medications.
								</p>
								<p style={styles.p}>
									SAMC has a motto crafted by the women of Chondipur who feel a
									sense of deep kinship with their clinic: “SAMC – Where Every
									Patient is Family.”
								</p>
							</div>
							<h3 id='history' style={{ fontSize: 35 }}>
								History of SAMC
							</h3>
							<div>
								<p>
									The medical clinic is rooted in the vision and work of Maulana
									Hedayatullah(1881-1945) and his beloved wife Sayeda Mehrunnesa
									(1901-1951). Maulana Hedayatullah was a noted scholar, teacher
									and healer. He had spent 15 years of his adult life away from
									home absorbed in intense study and meditation with teachers in
									Northern India. 
								</p>
								<p>
									Maulana Hedayatullah ministered tirelessly to the villagers of
									northern Bengal and in his lifetime grew a large following. He
									travelled extensively. Often his wife joined him in his work
									of healing through herbal medicine, spiritual practices and
									prayers.
								</p>
							</div>
							<div id='1967'>
								<h3>1967</h3>
								<p>
									Both husband and wife believed ardently in the critical need
									to empower women through education. They worked hard to
									overcome patriarchal traditions. To a conservative audience
									they used scripture and common sense to explain that female
									education would benefit immensely family and society.
									Consequently, a school for women was established in .. 
									supported by villagers and funded primarily from sales of
									mangoes from the orchards of the Rahman family.
								</p>
							</div>
							<div id='1971'>
								<h3>1971</h3>
								<p>
									Upon their death, the responsibility for the school fell on
									the shoulders of their eldest son, Muhammad Ataur Rahman, who
									chose to become a diplomat. Along with his wife Suraiya, they
									travelled all over the world. Ataur Rahman had the distinction
									of becoming Ambassador of two countries in his lifetime:
									first, representing Pakistan and when in 1971 the country
									split in two, Ambassador of Bangladesh.  For over four decades
									they supported from overseas the village school and a number
									of other village projects from their personal funds, assets
									and connections. Throughout their career they spent every
									single vacation in their ancestral village taking care of the
									needs of the school and other community ventures.
								</p>
							</div>
							<div id='1990'>
								<h3>1990</h3>
								<p>
									In 1990, both Ataur and Suraiya Rahman passed away in the same
									year. Their children, Kamal, Jamal and Aysu took over the work
									of caretaking the school. From 1992 to 2000 the Interfaith
									Community Sanctuary in Seattle sustained and grew the school
									through fundraising and donations. Because of the generosity
									of well-wishers in Seattle, the School for Women in Chondipur
									is today a flourishing institution, fully accredited and
									supported financially by the Government.
								</p>
							</div>
							<div id='1993'>
								<h3>1993</h3>
								<p>
									From 1993 onwards, Interfaith Community Sanctuary continued to
									raise funds through community donations annually to support
									the missions of the school. These fundraisers and generous
									donors were culminated into a project called “Friends of
									Mohdipur,” which has now become the Suraiya Ataur Medical
									Center..
								</p>
							</div>
							<div id='2012'>
								<h3>2012</h3>
								<p>
									Around 2012, Aysu decided to finally chase her dream of
									expanding the vision of her grandparents and build on the work
									of her parents. Aysu, who is a medical doctor, felt inspired
									to open a medical clinic for women and children. Thanks to the
									continued support of our local community within the Interfaith
									Community Sanctuary, we were able to begin raising funds for
									this new &#39;project.
								</p>
							</div>
							<div id='2014'>
								<h3>2014</h3>
								<p>
									In 2014, Aysu’s older brother Kamal who owns businesses in
									Dhaka, Bangladesh acquired land adjacent to the school, and
									commenced work on building a medical clinic. He and his staff
									continues to provide financial help and operational expertise.
								</p>
								<p>
									Since 2014, Interfaith Community Sanctuary has been
									extraordinarily active in supporting and expanding the medical
									clinic. Through regular fundraising and generous donations,
									the clinic is able to serve an ever growing number of women
									and children not only from Chondipur but also from neighboring
									villages.
								</p>
								<p>
									Enthused and excited by the palpable benefits of the clinic,
									village elders in Chondipur requested the Rahman family to
									build a nursing school. This institution would offer much
									needed professional training and employment to girls
									graduating from the school, and to other women in neighboring
									villages.  Land has already been purchased in close proximity
									to school and clinic, and construction of nursing school has
									started. There are ongoing talks with health officials to
									secure government accreditation. It is anticipated that this
									phased project of the ambitious nursing school will take two
									years to complete.
								</p>
							</div>
						</div>
					</div>
					{screen === 'extraLarge' ? (
						<SideNav className='samc-history-sidebar' jump={jump} />
					) : (
						<div>
							{visible && (
								<SideNav className='samc-history-sidebar-small' jump={jump} />
							)}
							<Fab
								onClick={() => setVisible(!visible)}
								style={{ position: 'fixed', right: '10%', bottom: '10%' }}
								variant='extended'>
								<NavigationIcon />
							</Fab>
						</div>
					)}
				</div>
			</div>
			<Newsletter />
			<FindUs />
		</Page>
	);
};

const SideNav = ({ jump, className }) => {
	return (
		<div className={className}>
			<a onClick={() => jump('story')}>Our Story</a>
			<a onClick={() => jump('history')}>History</a>
			<div
				style={{ display: 'flex', flexDirection: 'column', padding: '0 10px' }}>
				<a href='#' onClick={() => jump('1967')}>
					1967
				</a>
				<a href='#' onClick={() => jump('1971')}>
					1971
				</a>
				<a href='#' onClick={() => jump('1990')}>
					1990
				</a>
				<a href='#' onClick={() => jump('1993')}>
					1993
				</a>
				<a href='#' onClick={() => jump('2012')}>
					2012
				</a>
				<a href='#' onClick={() => jump('2014')}>
					2014
				</a>
			</div>
		</div>
	);
};

// {const Dash = ({ color }) => {
// 	return (
// 		<div
// 			style={{
// 				backgroundColor: color || 'white',
// 				height: 8,
// 				width: 25,
// 			}}></div>
// 	);
// };}

const styles = {
	imageTextContainer: {
		height: '100%',
		width: '100%',
		backgroundColor: 'rgba(0,0,0,.3)',
	},
	titleContainer: {
		backgroundColor: colors.main,
		height: 60,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		boxShadow: css.boxShadow,
	},
	title: {
		color: 'white',
		fontSize: 30,
		fontWeight: 500,
		margin: '10px 0',
	},
	p: { margin: '1rem 0' },
	contentHeader: {
		fontSize: 43,
		fontWeight: 500,
		color: 'rgba(0,0,0,.7)',
	},
};

export default HistoryPage;
