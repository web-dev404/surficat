import React from 'react'

import Back from '@/common/Back/Back'
import FaqList from '@/common/FaqList/FaqList'
import FaqSide from '@/common/FaqSide/FaqSide'
import PageHeader from '@/common/PageHeader/PageHeader'
import PageTitle from '@/common/PageTitle/PageTitle'

import Layout from '@/layout/Layout'

import s from './Faq.module.scss'

const Faq = () => {
	return (
		<Layout title={'Часто задаваемые вопросы'}>
			<div className={'container-esm'}>
				<Back className={s.faq__back} />
				<PageHeader>
					<PageTitle>Частые вопросы</PageTitle>
				</PageHeader>
				<div className={s.faq__row}>
					<FaqList />
					<FaqSide />
				</div>
			</div>
		</Layout>
	)
}

export default Faq
