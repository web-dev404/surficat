import clsx from 'clsx'
import React, { FC, PropsWithChildren } from 'react'

import s from './ButtonBlack.module.scss'

interface IBlackButton {
	className?: string
	onClick?: () => void
	size?: 'medium' | 'small' | 'xs'
	disabled?: boolean
}
const BlackButton: FC<PropsWithChildren<IBlackButton>> = ({
	children,
	className,
	onClick = () => {},
	disabled,
	size = ''
}) => {
	return (
		<button
			disabled={disabled}
			onClick={() => {
				onClick()
			}}
			className={clsx(s.button, s[size], className)}
		>
			{children}
		</button>
	)
}

export default BlackButton
