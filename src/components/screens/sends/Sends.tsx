import Link from 'next/link'

import Filter from '@/common/Filter/Filter'
import SendsInformation from '@/common/SendsInformation/SendsInformation'
import SendsTable from '@/common/SendsTable/SendsTable'

import Layout from '@/layout/Layout'

import s from './Sends.module.scss'

function Sends() {
	return (
		<Layout title={'Отправки'}>
			<div className={'container-sm'}>
				<div className={s.sends__filter}>
					<Filter></Filter>
				</div>
				<SendsTable></SendsTable>
				<div></div>
				{/*<SendsInformation dashed={false}>*/}
				{/*	<h2 className={s.sends__filter__info}>*/}
				{/*		Здесь будут отображаться ваши отправленные сертификаты. Их можно*/}
				{/*		отправить на странице{' '}*/}
				{/*		<Link href={'/enter'} className={s.sends__filter__link}>*/}
				{/*			«Сертификаты»*/}
				{/*		</Link>*/}
				{/*	</h2>*/}
				{/*</SendsInformation>*/}
				{/*<SendsInformation dashed={true}>*/}
				{/*	<h3 className={s.sends__filter__empty}>*/}
				{/*		К сожалению, подходящих сертификатов не найдено*/}
				{/*	</h3>*/}
				{/*</SendsInformation>*/}
			</div>
		</Layout>
	)
}

export default Sends
