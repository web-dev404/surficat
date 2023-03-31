import React, { useState } from 'react'

import Alert from '@/common/Alert/Alert'
import Back from '@/common/Back/Back'
import CancelButton from '@/common/CancelButton/CancelButton'
import CompanyItem from '@/common/CompanyItem/CompanyItem'
import DeleteButton from '@/common/DeleteButton/DeleteButton'
import Modal from '@/common/Modal/Modal'
import ModalTitle from '@/common/ModalTitle/ModalTitle'
import PageHeader from '@/common/PageHeader/PageHeader'
import PageTitle from '@/common/PageTitle/PageTitle'
import ProfileItem from '@/common/ProfileItem/ProfileItem'
import SmallSubtitle from '@/common/SmallSubtitle/SmallSubtitle'
import SmallTitle from '@/common/SmallTitle/SmallTitle'

import Layout from '@/layout/Layout'

import s from './Profile.module.scss'
import Input from '@/components/UI/Input/Input'
import OutlineButton from '@/components/UI/OutlineButton/OutlineButton'
import PrimaryButton from '@/components/UI/PrimaryButton/PrimaryButton'
import RedButton from '@/components/UI/RedButton/RedButton'

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
					<OutlineButton className={s.exit} size={'medium'}>
						<svg
							width='21'
							height='20'
							viewBox='0 0 21 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M13.8335 14.1668L18.0002 10.0002L13.8335 5.8335'
								stroke='#232124'
								strokeWidth='1.7'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M18 10H8'
								stroke='#232124'
								strokeWidth='1.7'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M8 17.5H4.66667C4.22464 17.5 3.80072 17.3244 3.48816 17.0118C3.17559 16.6993 3 16.2754 3 15.8333V4.16667C3 3.72464 3.17559 3.30072 3.48816 2.98816C3.80072 2.67559 4.22464 2.5 4.66667 2.5H8'
								stroke='#232124'
								strokeWidth='1.7'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
						<span>Выйти</span>
					</OutlineButton>
				</PageHeader>
				<ProfileItem>
					<SmallTitle>Основная информация</SmallTitle>
					<SmallSubtitle>Эти данные не будут доступны публично.</SmallSubtitle>
					<form action='#'>
						<div className={s.profile__buttons}>
							<Input hide={false} className={s.profile__button}>
								Ваше имя
							</Input>
							<Input hide={false} className={s.profile__button}>
								Ваш email
							</Input>
						</div>
						<PrimaryButton
							onClick={() => {
								setSuccess(true)
							}}
						>
							Сохранить
						</PrimaryButton>
					</form>
				</ProfileItem>
				<ProfileItem>
					<SmallTitle>Изменение пароля</SmallTitle>
					<SmallSubtitle className={s.subTitleMob}>
						Эти данные не будут доступны публично.
					</SmallSubtitle>
					<form action='#'>
						<div className={s.profile__buttons + ' ' + s.profile__buttonsWrap}>
							<Input hide={true} className={s.profile__button}>
								Текущий пароль
							</Input>
							<Input hide={true} className={s.profile__button}>
								Новый пароль
							</Input>
						</div>
						<PrimaryButton
							onClick={() => {
								setSuccess(true)
							}}
						>
							Изменить пароль
						</PrimaryButton>
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
					<OutlineButton size={'medium'} className={s.add}>
						<svg
							width='21'
							height='20'
							viewBox='0 0 21 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M11.3334 2.99984C11.3334 2.5396 10.9603 2.1665 10.5 2.1665C10.0398 2.1665 9.66671 2.5396 9.66671 2.99984V9.1665H3.50008C3.03984 9.1665 2.66675 9.5396 2.66675 9.99984C2.66675 10.4601 3.03984 10.8332 3.50008 10.8332H9.66671V16.9998C9.66671 17.4601 10.0398 17.8331 10.5 17.8331C10.9603 17.8331 11.3334 17.4601 11.3334 16.9998V10.8332H17.5001C17.9603 10.8332 18.3334 10.4601 18.3334 9.99984C18.3334 9.5396 17.9603 9.1665 17.5001 9.1665H11.3334V2.99984Z'
								fill='#232124'
							/>
						</svg>
						<span>Создать компанию</span>
					</OutlineButton>
				</ProfileItem>
				<ProfileItem>
					<SmallTitle>Удаление аккаунта</SmallTitle>
					<SmallSubtitle>
						Для подтверждения удаления введите «Удалить аккаунт».
					</SmallSubtitle>
					<div className={s.profile__buttons + ' ' + s.profile__delete}>
						<Input
							hide={false}
							onChange={checkField}
							className={s.delete}
							hidden={true}
						>
							Введите текст
						</Input>
						<Input
							hide={false}
							onChange={checkField}
							className={s.deleteFieldMob}
							placeholder={' '}
						>
							Введите текст
						</Input>
					</div>
					<RedButton disabled={!isValid}>
						<svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M4.5 7H6.16667H19.5'
								stroke='white'
								strokeWidth='1.7'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M8.66675 6.99984V5.33317C8.66675 4.89114 8.84234 4.46722 9.1549 4.15466C9.46746 3.8421 9.89139 3.6665 10.3334 3.6665H13.6667C14.1088 3.6665 14.5327 3.8421 14.8453 4.15466C15.1578 4.46722 15.3334 4.89114 15.3334 5.33317V6.99984M17.8334 6.99984V18.6665C17.8334 19.1085 17.6578 19.5325 17.3453 19.845C17.0327 20.1576 16.6088 20.3332 16.1667 20.3332H7.83341C7.39139 20.3332 6.96746 20.1576 6.6549 19.845C6.34234 19.5325 6.16675 19.1085 6.16675 18.6665V6.99984H17.8334Z'
								stroke='white'
								strokeWidth='1.7'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M13.6667 11.1665V16.1665'
								stroke='white'
								strokeWidth='1.7'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M10.3333 11.1665V16.1665'
								stroke='white'
								strokeWidth='1.7'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
						Подтвердить удаление
					</RedButton>
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
					<RedButton
						onClick={() => {
							setDelete(true)
							setShow(false)
						}}
					>
						<svg
							width='25'
							height='24'
							viewBox='0 0 25 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className='DeleteButton_btn__icon__SojM2'
						>
							<path
								d='M5 7H6.66667H20'
								stroke='white'
								strokeWidth='1.7'
								strokeLinecap='round'
								strokeLinejoin='round'
							></path>
							<path
								d='M9.16663 6.99984V5.33317C9.16663 4.89114 9.34222 4.46722 9.65478 4.15466C9.96734 3.8421 10.3913 3.6665 10.8333 3.6665H14.1666C14.6087 3.6665 15.0326 3.8421 15.3451 4.15466C15.6577 4.46722 15.8333 4.89114 15.8333 5.33317V6.99984M18.3333 6.99984V18.6665C18.3333 19.1085 18.1577 19.5325 17.8451 19.845C17.5326 20.1576 17.1087 20.3332 16.6666 20.3332H8.33329C7.89127 20.3332 7.46734 20.1576 7.15478 19.845C6.84222 19.5325 6.66663 19.1085 6.66663 18.6665V6.99984H18.3333Z'
								stroke='white'
								strokeWidth='1.7'
								strokeLinecap='round'
								strokeLinejoin='round'
							></path>
							<path
								d='M14.1666 11.1665V16.1665'
								stroke='white'
								strokeWidth='1.7'
								strokeLinecap='round'
								strokeLinejoin='round'
							></path>
							<path
								d='M10.8334 11.1665V16.1665'
								stroke='white'
								strokeWidth='1.7'
								strokeLinecap='round'
								strokeLinejoin='round'
							></path>
						</svg>
						Удалить
					</RedButton>
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
