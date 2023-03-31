import clsx from 'clsx'
import Image from 'next/image'
import React, { useState } from 'react'

import Alert from '@/common/Alert/Alert'
import Back from '@/common/Back/Back'
import CancelButton from '@/common/CancelButton/CancelButton'
import DeleteButton from '@/common/DeleteButton/DeleteButton'
import Modal from '@/common/Modal/Modal'
import ModalSubTitle from '@/common/ModalSubtitle/ModalSubTitle'
import ModalText from '@/common/ModalText/ModalText'
import ModalTitle from '@/common/ModalTitle/ModalTitle'
import PageNum from '@/common/PageNum/PageNum'
import SendItem from '@/common/SendItem/SendItem'
import SendsInformation from '@/common/SendsInformation/SendsInformation'
import TableRow from '@/common/TableRow/TableRow'
import TextArea from '@/common/TextArea/TextArea'

import s from './SendsTable.module.scss'
import data from './data'
import Input from '@/components/UI/Input/Input'
import OutlineButton from '@/components/UI/OutlineButton/OutlineButton'
import PrimaryButton from '@/components/UI/PrimaryButton/PrimaryButton'
import RedButton from '@/components/UI/RedButton/RedButton'

function SendsTable() {
	const [limit, setLimit] = useState(10)
	const [limitMob, setLimitMob] = useState(5)
	const word = 'Удалить сертификат'
	const [isShow, setShow] = useState(false)
	const [currentPage, setCurrentPage] = useState(0)
	const [isConfirm, setConfirm] = useState(false)
	const [elements, setElements] = useState(data.slice(0, limit))
	const [elementsMob, setElementsMob] = useState(data.slice(0, limitMob))
	const [isComment, setComment] = useState(false)
	const [isAddComment, setAddComment] = useState(false)
	const [delComment, setDelComment] = useState(false)
	const [isAlert, setAlert] = useState(false)
	const [isSafe, setSafe] = useState(false)
	const [editCertificateM, setEditCertificateM] = useState(false)
	const [deleteCertificateM, setDeleteCertificateM] = useState(false)
	const [deleteCertificate, setDeleteCertificate] = useState(false)
	const pages = Array(Math.ceil(data.length / limit)).fill({})
	const modals = {
		comment: () => {
			setComment(true)
		},
		addComment: () => {
			setAddComment(true)
		},
		delCertificate: () => {
			setDeleteCertificateM(true)
		},
		editCertificate: () => {
			setEditCertificateM(true)
		}
	}
	function checkField(value: string) {
		value == word ? setConfirm(true) : setConfirm(false)
	}
	function toPage(num: number) {
		if (num >= 0 && num < pages.length) {
			setElements(data.slice(num * limit, (num + 1) * limit))
			setCurrentPage(num)
		}
	}
	return (
		<>
			<table className={s.table}>
				<thead>
					<tr>
						<td className={s.table__name}>Номер</td>
						<td className={s.table__name}>Сертификат</td>
						<td className={s.table__name}>Получатель</td>
						<td className={s.table__name}>Срок действия</td>
						<td className={s.table__name}>Комментарий</td>
						<td className={s.table__name}>Статус</td>
						<td className={s.table__name}>Действия</td>
					</tr>
				</thead>
				<tbody>
					{elements.length > 0 &&
						elements.map(element => {
							return (
								<TableRow
									modals={modals}
									key={element.id}
									element={element}
								></TableRow>
							)
						})}
				</tbody>
			</table>
			<div className={s.table__pagination}>
				<div className={s.table__buttons}>
					<button
						onClick={() => {
							toPage(currentPage - 2)
						}}
						className={s.table__paginationButton}
					>
						<Image
							className={s.table__arrIcon}
							src={'/icons/dleft.svg'}
							alt={'doubleleft'}
							width={20}
							height={20}
						/>
					</button>
					<button
						onClick={() => {
							toPage(currentPage - 1)
						}}
						className={s.table__paginationButton}
					>
						<Image
							className={s.table__arrIcon}
							src={'/icons/left.svg'}
							alt={'doubleleft'}
							width={20}
							height={20}
						/>
					</button>
				</div>
				{pages.length > 0 &&
					pages.map((element, index) => {
						if (index < 4)
							return (
								<PageNum
									key={index}
									active={currentPage === index}
									onClick={toPage}
									to={index}
								>
									{index + 1}
								</PageNum>
							)
						if (index == pages.length - 1)
							return (
								<PageNum
									key={index}
									onClick={toPage}
									active={currentPage === index}
									to={index}
								>
									{index + 30}
								</PageNum>
							)
					})}
				<div className={s.table__buttons}>
					<button
						onClick={() => {
							toPage(currentPage + 1)
						}}
						className={s.table__paginationButton}
					>
						<Image
							className={s.table__arrIcon}
							src={'/icons/right.svg'}
							alt={'doubleleft'}
							width={20}
							height={20}
						/>
					</button>
					<button
						onClick={() => {
							toPage(currentPage + 2)
						}}
						className={s.table__paginationButton}
					>
						<Image
							className={s.table__arrIcon}
							src={'/icons/dright.svg'}
							alt={'doubleleft'}
							width={20}
							height={20}
						/>
					</button>
				</div>
			</div>
			<div className={s.table__mob}>
				{elementsMob &&
					elementsMob.map(element => {
						return (
							<SendItem
								modals={modals}
								key={element.id}
								element={element}
							></SendItem>
						)
					})}
			</div>
			<button
				className={s.table__more}
				onClick={() => {
					setShow(!isShow)
					!isShow
						? setElementsMob(data.slice(0, data.length))
						: setElementsMob(data.slice(0, limitMob))
				}}
			>
				{isShow ? 'Скрыть' : 'Показать еще'}
			</button>
			<Modal onClick={setAddComment} active={isAddComment} className={s.full}>
				<Back />
				<ModalTitle className={s.big}>Добавление комментария</ModalTitle>
				<TextArea>Введите комментарий</TextArea>
				<PrimaryButton
					onClick={() => {
						setAddComment(false)
						setSafe(true)
					}}
				>
					Сохранить
				</PrimaryButton>
			</Modal>

			<Modal onClick={setComment} active={isComment} className={s.full}>
				<Back />
				<ModalTitle className={s.big}>Редактирование комментария</ModalTitle>
				<TextArea>Введите комментарий</TextArea>
				<div className={s.table__modalButtons}>
					<CancelButton
						icon={true}
						onClick={() => {
							setComment(false)
							setDelComment(true)
						}}
						className={s.cancelButton}
					>
						Удалить
					</CancelButton>
					<PrimaryButton
						onClick={() => {
							setComment(false)
							setSafe(true)
						}}
					>
						Сохранить
					</PrimaryButton>
				</div>
			</Modal>
			<Modal onClick={setDelComment} active={delComment} className={s.center}>
				<ModalTitle>Удалить комментарий?</ModalTitle>
				<div className={s.table__modalButtons}>
					<OutlineButton
						onClick={() => {
							setDelComment(false)
						}}
					>
						Отмена
					</OutlineButton>
					<RedButton
						onClick={() => {
							setDelComment(false)
							setAlert(true)
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
								stroke='white'
								strokeWidth='1.7'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M9.16675 6.99984V5.33317C9.16675 4.89114 9.34234 4.46722 9.6549 4.15466C9.96746 3.8421 10.3914 3.6665 10.8334 3.6665H14.1667C14.6088 3.6665 15.0327 3.8421 15.3453 4.15466C15.6578 4.46722 15.8334 4.89114 15.8334 5.33317V6.99984M18.3334 6.99984V18.6665C18.3334 19.1085 18.1578 19.5325 17.8453 19.845C17.5327 20.1576 17.1088 20.3332 16.6667 20.3332H8.33341C7.89139 20.3332 7.46746 20.1576 7.1549 19.845C6.84234 19.5325 6.66675 19.1085 6.66675 18.6665V6.99984H18.3334Z'
								stroke='white'
								strokeWidth='1.7'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M14.1667 11.1665V16.1665'
								stroke='white'
								strokeWidth='1.7'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M10.8333 11.1665V16.1665'
								stroke='white'
								strokeWidth='1.7'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
						Удалить
					</RedButton>
				</div>
			</Modal>
			<Modal
				onClick={setEditCertificateM}
				active={editCertificateM}
				className={s.full}
			>
				<Back
					onClick={() => {
						setEditCertificateM(false)
					}}
				/>
				<ModalTitle className={s.edit__title}>
					Редактирование отправленного сертификата
				</ModalTitle>
				<ModalSubTitle className={s.edit__subtitle}>
					Семейные выходные в уютном доме «Taiga» на Байкале{' '}
					<span className={s.edit__dot}>•</span> 10 000 ₽
				</ModalSubTitle>
				<div className={s.edit__item}>
					<Input hide={false} icon={'person'} className={s.editField}>
						Получатель
					</Input>
					<p className={clsx(s.edit__text)}>
						Имя лучше указывать в дательном падеже. Например: «Любимой
						Александре».
					</p>
				</div>
				<div className={s.edit__item}>
					<Input hide={false} className={s.editField} icon={'calendar'}>
						Срок действия сертификата
					</Input>
					<p className={clsx(s.edit__text, s.mobHide)}>
						До какого числа клиент может воспользоваться сертификатом
					</p>
				</div>
				<TextArea className={s.edit__area}>
					Укажите от кого сертификат или пожелание
				</TextArea>
				<PrimaryButton
					onClick={() => {
						setEditCertificateM(false)
						setSafe(true)
					}}
				>
					Сохранить изменения
				</PrimaryButton>
			</Modal>
			<Modal
				onClick={setDeleteCertificateM}
				active={deleteCertificateM}
				className={s.small}
			>
				<ModalTitle className={s.red}>Внимание!</ModalTitle>
				<ModalText className={s.table__delText}>
					Если вы удалите отправленный сертификат, то он перестанет быть
					доступен всем, кому был отправлен.
				</ModalText>
				<ModalSubTitle className={s.table__subText}>
					Для подтверждения удаления введите «Удалить сертификат»
				</ModalSubTitle>
				<Input
					hide={false}
					hidden={true}
					className={s.delete}
					placeholder={' '}
					onChange={checkField}
				>
					Введите текст
				</Input>
				<div className={s.table__modalButtons + ' ' + s.table__hide}>
					<RedButton
						disabled={!isConfirm}
						onClick={() => {
							setDeleteCertificateM(false)
							setDeleteCertificate(true)
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
								stroke='white'
								strokeWidth='1.7'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M9.16675 6.99984V5.33317C9.16675 4.89114 9.34234 4.46722 9.6549 4.15466C9.96746 3.8421 10.3914 3.6665 10.8334 3.6665H14.1667C14.6088 3.6665 15.0327 3.8421 15.3453 4.15466C15.6578 4.46722 15.8334 4.89114 15.8334 5.33317V6.99984M18.3334 6.99984V18.6665C18.3334 19.1085 18.1578 19.5325 17.8453 19.845C17.5327 20.1576 17.1088 20.3332 16.6667 20.3332H8.33341C7.89139 20.3332 7.46746 20.1576 7.1549 19.845C6.84234 19.5325 6.66675 19.1085 6.66675 18.6665V6.99984H18.3334Z'
								stroke='white'
								strokeWidth='1.7'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M14.1667 11.1665V16.1665'
								stroke='white'
								strokeWidth='1.7'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M10.8333 11.1665V16.1665'
								stroke='white'
								strokeWidth='1.7'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
						Удалить
					</RedButton>
				</div>
				<div className={s.table__mobButtons}>
					<DeleteButton
						onClick={() => {
							setDeleteCertificateM(false)
							setDeleteCertificate(true)
						}}
					/>
					<CancelButton
						onClick={() => {
							setDeleteCertificateM(false)
						}}
					>
						Отмена
					</CancelButton>
				</div>
			</Modal>
			<Alert
				state={setDeleteCertificate}
				active={deleteCertificate}
				icon={'/icons/success.svg'}
			>
				Сертификат удален!
			</Alert>
			<Alert state={setAlert} active={isAlert} icon={'/icons/delete.svg'}>
				Комментарий удален!
			</Alert>
			<Alert state={setSafe} active={isSafe} icon={'/icons/success.svg'}>
				Сохранено!
			</Alert>
			<SendsInformation dashed={false}>
				<h3 className={s.empty}>
					К сожалению, подходящих сертификатов не найдено
				</h3>
			</SendsInformation>
		</>
	)
}

export default SendsTable
