import { useRouter } from 'next/router'
import React, { useState } from 'react'

import Alert from '@/common/Alert/Alert'
import Back from '@/common/Back/Back'
import Certeficate from '@/common/Certeficate/Certeficate'
import Modal from '@/common/Modal/Modal'
import ModalSubTitle from '@/common/ModalSubtitle/ModalSubTitle'
import ModalText from '@/common/ModalText/ModalText'
import ModalTitle from '@/common/ModalTitle/ModalTitle'
import PageHeader from '@/common/PageHeader/PageHeader'
import PageTitle from '@/common/PageTitle/PageTitle'
import TextArea from '@/common/TextArea/TextArea'
import TitleBackButton from '@/common/TitleBackButton/TitleBackButton'

import CertificateLayout from '@/layout/CertificateLayout'

import s from './CertificateControl.module.scss'
import Input from '@/components/UI/Input/Input'
import OutlineButton from '@/components/UI/OutlineButton/OutlineButton'
import PrimaryButton from '@/components/UI/PrimaryButton/PrimaryButton'
import RedButton from '@/components/UI/RedButton/RedButton'

const CertificateControl = () => {
	const router = useRouter()
	const [isConfirm, setConfirm] = useState(false)
	const [isDelete, setDelete] = useState(false)
	const [deleteCertificate, setDeleteCertificate] = useState(false)
	const [isSend, setSend] = useState(false)
	const [isSafe, setSafe] = useState(false)
	const [isSendSuccess, setSendSuccess] = useState(false)
	const word = 'Удалить сертификат'
	function checkField(value: string) {
		value == word ? setConfirm(true) : setConfirm(false)
	}
	return (
		<CertificateLayout title={'Управление сертификатом'}>
			<PageHeader className={s.control__pageHeader}>
				<Back />
				<div className={'flex-center'}>
					<TitleBackButton />
					<PageTitle className={s.control__pageTitle}>
						Управление сертификатом
					</PageTitle>
				</div>
				<div className={s.control__buttons}>
					<OutlineButton
						className={s.mobBtn}
						onClick={() => {
							setDeleteCertificate(true)
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
								d='M4.5 7H6.16667H19.5'
								stroke='#232124'
								strokeWidth='1.7'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M8.6665 6.99984V5.33317C8.6665 4.89114 8.8421 4.46722 9.15466 4.15466C9.46722 3.8421 9.89114 3.6665 10.3332 3.6665H13.6665C14.1085 3.6665 14.5325 3.8421 14.845 4.15466C15.1576 4.46722 15.3332 4.89114 15.3332 5.33317V6.99984M17.8332 6.99984V18.6665C17.8332 19.1085 17.6576 19.5325 17.345 19.845C17.0325 20.1576 16.6085 20.3332 16.1665 20.3332H7.83317C7.39114 20.3332 6.96722 20.1576 6.65466 19.845C6.3421 19.5325 6.1665 19.1085 6.1665 18.6665V6.99984H17.8332Z'
								stroke='#232124'
								strokeWidth='1.7'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M13.6665 11.1665V16.1665'
								stroke='#232124'
								strokeWidth='1.7'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M10.3335 11.1665V16.1665'
								stroke='#232124'
								strokeWidth='1.7'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</OutlineButton>
					<OutlineButton
						className={s.mobBtn}
						onClick={() => {
							router.push('/certificate-edit')
						}}
					>
						<svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<g clipPath='url(#clip0_206_2194)'>
								<path
									d='M16.1665 4.49993C16.3854 4.28106 16.6452 4.10744 16.9312 3.98899C17.2171 3.87054 17.5236 3.80957 17.8332 3.80957C18.1427 3.80957 18.4492 3.87054 18.7352 3.98899C19.0211 4.10744 19.281 4.28106 19.4998 4.49993C19.7187 4.7188 19.8923 4.97863 20.0108 5.2646C20.1292 5.55057 20.1902 5.85706 20.1902 6.16659C20.1902 6.47612 20.1292 6.78262 20.0108 7.06859C19.8923 7.35455 19.7187 7.61439 19.4998 7.83326L8.24984 19.0833L3.6665 20.3333L4.9165 15.7499L16.1665 4.49993Z'
									stroke='#232124'
									strokeWidth='1.7'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</g>
							<defs>
								<clipPath id='clip0_206_2194'>
									<rect
										width='20'
										height='20'
										fill='white'
										transform='translate(2 2)'
									/>
								</clipPath>
							</defs>
						</svg>
					</OutlineButton>
					<PrimaryButton
						className={s.control__submit}
						onClick={() => {
							setSend(true)
						}}
					>
						Отправить
					</PrimaryButton>
				</div>
			</PageHeader>
			<Certeficate subSlider={false} />
			<Modal
				onClick={setDeleteCertificate}
				active={deleteCertificate}
				className={s.small}
			>
				<ModalTitle className={s.red}>Внимание!</ModalTitle>
				<ModalText className={s.control__delText}>
					Если вы удалите этот сертификат, он перестанет быть доступен всем,
					кому был отправлен.
				</ModalText>
				<ModalSubTitle className={s.control__subText}>
					Для подтверждения удаления введите «Удалить сертификат»
				</ModalSubTitle>
				<Input hide={false} className={s.delete} onChange={checkField}>
					Введите текст
				</Input>
				<div className={s.control__modalButtons}>
					<RedButton
						disabled={!isConfirm}
						onClick={() => {
							setDeleteCertificate(false)
							setDelete(true)
						}}
					>
						<svg
							width='25'
							height='24'
							viewBox='0 0 25 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M5 7H6.66667H20'
								stroke='#787486'
								strokeWidth='1.7'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M9.1665 6.99984V5.33317C9.1665 4.89114 9.3421 4.46722 9.65466 4.15466C9.96722 3.8421 10.3911 3.6665 10.8332 3.6665H14.1665C14.6085 3.6665 15.0325 3.8421 15.345 4.15466C15.6576 4.46722 15.8332 4.89114 15.8332 5.33317V6.99984M18.3332 6.99984V18.6665C18.3332 19.1085 18.1576 19.5325 17.845 19.845C17.5325 20.1576 17.1085 20.3332 16.6665 20.3332H8.33317C7.89114 20.3332 7.46722 20.1576 7.15466 19.845C6.8421 19.5325 6.6665 19.1085 6.6665 18.6665V6.99984H18.3332Z'
								stroke='#787486'
								strokeWidth='1.7'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M14.1665 11.1665V16.1665'
								stroke='#787486'
								strokeWidth='1.7'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M10.8335 11.1665V16.1665'
								stroke='#787486'
								strokeWidth='1.7'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
						Удалить
					</RedButton>
				</div>
			</Modal>
			<Modal onClick={setSend} active={isSend} className={s.full}>
				<Back
					onClick={() => {
						setSend(false)
					}}
				/>
				<ModalTitle className={s.edit__title}>Отправка сертификата</ModalTitle>
				<ModalSubTitle className={s.edit__subtitle}>
					Семейные выходные в уютном доме «Taiga»
					<br />
					<span className={s.control__dot}>•</span> 10 000 ₽
				</ModalSubTitle>
				<div className={s.edit__item}>
					<Input hide={false} icon={'person'} className={s.editField}>
						Получатель
					</Input>
					<p className={s.edit__text}>
						Имя лучше указывать в дательном падеже. Например: «Любимой
						Александре».
					</p>
				</div>
				<div className={s.edit__item}>
					<Input hide={false} className={s.editField} icon={'calendar'}>
						Срок действия сертификата
					</Input>
					<p className={s.edit__text}>
						До какого числа клиент может воспользоваться сертификатом
					</p>
				</div>
				<TextArea className={s.edit__area}>
					Укажите от кого сертификат или пожелание
				</TextArea>
				<PrimaryButton
					onClick={() => {
						setSend(false)
						setSafe(true)
						setSendSuccess(true)
					}}
				>
					Отправить
				</PrimaryButton>
			</Modal>
			<Modal
				active={isSendSuccess}
				onClick={setSendSuccess}
				className={s.modal}
			>
				<ModalTitle className={s.modal__title}>
					Ура! Ваш сертификат готов к отправке!
				</ModalTitle>
				<ModalSubTitle className={s.modal__subtitle}>
					Теперь откройте предпросмотр и поделитесь с клиентом ссылкой на
					сертификат.
				</ModalSubTitle>
				<PrimaryButton
					onClick={() => {
						router.push('/certificate-preview')
					}}
				>
					Открыть предпросмотр
				</PrimaryButton>
			</Modal>
			<Alert state={setDelete} active={isDelete} icon={'/icons/delete.svg'}>
				Сертификат удален!
			</Alert>
		</CertificateLayout>
	)
}

export default CertificateControl
