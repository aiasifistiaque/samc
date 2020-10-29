import React, { useState } from 'react';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

const ProjectImages = props => {
	const { images } = props;
	const length = props.images.length;
	const [onScreen, setOnScreen] = useState(0);
	return (
		<div>
			<div className='project-pictures'>
				<NavigateBeforeIcon
					onClick={() => onScreen !== 0 && setOnScreen(onScreen - 1)}
					className='button-image-next'
				/>
				<img src={images[onScreen].src} />

				<NavigateNextIcon
					onClick={() => onScreen !== length - 1 && setOnScreen(onScreen + 1)}
					className='button-image-next'
				/>
			</div>
			<p
				style={{
					marginTop: 10,
					lineHeight: 1,
					fontSize: 14,
					fontWeight: 400,
					textAlign: 'center',
					color: 'black',
					textDecorationLine: 'underline',
				}}>
				Image {onScreen + 1}/{length}: {images[onScreen].caption}
			</p>
		</div>
	);
};

export default ProjectImages;
