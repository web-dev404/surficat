import clsx from 'clsx'
import { FC, PropsWithChildren } from 'react'

import s from './Window.module.scss'

interface IWindow {
	className?: string
}
const Window: FC<PropsWithChildren<IWindow>> = ({ children, className }) => {
	return (
		<div className={clsx(s.window, className)}>
			<div className={clsx(s.window__inner)}>{children}</div>
		</div>
	)
}
export default Window
