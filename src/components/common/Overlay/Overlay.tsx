import { FC, PropsWithChildren } from 'react'

import s from './Overlay.module.scss'

const Overlay: FC<PropsWithChildren> = ({ children }) => {
	return <div className={s.overlay}>{children}</div>
}

export default Overlay
