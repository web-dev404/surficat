import clsx from 'clsx'
import React, { useState } from 'react'

import Alert from '@/common/Alert/Alert'
import Back from '@/common/Back/Back'
import CompanyItem from '@/common/CompanyItem/CompanyItem'
import ContactItem from '@/common/ContactItem/ContactItem'
import Currency from '@/common/Currency/Currency'
import Modal from '@/common/Modal/Modal'
import PageHeader from '@/common/PageHeader/PageHeader'
import PageTitle from '@/common/PageTitle/PageTitle'
import PreloadItem from '@/common/PreloadItem/PreloadItem'
import SmallSubtitle from '@/common/SmallSubtitle/SmallSubtitle'
import SmallTitle from '@/common/SmallTitle/SmallTitle'
import TextArea from '@/common/TextArea/TextArea'
import TitleBackButton from '@/common/TitleBackButton/TitleBackButton'
import WarnBlock from '@/common/WarnBlock/WarnBlock'

import Layout from '@/layout/Layout'

import styles from './CertificateEdit.module.scss'
import Input from '@/components/UI/Input/Input'
import OutlineButton from '@/components/UI/OutlineButton/OutlineButton'
import PrimaryButton from '@/components/UI/PrimaryButton/PrimaryButton'

const CertificateEdit = () => {
	const [isEditCompany, setEditCompany] = useState(false)
	const [isSafe, setSafe] = useState(false)
	const data = [
		{
			name: 'Александр Александровский',
			info: 'Сдаю дома для отдыха',
			img: '/img/item.png',
			link: true
		},
		{
			name: 'TAIGA',
			info: 'Аренда дома на Байкале',
			img: '/img/item_1.png',
			link: false
		},
		{
			name: 'HouseMouse',
			info: 'Аренда дома в Москве',
			img: '/img/item_2.png',
			link: false
		}
	]
	return (
		<Layout title={'Редактирование сертификата'}>
			<div className={styles.container__info}>
				<div className={styles.info__inner}>
					<Back className={styles.back}></Back>
					<PageHeader>
						<div className={'flex-center'}>
							<TitleBackButton />
							<PageTitle>
								Редактирование{' '}
								<span className={styles.wordMob}>сертификата</span>
							</PageTitle>
						</div>
					</PageHeader>
					<form className={styles.form}>
						<SmallTitle>Основная информация</SmallTitle>
						<SmallSubtitle className={styles.smallTitle}>
							Вся указанная информация будет отображаться в сертификате и
							публично доступна тем, у кого есть ссылка.
						</SmallSubtitle>
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
						<p className={clsx(styles.form__subtitle, styles.underTitle)}>
							Вы можете загрузить в слайдер сертификата до 3х квадратных
							изображений, в формате .jpeg или .png. Вес каждого изображения не
							более 2 мб.
						</p>
						<div className={styles.preload}>
							<PreloadItem img={'/img/preview/1.png'} />
							<PreloadItem img={'/img/preview/2.png'} />
							<PreloadItem img={'/img/preview/3.png'} />
						</div>
						<WarnBlock className={styles.subLoad}>
							Неправильный формат или вес файла
						</WarnBlock>
						<OutlineButton disabled={true} size={'medium'}>
							<svg
								width='25'
								height='24'
								viewBox='0 0 25 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M20 14.5V17.8333C20 18.2754 19.8244 18.6993 19.5118 19.0118C19.1993 19.3244 18.7754 19.5 18.3333 19.5H6.66667C6.22464 19.5 5.80072 19.3244 5.48816 19.0118C5.17559 18.6993 5 18.2754 5 17.8333V14.5'
									stroke='#787486'
									strokeWidth='1.7'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M8.3335 10.333L12.5002 14.4997L16.6668 10.333'
									stroke='#787486'
									strokeWidth='1.7'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M12.5 14.5V4.5'
									stroke='#787486'
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
							Информация о компании и контакты
						</h3>
						<p className={styles.form__subtitle}>
							Выберите компанию и ее контакты, которые нужно показывать клиенту
							в сертификате (блок «Связаться»).
						</p>
						<div className={styles.companyItems}>
							{data &&
								data.map((item, index) => (
									<CompanyItem
										key={index}
										data={item}
										select={true}
										className={styles.companyItems__item}
										onEdit={() => setEditCompany(true)}
									/>
								))}
						</div>
						<div className={styles.reverse}>
							<WarnBlock className={styles.subItem}>
								Необходимо указать информацию о компании и контакты
							</WarnBlock>
							<OutlineButton className={styles.addIcon} size={'medium'}>
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
										d='M13.3337 4.99984C13.3337 4.5396 12.9606 4.1665 12.5003 4.1665C12.0401 4.1665 11.667 4.5396 11.667 4.99984V11.1665H5.50037C5.04013 11.1665 4.66703 11.5396 4.66703 11.9998C4.66703 12.4601 5.04013 12.8332 5.50037 12.8332H11.667V18.9998C11.667 19.4601 12.0401 19.8331 12.5003 19.8331C12.9606 19.8331 13.3337 19.4601 13.3337 18.9998V12.8332H19.5004C19.9606 12.8332 20.3337 12.4601 20.3337 11.9998C20.3337 11.5396 19.9606 11.1665 19.5004 11.1665H13.3337V4.99984Z'
										fill='#232124'
									/>
								</svg>
								<span>Создать компанию</span>
							</OutlineButton>
						</div>
					</div>

					<div className={styles.info__create}>
						<p
							className={clsx(styles.form__subtitle, styles.form__subtitleEnd)}
						>
							Сохраняя изменения, вы подтверждаете, что ознакомились с
							<a href='#'> пользовательским соглашением</a> и принимаете его
							условия.
						</p>
						<PrimaryButton>Сохранить изменения</PrimaryButton>
					</div>
				</div>
			</div>
			<Modal
				active={isEditCompany}
				onClick={setEditCompany}
				className={styles.edit}
			>
				<Back />
				<SmallTitle className={styles.edit__title}>
					Редактирование компании
				</SmallTitle>
				<div className={styles.edit__fields}>
					<div className={styles.edit__fieldItem}>
						<Input hide={false} className={styles.edit__fieldItemField}>
							Название компании
						</Input>
						<p className={styles.edit__fieldSubField}>
							Если вы работаете от своего лица, то можно указать имя и фамилию
						</p>
					</div>
					<div className={styles.edit__fieldItem}>
						<Input hide={false} className={styles.edit__fieldItemField}>
							Чем занимается компания{' '}
							<span className={styles.hideOnMob}>(кратко)</span>
						</Input>
						<p className={styles.edit__fieldSubField}>
							Например: «Семейный фотограф / Москва»
						</p>
					</div>
				</div>
				<div className={styles.edit__contacts}>
					<h5 className={styles.edit__smallTitle}>Контактные данные</h5>
					<div className={styles.edit__contactWrapper}>
						<ContactItem
							className={styles.edit__contactItem}
							placeholder={'Укажите ссылку'}
						/>
						<ContactItem
							className={styles.edit__contactItem}
							placeholder={'Укажите номер'}
						/>
					</div>
					<OutlineButton
						className={styles.edit__add + ' ' + styles.addIcon}
						size={'medium'}
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
				<div className={styles.edit__logoBox}>
					<h5 className={clsx(styles.edit__smallTitle, styles.edit__titleLogo)}>
						Логотип или фотография
					</h5>
					<p className={styles.edit__text}>
						Вы можете загрузить изображение, в формате .jpeg или .png. Вес файла
						не более 500 кб.
					</p>
					<div className={styles.edit__wrapper}>
						<div className={styles.edit__preview}>
							<img src='/img/preview.png' alt='prev' />
						</div>
					</div>
					<div className={styles.edit__buttons}>
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
						<OutlineButton size={'medium'}>
							<svg
								width='25'
								height='24'
								viewBox='0 0 25 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M5 7H6.66667H20'
									stroke='#232124'
									strokeWidth='1.7'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M9.1665 6.99984V5.33317C9.1665 4.89114 9.3421 4.46722 9.65466 4.15466C9.96722 3.8421 10.3911 3.6665 10.8332 3.6665H14.1665C14.6085 3.6665 15.0325 3.8421 15.345 4.15466C15.6576 4.46722 15.8332 4.89114 15.8332 5.33317V6.99984M18.3332 6.99984V18.6665C18.3332 19.1085 18.1576 19.5325 17.845 19.845C17.5325 20.1576 17.1085 20.3332 16.6665 20.3332H8.33317C7.89114 20.3332 7.46722 20.1576 7.15466 19.845C6.8421 19.5325 6.6665 19.1085 6.6665 18.6665V6.99984H18.3332Z'
									stroke='#232124'
									strokeWidth='1.7'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M14.1665 11.1665V16.1665'
									stroke='#232124'
									strokeWidth='1.7'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M10.8335 11.1665V16.1665'
									stroke='#232124'
									strokeWidth='1.7'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
							<span>Удалить</span>
						</OutlineButton>
					</div>
				</div>
				<PrimaryButton
					onClick={() => {
						setEditCompany(false)
						setSafe(true)
					}}
				>
					Сохранить изменения
				</PrimaryButton>
			</Modal>
			<Alert state={setSafe} active={isSafe} icon={'/icons/success.svg'}>
				Сохранено!
			</Alert>
		</Layout>
	)
}

export default CertificateEdit
