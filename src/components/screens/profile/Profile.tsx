import React, { useState } from 'react'

import Alert from '@/common/Alert/Alert'
import Back from '@/common/Back/Back'
import Button from '@/common/Button/Button'
import CancelButton from '@/common/CancelButton/CancelButton'
import CompanyItem from '@/common/CompanyItem/CompanyItem'
import DeleteButton from '@/common/DeleteButton/DeleteButton'
import ExitBtn from '@/common/ExitBtn/ExitBtn'
import Field from '@/common/Field/Field'
import Modal from '@/common/Modal/Modal'
import ModalTitle from '@/common/ModalTitle/ModalTitle'
import PageHeader from '@/common/PageHeader/PageHeader'
import PageTitle from '@/common/PageTitle/PageTitle'
import ProfileItem from '@/common/ProfileItem/ProfileItem'
import SmallSubtitle from '@/common/SmallSubtitle/SmallSubtitle'
import SmallTitle from '@/common/SmallTitle/SmallTitle'

import Layout from '@/layout/Layout'

import s from './Profile.module.scss'

const Profile = () => {
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
	const [isSuccess, setSuccess] = useState(false)
	const [isDelete, setDelete] = useState(false)
	const [isShow, setShow] = useState(false)
	const [isValid, setValid] = useState(false)
	const word = 'Удалить аккаунт'
	function checkField(value: string) {
		value == word ? setValid(true) : setValid(false)
	}
	return (
		<Layout title={'Профиль'}>
			<div className={'container-profile'}>
				<Back />
				<PageHeader className={s.header}>
					<PageTitle>Мой профиль</PageTitle>
					<ExitBtn />
				</PageHeader>
				<ProfileItem>
					<SmallTitle>Основная информация</SmallTitle>
					<SmallSubtitle>Эти данные не будут доступны публично.</SmallSubtitle>
					<form action='#'>
						<div className={s.profile__buttons}>
							<Field hide={false}>Ваше имя</Field>
							<Field hide={false}>Ваш email</Field>
						</div>
						<Button
							onClick={() => {
								setSuccess(true)
							}}
							disabled={false}
						>
							Сохранить
						</Button>
					</form>
				</ProfileItem>
				<ProfileItem>
					<SmallTitle>Изменение пароля</SmallTitle>
					<SmallSubtitle className={s.subTitleMob}>
						Эти данные не будут доступны публично.
					</SmallSubtitle>
					<form action='#'>
						<div className={s.profile__buttons + ' ' + s.profile__buttonsWrap}>
							<Field hide={true}>Текущий пароль</Field>
							<Field hide={true}>Новый пароль</Field>
						</div>
						<Button
							onClick={() => {
								setSuccess(true)
							}}
						>
							Изменить пароль
						</Button>
					</form>
				</ProfileItem>
				<ProfileItem>
					<SmallTitle>Информация о компаниях и контакты</SmallTitle>
					<SmallSubtitle>
						Эти данные будут отображаться в сертификатах, в блоке «Связаться».
						Привязать данные о компании к определенному сертификату можно в
						редактировании сертификата.
					</SmallSubtitle>
					{data && (
						<div className={s.profile__items}>
							{data &&
								data.map((el, index) => {
									return <CompanyItem key={index} del={setShow} data={el} />
								})}
						</div>
					)}
					<button className={s.profile__add}>
						<svg
							width='25'
							height='24'
							viewBox='0 0 25 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className={s.profile__plus}
						>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M13.3334 4.99984C13.3334 4.5396 12.9603 4.1665 12.5 4.1665C12.0398 4.1665 11.6667 4.5396 11.6667 4.99984V11.1665H5.50008C5.03984 11.1665 4.66675 11.5396 4.66675 11.9998C4.66675 12.4601 5.03984 12.8332 5.50008 12.8332H11.6667V18.9998C11.6667 19.4601 12.0398 19.8331 12.5 19.8331C12.9603 19.8331 13.3334 19.4601 13.3334 18.9998V12.8332H19.5001C19.9603 12.8332 20.3334 12.4601 20.3334 11.9998C20.3334 11.5396 19.9603 11.1665 19.5001 11.1665H13.3334V4.99984Z'
								fill='#232124'
							/>
						</svg>
						Создать компанию
					</button>
				</ProfileItem>
				<ProfileItem>
					<SmallTitle>Удаление аккаунта</SmallTitle>
					<SmallSubtitle>
						Для подтверждения удаления введите «Удалить аккаунт».
					</SmallSubtitle>
					<div className={s.profile__buttons + ' ' + s.profile__delete}>
						<Field
							hide={false}
							onChange={checkField}
							className={s.delete}
							placeholder={'Удалить аккаунт'}
							hidden={true}
						>
							Введите текст
						</Field>
						<Field
							hide={false}
							onChange={checkField}
							className={s.deleteFieldMob}
							placeholder={' '}
						>
							Введите текст
						</Field>
					</div>
					<DeleteButton disabled={!isValid}>Подтвердить удаление</DeleteButton>
				</ProfileItem>
			</div>
			<Modal onClick={setShow} active={isShow} className={s.center}>
				<ModalTitle>Удалить компанию и ее контакты?</ModalTitle>
				<div className={s.profile__modalButtons}>
					<CancelButton
						onClick={() => {
							setShow(false)
						}}
					>
						Отменить
					</CancelButton>
					<DeleteButton
						onClick={() => {
							setDelete(true)
							setShow(false)
						}}
					/>
				</div>
			</Modal>
			<Alert state={setDelete} active={isDelete} icon={'/icons/success.svg'}>
				Компания удалена!
			</Alert>
			<Alert state={setSuccess} active={isSuccess} icon={'/icons/success.svg'}>
				Сохранено!
			</Alert>
		</Layout>
	)
}

export default Profile
