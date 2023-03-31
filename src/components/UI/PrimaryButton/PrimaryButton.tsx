import clsx from 'clsx'
import React, { FC, PropsWithChildren } from 'react'

import s from './PrimaryButton.module.scss'

interface IPrimaryButton {
	className?: string
	onClick?: () => void
	size?: 'medium' | 'small' | 'xs'
	disabled?: boolean
}
const PrimaryButton: FC<PropsWithChildren<IPrimaryButton>> = ({
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

export default PrimaryButton
