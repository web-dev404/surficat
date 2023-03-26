import clsx from 'clsx'
import Image from 'next/image'
import React, { useState } from 'react'

import Back from '@/common/Back/Back'
import Button from '@/common/Button/Button'
import CertificateUpload from '@/common/CertificateUpload/CertificateUpload'
import Currency from '@/common/Currency/Currency'
import Field from '@/common/Field/Field'
import Modal from '@/common/Modal/Modal'
import ModalSubTitle from '@/common/ModalSubtitle/ModalSubTitle'
import ModalTitle from '@/common/ModalTitle/ModalTitle'
import PageHeader from '@/common/PageHeader/PageHeader'
import PageTitle from '@/common/PageTitle/PageTitle'
import TextArea from '@/common/TextArea/TextArea'
import WarnBlock from '@/common/WarnBlock/WarnBlock'

import Layout from '@/layout/Layout'

import styles from './cerrtificateInfo.module.scss'

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
						<PageTitle back={true}>Новый сертификат</PageTitle>
					</PageHeader>
					<form className={styles.form}>
						<h3 className={styles.form__title}>Основная информация</h3>
						<p className={styles.form__subtitle}>
							Вся указанная информация будет отображаться в сертификате и
							публично доступна тем, у кого есть ссылка.
						</p>
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
						<p className={styles.form__subtitle}>
							Вы можете загрузить в слайдер сертификата до 3х квадратных
							изображений, в формате .jpeg или .png. Вес каждого файла не более
							2 мб.
						</p>

						<CertificateUpload icon={'/icons/download.svg'}>
							Загрузить
						</CertificateUpload>
					</div>

					<div className={styles.info__company}>
						<h3 className={styles.info__company__title}>
							Информация о компании и контакты <span>*</span>
						</h3>
						<p className={styles.form__subtitle}>
							Выберите компанию и ее контакты, которые нужно показывать клиенту
							в сертификате (блок «Связаться»).
						</p>
						<button
							className={styles.info__company__btn}
							onClick={() => {
								setShowModal(true)
							}}
						>
							<img src='/icons/plus-black.svg' alt='plus icon' />
							Создать компанию
						</button>
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
						<Button>Создать сертификат</Button>
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
				<Button>Отправить сертификат</Button>
			</Modal>
			<Modal active={showModal} onClick={setShowModal} className={styles.full}>
				<Back />
				<ModalTitle className={styles.new__title}>Новая компания</ModalTitle>
				<div className={styles.new__fields}>
					<div>
						<Field hide={false} className={styles.new__field}>
							Название компании
						</Field>
						<p className={styles.new__help}>
							Если вы работаете от своего лица, то можно указать имя и фамилию
						</p>
					</div>
					<div>
						<Field hide={false} className={styles.new__field}>
							Чем занимается компания{' '}
							<span className={styles.hideOnMob}>(кратко)</span>
						</Field>
						<p className={styles.new__help}>
							Например, «Семейный фотограф / Москва»
						</p>
					</div>
				</div>
				<div className={styles.new__contacts}>
					<h5 className={styles.new__smallTitle}>Контактные данные</h5>
					<button
						className={styles.info__company__btn}
						onClick={() => {
							setShowModal(true)
						}}
					>
						<img src='/icons/plus-black.svg' alt='plus icon' />
						Добавить
					</button>
				</div>
				<div className={styles.new__upload}>
					<h5 className={styles.new__smallTitle + ' ' + styles.new__titleLogo}>
						Логотип или фотография
					</h5>
					<p className={styles.new__text}>
						Вы можете загрузить изображение, в формате .jpeg или .png. Вес файла
						не более 500 кб.
					</p>
					<CertificateUpload
						icon={'/icons/download.svg'}
						className={styles.new__load}
					>
						Загрузить
					</CertificateUpload>
				</div>
				<Button
					onClick={() => {
						setShowModal(false)
						// setArea(true)
						setCreate(true)
					}}
				>
					Создать компанию
				</Button>
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
				<Button className={styles.modalArea__btn}>Сохранить</Button>
			</Modal>
		</Layout>
	)
}

export default CertificateInfo
