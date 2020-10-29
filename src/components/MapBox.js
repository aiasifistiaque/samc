import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { mapboxApiKey } from '../constants';
import useInView from 'react-cool-inview';

const MapBox = () => {
	const screenY = window.scrollY;
	const mapTop = useRef();
	const mapToken = mapboxApiKey;
	const [map, setMap] = useState(null);
	const mapContainer = useRef(null);
	const area = {
		seattle: [-122.303, 47.546],
		chondipur: [90.3041624, 23.7236246],
	};
	const areaFit = {
		bangladessh: [
			[89.329, 27.043],
			[94.454, 21.124],
		],
		dhaka: [
			[90.292, 23.66],
			[90.565, 23.8],
		],
		chondipur: [
			[88.968, 24.746],
			[88.948, 24.786],
		],
	};

	const [vis, setVis] = useState(false);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		mapboxgl.accessToken = mapboxApiKey;
		const initializeMap = async ({ setMap, mapContainer }) => {
			const map = await new mapboxgl.Map({
				container: mapContainer.current,
				style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
				center: area.seattle,
				zoom: 9,
				interactive: false,
				//bearing: 27,
				//pitch: 45,
			});

			var marker = new mapboxgl.Marker()
				.setLngLat([88.955233, 24.764955])
				.addTo(map);

			var popup = new mapboxgl.Popup({ closeOnClick: false })
				.setLngLat([88.955233, 24.764955])
				.setHTML('<p>Chondipur</p>')
				.addTo(map);

			map.on('load', () => {
				setMap(map);
				map.resize();
			});

			if (map) setLoaded(true);
		};

		if (!map) initializeMap({ setMap, mapContainer });
	}, [map]);

	const [top, setTop] = useState(0);
	const [secondWave, setSecondWave] = useState(false);
	const [firseWave, setFirstWave] = useState(false);
	const [wave, setWave] = useState(false);

	useEffect(() => {
		// window.addEventListener('scroll', () => {
		// 	if (wave) {
		// 		if (window.scrollY > top + window.innerHeight) {
		// 			if (map) {
		// 				map.fitBounds(areaFit.chondipur);
		// 				setWave(false);
		// 			}
		// 		}
		// 	}
		// });
	}, [top, map, wave]);
	const [interval, setInterval] = useState(0);
	const { ref } = useInView({
		threshold: 0.4, // Default is 0
		onEnter: () => {
			map && map.fitBounds(areaFit.bangladessh, { options: { linear: true } });
		},
		onLeave: () => {
			map && map.fitBounds(areaFit.chondipur, { options: { linear: true } });
		},
	});

	const reload = useRef();
	// const one = useRef(null);
	// const two = useRef(null);

	// function isElementOnScreen(id) {
	// 	//var element = document.getElementById(id);
	// 	var bounds = id.getBoundingClientRect();
	// 	return bounds.top < window.innerHeight && bounds.bottom > 0;
	// }

	// var chapters = {
	// 	bangladesh: areaFit.bangladessh,
	// 	chondipur: areaFit.chondipur,
	// };

	// var activeChapterName = 'bangladesh';
	// function setActiveChapter(chapterName) {
	// 	map.fitBounds(chapters[chapterName]);
	// 	activeChapterName = chapterName;
	// }

	useEffect(() => {
		// window.addEventListener('scroll', () => {
		// 	var chapterNames = Object.keys(chapters);
		// 	for (var i = 0; i < chapterNames.length; i++) {
		// 		var chapterName = chapterNames[i];
		// 		if (isElementOnScreen(chapterName)) {
		// 			setActiveChapter(chapterName);
		// 			break;
		// 		}
		// 	}
		// });
	}, []);

	return (
		<div>
			<div
				style={{
					width: '100%',
					height: '260vh',
					display: 'flex',
					alignItems: 'flex-start',
					justifyContent: 'flex-start',
					flexDirection: 'row',
				}}>
				{
					<div
						style={{
							width: '2%',
							display: 'flex',
							flexDirection: 'column',
							height: '100%',
						}}>
						<div
							ref={ref}
							style={{ backgroundColor: 'whitesmoke', height: '50%' }}></div>
						<div
							//ref={two => isElementOnScreen(two)}
							style={{ backgroundColor: '#f4f5f7', height: '50%' }}></div>
					</div>
				}
				<div ref={el => (mapContainer.current = el)} style={styles} />
			</div>
			<div></div>
		</div>
	);
};

const styles = {
	width: '99vw',
	height: '100vh',
	position: 'sticky',
	top: '10vh',
};

export default MapBox;
