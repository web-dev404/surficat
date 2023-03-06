import Image from 'next/image'

import Button from '@/common/Button/Button'

import Layout from '@/layout/Layout'

const Home = () => {
	return (
		<Layout title={'Главная'}>
			<Button>subscribe</Button>
			<Image
				src={'/img/registration.jpg'}
				alt={'registration'}
				width={100}
				height={100}
			/>
		</Layout>
	)
}
export default Home
