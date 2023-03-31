import React, { FC, PropsWithChildren } from 'react'

import button from '@/common/Button/Button'

import s from './RedButton.module.scss'

interface IRedButton {
	className?: string
	disabled?: boolean
	onClick?: () => void
}
const RedButton: FC<PropsWithChildren<IRedButton>> = ({
	children,
	onClick = () => {},
	disabled
}) => {
	return (
		<button
			className={s.button}
			onClick={() => {
				onClick()
			}}
			disabled={disabled}
		>
			{children}
		</button>
	)
}

export default RedButton
