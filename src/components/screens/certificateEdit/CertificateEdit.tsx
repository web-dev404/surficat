import clsx from 'clsx'
import React, { useState } from 'react'

import Add from '@/common/Add/Add'
import AddBtn from '@/common/AddBtn/AddBtn'
import Alert from '@/common/Alert/Alert'
import Back from '@/common/Back/Back'
import Button from '@/common/Button/Button'
import CancelButton from '@/common/CancelButton/CancelButton'
import CertificateUpload from '@/common/CertificateUpload/CertificateUpload'
import CompanyItem from '@/common/CompanyItem/CompanyItem'
import ContactItem from '@/common/ContactItem/ContactItem'
import Currency from '@/common/Currency/Currency'
import DeleteButton from '@/common/DeleteButton/DeleteButton'
import Field from '@/common/Field/Field'
import Modal from '@/common/Modal/Modal'
import PageHeader from '@/common/PageHeader/PageHeader'
import PageTitle from '@/common/PageTitle/PageTitle'
import PreloadItem from '@/common/PreloadItem/PreloadItem'
import SmallSubtitle from '@/common/SmallSubtitle/SmallSubtitle'
import SmallTitle from '@/common/SmallTitle/SmallTitle'
import TextArea from '@/common/TextArea/TextArea'
import WarnBlock from '@/common/WarnBlock/WarnBlock'

import Layout from '@/layout/Layout'

import styles from './CertificateEdit.module.scss'

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
						<PageTitle back={true}>
							Редактирование <span className={styles.wordMob}>сертификата</span>
						</PageTitle>
					</PageHeader>
					<form className={styles.form}>
						<SmallTitle>Основная информация</SmallTitle>
						<SmallSubtitle className={styles.smallTitle}>
							Вся указанная информация будет отображаться в сертификате и
							публично доступна тем, у кого есть ссылка.
						</SmallSubtitle>
						<Field hide={false} className={styles.form__input}>
							Название сертификата
						</Field>
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
							<input
								type='text'
								className={styles.form__box__input}
								placeholder='Укажите номинал (если нужно)'
							/>
							<Currency />
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
						<CertificateUpload icon={'/icons/download.svg'} disable={true}>
							Загрузить
						</CertificateUpload>
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
							<button
								className={clsx(styles.info__company__btn, styles.create)}
							>
								<img src='/icons/plus-black.svg' alt='plus icon' />
								Создать компанию
							</button>
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
						<Button>Сохранить изменения</Button>
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
						<Field hide={false} className={styles.edit__fieldItemField}>
							Название компании
						</Field>
						<p className={styles.edit__fieldSubField}>
							Если вы работаете от своего лица, то можно указать имя и фамилию
						</p>
					</div>
					<div className={styles.edit__fieldItem}>
						<Field hide={false} className={styles.edit__fieldItemField}>
							Чем занимается компания{' '}
							<span className={styles.hideOnMob}>(кратко)</span>
						</Field>
						<p className={styles.edit__fieldSubField}>
							Например: «Семейный фотограф / Москва»
						</p>
					</div>
				</div>
				<div className={styles.edit__contacts}>
					<h5 className={styles.edit__smallTitle}>Контактные данные</h5>
					<div>
						<ContactItem
							className={styles.edit__contactItem}
							placeholder={'Укажите ссылку'}
						/>
						<ContactItem
							className={styles.edit__contactItem}
							placeholder={'Укажите номер'}
						/>
					</div>
					<AddBtn className={styles.edit__add}>Добавить</AddBtn>
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
						<CertificateUpload icon={'/icons/download.svg'}>
							Загрузить
						</CertificateUpload>
						<CancelButton
							onClick={() => {}}
							icon={true}
							className={styles.edit__delete}
						>
							Удалить
						</CancelButton>
					</div>
				</div>
				<Button
					onClick={() => {
						setEditCompany(false)
						setSafe(true)
					}}
				>
					Сохранить изменения
				</Button>
			</Modal>
			<Alert state={setSafe} active={isSafe} icon={'/icons/success.svg'}>
				Сохранено!
			</Alert>
		</Layout>
	)
}

export default CertificateEdit
