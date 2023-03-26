import React from 'react'

import Certeficate from '@/common/Certeficate/Certeficate'

import Preview from '@/layout/Preview'

const CerteficatePreview = () => {
	const data = {
		number: 5761431364,
		date: '14.06.2024',
		link: 'https://www.google.com',
		out: true,
		use: false
	}
	return (
		<Preview title={'Предпросмотр'}>
			<Certeficate data={data} isPreview={true} />
		</Preview>
	)
}

export default CerteficatePreview
