import React from 'react'

import Button from '@/common/Button/Button'
import PageButtons from '@/common/PageButtons/PageButtons'
import PageHeader from '@/common/PageHeader/PageHeader'
import PageTitle from '@/common/PageTitle/PageTitle'

import Layout from '@/layout/Layout'

import styles from './certificateCreate.module.scss'

const CreateCertificate = () => {
	return (
		<Layout title={'Созданий сертификата'}>
			<PageHeader>
				<PageTitle>
					<span className={styles.certificate__word}>Мои</span>
					<span className={styles.certificate__up}> с</span>ертификаты
				</PageTitle>
				<PageButtons />
			</PageHeader>
		</Layout>
	)
}

export default CreateCertificate
