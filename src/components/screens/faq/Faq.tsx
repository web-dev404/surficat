import React from 'react'

import FaqList from '@/common/FaqList/FaqList'
import FaqSide from '@/common/FaqSide/FaqSide'

import Layout from '@/layout/Layout'

import s from './Faq.module.scss'

const Faq = () => {
	return (
		<Layout title={'Часто задаваемые вопросы'}>
			<div className={'container-esm'}>
				<div className={s.faq__row}>
					<FaqList />
					<FaqSide />
				</div>
			</div>
		</Layout>
	)
}

export default Faq
