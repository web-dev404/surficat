import clsx from 'clsx'
import Image from 'next/image'
import React, { useState } from 'react'

import Back from '@/common/Back/Back'
import Currency from '@/common/Currency/Currency'
import Modal from '@/common/Modal/Modal'
import ModalSubTitle from '@/common/ModalSubtitle/ModalSubTitle'
import ModalTitle from '@/common/ModalTitle/ModalTitle'
import PageHeader from '@/common/PageHeader/PageHeader'
import PageTitle from '@/common/PageTitle/PageTitle'
import TextArea from '@/common/TextArea/TextArea'
import TitleBackButton from '@/common/TitleBackButton/TitleBackButton'
import WarnBlock from '@/common/WarnBlock/WarnBlock'

import Layout from '@/layout/Layout'

import styles from './cerrtificateInfo.module.scss'
import Input from '@/components/UI/Input/Input'
import OutlineButton from '@/components/UI/OutlineButton/OutlineButton'
import PrimaryButton from '@/components/UI/PrimaryButton/PrimaryButton'

const CertificateInfo = () => {
	const [area, setArea] = useState(false)
	const [showModal, setShowModal] = useState(false)
	const [isCreate, setCreate] = useState(false)
	return (
		<Layout title={'Новый сертификат'}>
			<div className={styles.container__info}>
				<div className={styles.info__inner}>
					<Back className={styles.back}></Back>
					<PageHeader>
						<div className={'flex-center'}>
							<TitleBackButton />
							<PageTitle>Новый сертификат</PageTitle>
						</div>
					</PageHeader>
					<form className={styles.form}>
						<h3 className={styles.form__title}>Основная информация</h3>
						<p className={styles.form__subtitle}>
							Вся указанная информация будет отображаться в сертификате и
							публично доступна тем, у кого есть ссылка.
						</p>
						<Input hide={false} className={styles.form__input}>
							Название сертификата
						</Input>
						<p className={styles.form__text}>
							Можно не писать «Подарочный сертификат» — это будет указано
							автоматически. Пример названия: «Семейная фотосессия в студии»
						</p>
						<TextArea className={styles.textArea}>
							Описание <span className={styles.form__star}>*</span>
						</TextArea>
						<p className={styles.form__text}>
							Тут вы можете указать условия использования сертификата или
							подробно рассказать о компании, сделав сертификат более ценным для
							получателя.
						</p>
						<div className={styles.form__box}>
							<Input hide={false} className={styles.form__box__input}>
								Укажите номинал (если нужно)
							</Input>
							<Currency disabled={true} />
						</div>
					</form>
					<div className={styles.info__download}>
						<h3 className={styles.info__download__title}>
							Изображения слайдера
						</h3>
						<p className={styles.form__subtitle}>
							Вы можете загрузить в слайдер сертификата до 3х квадратных
							изображений, в формате .jpeg или .png. Вес каждого файла не более
							2 мб.
						</p>
						<OutlineButton size={'medium'}>
							<svg
								width='25'
								height='24'
								viewBox='0 0 25 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M20 14.5V17.8333C20 18.2754 19.8244 18.6993 19.5118 19.0118C19.1993 19.3244 18.7754 19.5 18.3333 19.5H6.66667C6.22464 19.5 5.80072 19.3244 5.48816 19.0118C5.17559 18.6993 5 18.2754 5 17.8333V14.5'
									stroke='#232124'
									strokeWidth='1.7'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M8.3335 10.3335L12.5002 14.5002L16.6668 10.3335'
									stroke='#232124'
									strokeWidth='1.7'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M12.5 14.5V4.5'
									stroke='#232124'
									strokeWidth='1.7'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
							<span>Загрузить</span>
						</OutlineButton>
					</div>

					<div className={styles.info__company}>
						<h3 className={styles.info__company__title}>
							Информация о компании и контакты <span>*</span>
						</h3>
						<p className={styles.form__subtitle}>
							Выберите компанию и ее контакты, которые нужно показывать клиенту
							в сертификате (блок «Связаться»).
						</p>
						<OutlineButton
							onClick={() => {
								setShowModal(true)
							}}
							className={styles.info__company__btn + ' ' + styles.addIcon}
							size={'medium'}
						>
							<svg
								width='25'
								height='24'
								viewBox='0 0 25 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M13.3336 4.99984C13.3336 4.5396 12.9605 4.1665 12.5003 4.1665C12.04 4.1665 11.667 4.5396 11.667 4.99984V11.1665H5.50033C5.04009 11.1665 4.66699 11.5396 4.66699 11.9998C4.66699 12.4601 5.04009 12.8332 5.50033 12.8332H11.667V18.9998C11.667 19.4601 12.04 19.8331 12.5003 19.8331C12.9605 19.8331 13.3336 19.4601 13.3336 18.9998V12.8332H19.5003C19.9606 12.8332 20.3337 12.4601 20.3337 11.9998C20.3337 11.5396 19.9606 11.1665 19.5003 11.1665H13.3336V4.99984Z'
									fill='#232124'
								/>
							</svg>
							<span>Создать компанию</span>
						</OutlineButton>
						<WarnBlock>
							Необходимо указать информацию о компании и контакты
						</WarnBlock>
					</div>
					<div className={styles.info__create}>
						<p
							className={clsx(styles.form__subtitle, styles.form__subtitleEnd)}
						>
							Создавая сертификат, вы подтверждаете, что ознакомились с
							<a href='#'> пользовательским соглашением</a> и принимаете его
							условия.
						</p>
						<PrimaryButton
							onClick={() => {
								setCreate(true)
							}}
							className={styles.create}
						>
							Создать сертификат
						</PrimaryButton>
					</div>
				</div>
			</div>
			<Modal active={isCreate} onClick={setCreate} className={styles.modal}>
				<ModalTitle className={styles.modal__title}>
					Сертификат успешно создан!
				</ModalTitle>
				<ModalSubTitle className={styles.modal__subtitle}>
					Теперь он доступен в вашем каталоге сертификатов и вы можете отправить
					его клиенту.
				</ModalSubTitle>
				<PrimaryButton>Отправить сертификат</PrimaryButton>
			</Modal>
			<Modal active={showModal} onClick={setShowModal} className={styles.full}>
				<Back />
				<ModalTitle className={styles.new__title}>Новая компания</ModalTitle>
				<div className={styles.new__fields}>
					<div>
						<Input hide={false} className={styles.new__field}>
							Название компании
						</Input>
						<p className={styles.new__help}>
							Если вы работаете от своего лица, то можно указать имя и фамилию
						</p>
					</div>
					<div>
						<Input hide={false} className={styles.new__field}>
							Чем занимается компания{' '}
							<span className={styles.hideOnMob}>(кратко)</span>
						</Input>
						<p className={styles.new__help}>
							Например, «Семейный фотограф / Москва»
						</p>
					</div>
				</div>
				<div className={styles.new__contacts}>
					<h5 className={styles.new__smallTitle}>Контактные данные</h5>
					<OutlineButton
						size={'medium'}
						className={styles.info__company__btn + ' ' + styles.addIcon}
						onClick={() => {
							setShowModal(true)
						}}
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
								d='M12.8331 4.99984C12.8331 4.5396 12.46 4.1665 11.9998 4.1665C11.5396 4.1665 11.1665 4.5396 11.1665 4.99984V11.1665H4.99984C4.5396 11.1665 4.1665 11.5396 4.1665 11.9998C4.1665 12.4601 4.5396 12.8332 4.99984 12.8332H11.1665V18.9998C11.1665 19.4601 11.5396 19.8331 11.9998 19.8331C12.46 19.8331 12.8331 19.4601 12.8331 18.9998V12.8332H18.9998C19.4601 12.8332 19.8332 12.4601 19.8332 11.9998C19.8332 11.5396 19.4601 11.1665 18.9998 11.1665H12.8331V4.99984Z'
								fill='#232124'
							/>
						</svg>
						<span>Добавить</span>
					</OutlineButton>
				</div>
				<div className={styles.new__upload}>
					<h5 className={styles.new__smallTitle + ' ' + styles.new__titleLogo}>
						Логотип или фотография
					</h5>
					<p className={styles.new__text}>
						Вы можете загрузить изображение, в формате .jpeg или .png. Вес файла
						не более 500 кб.
					</p>
					<OutlineButton className={styles.new__load} size={'medium'}>
						<svg
							width='25'
							height='24'
							viewBox='0 0 25 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M20 14.5V17.8333C20 18.2754 19.8244 18.6993 19.5118 19.0118C19.1993 19.3244 18.7754 19.5 18.3333 19.5H6.66667C6.22464 19.5 5.80072 19.3244 5.48816 19.0118C5.17559 18.6993 5 18.2754 5 17.8333V14.5'
								stroke='#232124'
								strokeWidth='1.7'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M8.3335 10.3335L12.5002 14.5002L16.6668 10.3335'
								stroke='#232124'
								strokeWidth='1.7'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M12.5 14.5V4.5'
								stroke='#232124'
								strokeWidth='1.7'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
						<span>Загрузить</span>
					</OutlineButton>
				</div>
				<PrimaryButton
					onClick={() => {
						setShowModal(false)
						// setArea(true)
						setCreate(true)
					}}
				>
					Создать компанию
				</PrimaryButton>
			</Modal>
			<Modal active={area} onClick={setArea} className={styles.modalArea}>
				<ModalTitle className={styles.modalArea__title}>
					Выделите видимую область изображения
				</ModalTitle>
				{/*Картинка вставленна для пример, чтобы подогнать под pixel perfect*/}
				<Image
					src={'/img/area.png'}
					alt={'area'}
					width={440}
					height={272}
					className={styles.area__img}
				/>
				<PrimaryButton className={styles.modalArea__btn}>
					Сохранить
				</PrimaryButton>
			</Modal>
		</Layout>
	)
}

export default CertificateInfo
