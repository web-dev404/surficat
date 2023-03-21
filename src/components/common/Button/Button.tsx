import { FC, PropsWithChildren } from 'react'

import s from './Button.module.scss'

interface IButton {
	onClick?: Function
	disabled?: boolean
}
const ButtonComponent: FC<PropsWithChildren<IButton>> = ({
	children,
	onClick,
	disabled = false
}) => {
	return (
		<button
			className={s.btn}
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
