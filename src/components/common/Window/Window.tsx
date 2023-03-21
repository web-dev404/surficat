import { FC, PropsWithChildren } from 'react'

import s from './Window.module.scss'

const Window: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={s.window}>
			<div className={s.window__inner}>{children}</div>
		</div>
	)
}
export default Window
