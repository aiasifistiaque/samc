import React from 'react';

const History = () => {
	return (
		<>
			<p style={styles.content}>
				Suraiya Ataur Medical Center (SAMC) is a non-profit medical clinic
				situated in the village of Chondipur, Bangladesh. It was established in
				2014 to serve the basic health needs specifically of women and children
				of the village and surrounding rural areas. Many families live below the
				poverty level and access to the closest health facility is a challenge
				because of distance and cost.
			</p>
			<p style={styles.content}>
				SAMC also provides critical education on nutrition, reproductive health
				and hygiene. Classes and workshops are held in the clinic and in the
				adjoining school for women.
			</p>
			<p style={styles.content}>
				Our center is staffed by female salaried professionals. The medical
				doctor is available eight days a month, while a physician’s assistant is
				available for services four days a week. Three staff members help with
				the administration duties and young girls from the nearby school offer
				volunteer services. Serious medical cases which are beyond the scope of
				our center’s services are referred to a local hospital in the area.
				Currently, the clinic sees 800 patients monthly and the numbers continue
				to grow. 
			</p>
			<p style={styles.content}>
				SAMC medical services are essentially free. A nominal fee of five BDT,
				equivalent to less than five cents in USD is charged per doctor visit,
				which covers all costs including any prescribed medications.
			</p>
			<p style={styles.content}>
				SAMC has a motto crafted by the women of Chondipur who feel a sense of
				deep kinship with their clinic: “SAMC – Where Every Patient is Family.”
			</p>
		</>
	);
};

const styles = {
	header: {
		marginBottom: 50,
	},
	content: {
		fontSize: 20,
		color: 'rgba(0, 0, 0, 0.7)',
		textAlign: 'justify',
	},
};

export default History;
