import Image from 'next/image'
import React, { useState } from 'react'

import Alert from '@/common/Alert/Alert'
import Back from '@/common/Back/Back'
import Button from '@/common/Button/Button'
import CancelButton from '@/common/CancelButton/CancelButton'
import DeleteButton from '@/common/DeleteButton/DeleteButton'
import Field from '@/common/Field/Field'
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

function SendsTable() {
	let limit = 10
	let limitMob = 5
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
			{/*<SendsInformation dashed={true}>*/}
			{/*	<h3 className={s.empty}>*/}
			{/*		К сожалению, подходящих сертификатов не найдено*/}
			{/*	</h3>*/}
			{/*</SendsInformation>*/}
			<div className={s.table__pagination}>
				<div className={s.table__buttons}>
					<button
						onClick={() => {
							toPage(currentPage - 2)
						}}
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
			<Modal
				onClick={setAddComment}
				active={isAddComment}
				className={s.table__full}
			>
				<ModalTitle className={s.big}>Добавление комментария</ModalTitle>
				<TextArea>Введите комментарий</TextArea>
				<Button
					onClick={() => {
						setAddComment(false)
						setSafe(true)
					}}
				>
					Сохранить
				</Button>
			</Modal>

			<Modal onClick={setComment} active={isComment} className={s.full}>
				<ModalTitle className={s.big}>Редактирование комментария</ModalTitle>
				<TextArea>Введите комментарий</TextArea>
				<div className={s.table__modalButtons}>
					<CancelButton
						icon={true}
						onClick={() => {
							setComment(false)
							setDelComment(true)
						}}
					>
						Удалить
					</CancelButton>
					<Button
						onClick={() => {
							setComment(false)
							setSafe(true)
						}}
					>
						Сохранить
					</Button>
				</div>
			</Modal>
			<Modal onClick={setDelComment} active={delComment} className={s.center}>
				<ModalTitle>Удалить комментарий?</ModalTitle>
				<div className={s.table__modalButtons}>
					<CancelButton
						onClick={() => {
							setDelComment(false)
						}}
					>
						Отмена
					</CancelButton>
					<DeleteButton
						onClick={() => {
							setDelComment(false)
							setAlert(true)
						}}
					/>
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
					Семейные выходные в уютном доме «Taiga» на Байкале • 10 000 ₽
				</ModalSubTitle>
				<div className={s.edit__item}>
					<Field hide={false} icon={'/icons/user.svg'} className={s.editField}>
						Получатель
					</Field>
					<p className={s.edit__text}>
						Имя лучше указывать в дательном падеже. Например: «Любимой
						Александре».
					</p>
				</div>
				<div className={s.edit__item}>
					<Field
						hide={false}
						className={s.editField}
						icon={'/icons/calendar.svg'}
					>
						Срок действия сертификата
					</Field>
					<p className={s.edit__text}>
						До какого числа клиент может воспользоваться сертификатом
					</p>
				</div>
				<TextArea className={s.edit__area}>
					Укажите от кого сертификат или пожелание
				</TextArea>
				<Button
					onClick={() => {
						setEditCertificateM(false)
						setSafe(true)
					}}
				>
					Отправить
				</Button>
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
				<Field
					hide={false}
					hidden={true}
					className={s.delete}
					placeholder={'Удалить сертификат'}
					onChange={checkField}
				>
					Введите текст
				</Field>
				<div className={s.table__modalButtons + ' ' + s.table__hide}>
					<DeleteButton
						disabled={!isConfirm}
						onClick={() => {
							setDeleteCertificateM(false)
							setDeleteCertificate(true)
						}}
					/>
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
		</>
	)
}

export default SendsTable
