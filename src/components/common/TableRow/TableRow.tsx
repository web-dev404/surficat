import React, { FC, PropsWithChildren, useState } from 'react'

import ActionBox from '@/common/ActionBox/ActionBox'
import Add from '@/common/Add/Add'
import Comment from '@/common/Comment/Comment'
import Status from '@/common/Status/Status'

import s from './TableRow.module.scss'

interface ITableRow {
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
const TableRow: FC<PropsWithChildren<ITableRow>> = ({
	children,
	element,
	modals
}) => {
	return (
		<>
			<tr className={s.row}>
				<td className={s.row__cell}>
					<a href={'#'} className={s.row__number}>
						{element.num}
					</a>
					<span className={s.row__date}>{element.date}</span>
				</td>
				<td className={s.row__cell + ' ' + s.row__sertificate}>
					{element.certificate}
				</td>
				<td className={s.row__cell}>
					<span className={s.row__user}>{element.name}</span>
				</td>
				<td className={s.row__cell}>{element.term}</td>
				<td className={s.row__cell}>
					{element.comment ? (
						<Comment onClick={modals.comment}>{element.comment}</Comment>
					) : (
						<Add onClick={modals.addComment} />
					)}
				</td>
				<td className={s.row__cell}>
					<Status state={element.status}></Status>
				</td>
				<td className={s.row__cell}>
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
				</td>
			</tr>
		</>
	)
}

export default TableRow
