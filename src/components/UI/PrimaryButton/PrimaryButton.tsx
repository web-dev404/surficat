import clsx from 'clsx'
import React, { FC, PropsWithChildren } from 'react'

import s from './PrimaryButton.module.scss'

interface IPrimaryButton {
	className?: string
	onClick?: () => void
	size?: 'medium' | 'small'
}
const PrimaryButton: FC<PropsWithChildren<IPrimaryButton>> = ({
	children,
	className,
	onClick = () => {},
	size = ''
}) => {
	return (
		<button
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
