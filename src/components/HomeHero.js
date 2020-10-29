import React from 'react';

const HomeHero = ({ jump }) => {
	return (
		<CoverImage src='/landing.jpg'>
			<ImageContainer>
				<HeadingContainer>
					<Heading>Suraiya Ataur Medical Center</Heading>
					<div>
						<SubHeading>
							<center>
								We work alongside the community of a rural village in Bangladesh
								to empower women and children through healthcare and education
							</center>
						</SubHeading>
						<HomeHeroButton
							to='/donate'
							tag='Your donations make our work possible'>
							DONATE
						</HomeHeroButton>
					</div>
				</HeadingContainer>
				<i
					style={{ cursor: 'pointer' }}
					onClick={() => jump('body')}
					className='fa fa-angle-down fa-3x'
					aria-hidden='true'></i>
			</ImageContainer>
		</CoverImage>
	);
};

//structure starts below
const CoverImage = ({ children, src }) => {
	return (
		<div
			style={{ backgroundImage: `url(${src})` }}
			className='samc-home-cover-image'>
			{children}
		</div>
	);
};

const ImageContainer = ({ children }) => {
	return <div className='samc-image-container'>{children}</div>;
};

const HeadingContainer = ({ children }) => {
	return <div className='samc-main-heading-container'>{children}</div>;
};

const Heading = ({ children }) => {
	return (
		<div>
			<div className='samc-main-heading'>{children}</div>
			<center>
				<div
					style={{
						width: '10%',
						border: '3px solid crimson',
						boxShadow: '0 0 10px rgba(0,0,0,.1)',
					}}
				/>
			</center>
		</div>
	);
};

const SubHeading = ({ children }) => {
	return <div className='samc-sub-heading'>{children}</div>;
};

const HomeHeroButton = ({ children, to, tag }) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				margin: '10px 0px',
			}}>
			<a className='home-donate-button-in-header' href={to}>
				{children}
			</a>
			<p
				style={{
					fontSize: 14,
					fontWeight: 200,
					marginTop: 10,
					textAlign: 'center',
					textShadow: '0 0 5px rgba(0,0,0,1)',
				}}>
				Your donations make our <br /> work possible
			</p>
		</div>
	);
};

export default HomeHero;
