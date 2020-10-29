import React from 'react';
import { GoogleMap, withScriptjs } from 'react-google-maps';

const Map = () => {
	const apiKey = 'AIzaSyCWqWnsmOVGg9MFjqQrsuM4wBtOfsSXDjg';
	return (
		<GoogleMap
			defaultZoom={10}
			defaultCenter={{ lat: 23.7225706, lng: 90.3102403 }}
		/>
	);
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;
