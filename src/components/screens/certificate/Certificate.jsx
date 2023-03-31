import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

import CertificateItem from '@/common/CertificateItem/CertificateItem'
import PageHeader from '@/common/PageHeader/PageHeader'
import PageTitle from '@/common/PageTitle/PageTitle'

import Layout from '@/layout/Layout'

import styles from './Certificate.module.scss'
import data from './data'
import PrimaryButton from '@/components/UI/PrimaryButton/PrimaryButton'
import Tabs from '@/components/UI/Tabs/Tabs'

const Certificate = () => {
	const router = useRouter()
	const items = data
	return (
		<Layout title={'Сертификаты'}>
			<PageHeader title={'Мои сертификаты'} plus={true} buttons={true}>
				<div className={styles.certificate__box}>
					<PageTitle>
						<span className={styles.word}>Мои</span>{' '}
						<span className={styles.up}>с</span>ертификаты
					</PageTitle>
					<Link
						href={'/certificate-info'}
						className={styles.certificate__symbol}
					>
						<svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M12.8336 4.99984C12.8336 4.5396 12.4605 4.1665 12.0003 4.1665C11.54 4.1665 11.167 4.5396 11.167 4.99984V11.1665H5.00033C4.54009 11.1665 4.16699 11.5396 4.16699 11.9998C4.16699 12.4601 4.54009 12.8332 5.00033 12.8332H11.167V18.9998C11.167 19.4601 11.54 19.8331 12.0003 19.8331C12.4605 19.8331 12.8336 19.4601 12.8336 18.9998V12.8332H19.0003C19.4606 12.8332 19.8337 12.4601 19.8337 11.9998C19.8337 11.5396 19.4606 11.1665 19.0003 11.1665H12.8336V4.99984Z'
								fill='white'
							/>
						</svg>
					</Link>
				</div>
				<Tabs />
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
			{items.length > 0 && (
				<div className={styles.empty}>
					<div className={styles.empty__create__title}>
						Здесь будут отображаться ваши созданные сертификаты
					</div>
					<PrimaryButton
						className={styles.empty__create__btn}
						size={'medium'}
						onClick={() => {
							router.push('/certificate-info')
						}}
					>
						Создать <span className={styles.empty__word}>сертификат</span>
					</PrimaryButton>
				</div>
			)}
		</Layout>
	)
}

export default Certificate
