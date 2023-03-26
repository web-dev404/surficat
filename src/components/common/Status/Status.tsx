import { FC, PropsWithChildren } from 'react'

import s from './Status.module.scss'

interface StatusProps {
	state: number
	className?: string
	onClick?: Function
}
const Status: FC<PropsWithChildren<StatusProps>> = ({
	children,
	state,
	onClick
}) => {
	let result
	if (state == 0) {
		result = (
			<div
				className={s.status + ' ' + s.status__code0}
				onClick={() => {
					onClick && onClick()
				}}
			>
				Все статусы
			</div>
		)
	} else if (state == 1) {
		result = (
			<div
				className={s.status + ' ' + s.status__code1}
				onClick={() => {
					onClick && onClick()
				}}
			>
				Активен
			</div>
		)
	} else if (state == 2) {
		result = (
			<div
				className={s.status + ' ' + s.status__code2}
				onClick={() => {
					onClick && onClick()
				}}
			>
				Выполнен
			</div>
		)
	} else if (state == 3) {
		result = (
			<div
				className={s.status + ' ' + s.status__code3}
				onClick={() => {
					onClick && onClick()
				}}
			>
				Просрочен
			</div>
		)
	}
	return <>{result}</>
}

export default Status
