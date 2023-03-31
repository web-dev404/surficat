import clsx from 'clsx'
import React, { FC, PropsWithChildren } from 'react'

import s from './OutlineButton.module.scss'

interface IOutlineButton {
	className?: string
	onMouseEnter?: () => void
	onMouseLeave?: () => void
	onClick?: () => void
	fill?: boolean
	disabled?: boolean
	size?: 'medium' | 'small' | 'xs'
}
const OutlineButton: FC<PropsWithChildren<IOutlineButton>> = ({
	children,
	className,
	fill,
	disabled,
	size = '',
	onClick = () => {},
	onMouseEnter = () => {},
	onMouseLeave = () => {}
}) => {
	return (
		<button
			disabled={disabled}
			onMouseLeave={() => onMouseLeave()}
			onMouseEnter={() => onMouseEnter()}
			className={clsx(s.button, s[size], className)}
			onClick={e => {
				onClick()
			}}
		>
			{children}
		</button>
	)
}

export default OutlineButton
