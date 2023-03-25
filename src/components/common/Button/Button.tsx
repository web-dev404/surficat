import clsx from 'clsx'
import { FC, PropsWithChildren } from 'react'

import s from './Button.module.scss'

interface IButton {
	onClick?: Function
	disabled?: boolean
	className?: string
}
const ButtonComponent: FC<PropsWithChildren<IButton>> = ({
	children,
	onClick,
	className,
	disabled = false
}) => {
	return (
		<button
			className={clsx(s.btn, className)}
			onClick={() => {
				onClick ? onClick() : ''
			}}
			disabled={disabled}
		>
			{children}
		</button>
	)
}
export default ButtonComponent
