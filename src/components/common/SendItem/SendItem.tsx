import cn from 'clsx'
import React, { useState } from 'react'

import ActionBox from '@/common/ActionBox/ActionBox'
import Add from '@/common/Add/Add'
import Comment from '@/common/Comment/Comment'
import Status from '@/common/Status/Status'

import s from './SendItem.module.scss'

interface ISendItem {
	modals: {
		comment: Function
		addComment: Function
		delCertificate: Function
		editCertificate: Function
	}
	element: {
		num: number
		date: string
		certificate: string
		name: string
		term: string
		comment: string
		status: number
	}
}
const SendItem = ({ element, modals }: ISendItem) => {
	const [isShow, setShow] = useState(false)
	return (
		<div className={s.item}>
			<div>
				<span className={s.item__name}>Номер</span>
				<div className={s.item__num}>{element.num}</div>
			</div>
			<div>
				<span className={s.item__name}>Статус</span>
				<Status state={element.status}></Status>
			</div>
			<div>
				<span className={s.item__name}>Дата отправки</span>
				<span className={s.item__date}>{element.date}</span>
			</div>
			<div>
				<span className={s.item__name}>Срок действия</span>
				<span className={s.item__date}>{element.term}</span>
			</div>
			<div className={s.item__large}>
				<span className={s.item__name}>Сертификат</span>
				<p className={s.item__certificate}>{element.certificate}</p>
			</div>
			{isShow && (
				<>
					<div className={s.item__large}>
						<span className={s.item__name}>Получатель</span>
						<span className={s.item__for}>{element.name}</span>
					</div>
					<div className={s.item__large}>
						<span className={s.item__name}>Комментарий</span>
						{element.comment ? (
							<Comment onClick={modals.comment}>{element.comment}</Comment>
						) : (
							<Add onClick={modals.addComment} />
						)}
					</div>
				</>
			)}
			<div className={cn(s.item__buttons, s.item__large)}>
				<button
					className={s.item__more}
					onClick={() => {
						setShow(!isShow)
					}}
				>
					{isShow ? 'Скрыть' : 'Подробнее'}
				</button>
				<div className={s.item__wrapper}>
					{element.status == 2 ? (
						<ActionBox
							color={'#68D258'}
							img={'/icons/complete.svg'}
							alt={'complete'}
							onClick={() => console.log('')}
						>
							Выполнен
						</ActionBox>
					) : (
						<ActionBox
							color={'#F8C52F'}
							img={'/icons/refresh.svg'}
							alt={'refresh'}
							onClick={() => console.log('')}
						>
							Возобновить
						</ActionBox>
					)}

					<ActionBox
						color={'#6D54FE'}
						img={'/icons/edit.svg'}
						alt={'edit'}
						onClick={modals.editCertificate}
					>
						Редактировать
					</ActionBox>
					<ActionBox
						onClick={modals.delCertificate}
						color={'#FF4D50'}
						img={'/icons/trash.svg'}
						alt={'trash'}
					>
						Удалить
					</ActionBox>
				</div>
			</div>
		</div>
	)
}

export default SendItem
