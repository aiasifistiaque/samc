import React from 'react';
import Dash from './Dash';
import { Content } from './customcomponent';
import { useSize } from '../hooks';
import { colors } from '../constants';

export const CoverImage = ({ children, src, heading, subHeading, jump }) => {
	return (
		<div
			style={{ backgroundImage: `url(${src})` }}
			className='custom-cover-image'>
			<div className='custom-cover-image-container'>
				<div className='container-vertical-center' style={{ flex: 1 }}>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							flex: 3,
							alignItems: 'center',
							justifyContent: 'center',
							gap: '15%',
						}}>
						<div className='samc-image-heading container-vertical-center'>
							{heading}
							<Dash />
						</div>

						<div className='samc-image-sub-heading'>{subHeading}</div>
					</div>
					<div
						className='container-vertical-center'
						onClick={() => jump('body')}>
						<p style={{ lineHeight: 0, fontSize: 14, fontWeight: 300 }}>
							Continue
						</p>
						<i
							style={{ cursor: 'pointer' }}
							className='fa fa-angle-down fa-3x'
							aria-hidden='true'></i>
					</div>
				</div>
			</div>
		</div>
	);
};

export const CoverContainer = ({ children, style }) => {
	return (
		<div className='custom-cover-image-container' style={style}>
			{children}
		</div>
	);
};

export const CroppedCover = ({ src, heading, subHeading, jump, color }) => {
	const size = useSize();
	return (
		<div>
			<div
				style={{ backgroundImage: `url(${src})` }}
				className='samc-teampage-cover-image'>
				<div className='cropped-cover-contents'>
					<p>Continue</p>
					<i
						style={{ cursor: 'pointer' }}
						onClick={() => jump('body')}
						className='fa fa-angle-down fa-3x'
						aria-hidden='true'></i>
				</div>
			</div>
			<div
				className='cover-border'
				style={{
					backgroundColor: color || 'steelblue',
				}}>
				<Content style={{ color: 'whitesmoke', fontSize: 25, fontWeight: 300 }}>
					<center>{heading}</center>
				</Content>
			</div>
		</div>
	);
};

export const LeftIndentCover = ({ src, heading, subHeading, jump }) => {
	return (
		<div
			style={{ backgroundImage: `url(${src})` }}
			className='custom-cover-image'>
			<div className='custom-cover-image-container'>
				<div className='container-vertical' style={{ flex: 1 }}>
					<div className='left-indent-cover-container'>
						<div
							className='samc-image-heading container-vertical-center'
							style={{ margin: 0 }}>
							{heading}
						</div>
						<p
							style={{
								marginBottom: 0,
								fontSize: 20,
								fontWeight: 600,
								lineHeight: 1,
								paddingLeft: 5,
								color: colors.main,
							}}>
							{subHeading}
						</p>

						<div className='samc-image-sub-heading'></div>
					</div>
					<div
						className='container-vertical-center'
						onClick={() => jump('body')}>
						<p style={{ lineHeight: 0, fontSize: 14, fontWeight: 300 }}>
							Continue
						</p>
						<i
							style={{ cursor: 'pointer' }}
							className='fa fa-angle-down fa-3x'
							aria-hidden='true'></i>
					</div>
				</div>
			</div>
		</div>
	);
};
