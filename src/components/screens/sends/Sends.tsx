import Link from 'next/link'

import Filter from '@/common/Filter/Filter'
import PageButtons from '@/common/PageButtons/PageButtons'
import PageHeader from '@/common/PageHeader/PageHeader'
import PageTitle from '@/common/PageTitle/PageTitle'
import SendsInformation from '@/common/SendsInformation/SendsInformation'
import SendsTable from '@/common/SendsTable/SendsTable'

import Layout from '@/layout/Layout'

import s from './Sends.module.scss'
import data from '@/components/common/SendsTable/data'

function Sends() {
	const items = data
	return (
		<Layout title={'Отправки'}>
			<PageHeader>
				<PageTitle>Отправки</PageTitle>
				<PageButtons mob={false} />
			</PageHeader>
			<div className={'container-sm'}>
				{items.length > 0 && (
					<>
						<div className={s.sends__filter}>
							<Filter></Filter>
						</div>
						<SendsTable></SendsTable>
					</>
				)}
				{!(items.length > 0) && (
					<SendsInformation dashed={false}>
						<h2 className={s.sends__filter__info}>
							Здесь будут отображаться ваши отправленные сертификаты. Их можно
							отправить на странице{' '}
							<Link href={'/enter'} className={s.sends__filter__link}>
								«Сертификаты»
							</Link>
						</h2>
					</SendsInformation>
				)}
			</div>
		</Layout>
	)
}

export default Sends
