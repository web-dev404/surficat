import Link from 'next/link'
import React from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

import Button from '@/common/Button/Button'
import CertificateItem from '@/common/CertificateItem/CertificateItem'
import PageButtons from '@/common/PageButtons/PageButtons'
import PageHeader from '@/common/PageHeader/PageHeader'
import PageTitle from '@/common/PageTitle/PageTitle'

import Layout from '@/layout/Layout'

import styles from './Certificate.module.scss'
import data from './data'

const Certificate = () => {
	const items = data
	return (
		<Layout title={'Сертификаты'}>
			<PageHeader title={'Мои сертификаты'} plus={true} buttons={true}>
				<div className={styles.certificate__box}>
					<PageTitle>
						<span className={styles.word}>Мои</span>{' '}
						<span className={styles.up}>с</span>ертификаты
					</PageTitle>
					<div className={styles.certificate__symbol}>
						<img src='/icons/plus-icon.svg' alt='symbol plus' />
					</div>
				</div>
				<PageButtons />
			</PageHeader>
			<div className={styles.certificate__cards}>
				{items.length > 0 && (
					<>
						{items.map((item, index) => (
							<CertificateItem
								key={item.id}
								title={item.text}
								image={item.photo}
								id={item.id}
								price={item.price}
							/>
						))}
						<div
							className={`${styles.certificate__item} ${styles.certificate__item__create}`}
						>
							<div className={styles.certificate__create__box}>
								<div className={styles.certificate__create__new}>
									Создать новый сертификат
								</div>
								<Link
									className={`${styles.certificate__symbol} ${styles.certificate__symbol__add}`}
									href={'/certificate-info'}
								>
									<img src='/icons/plus-icon.svg' alt='symbol plus' />
								</Link>
							</div>
						</div>
					</>
				)}
			</div>
			<Swiper spaceBetween={12} slidesPerView={1.05} className={styles.swiper}>
				{items.length > 0 &&
					items.map((item, index) => (
						<SwiperSlide key={item.id} className={styles.swiper__slide}>
							<CertificateItem
								key={item.id}
								title={item.text}
								image={item.photo}
								id={item.id}
								price={item.price}
							/>
						</SwiperSlide>
					))}
			</Swiper>
			{!items.length > 0 && (
				<div className={styles.empty}>
					<div className={styles.empty__create__title}>
						Здесь будут отображаться ваши созданные сертификаты
					</div>
					<Button className={styles.empty__create__btn}>
						Создать <span className={styles.empty__word}>сертификат</span>
					</Button>
				</div>
			)}
		</Layout>
	)
}

export default Certificate
