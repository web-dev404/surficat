import { FC, PropsWithChildren } from 'react'

import s from './SubTitle.module.scss'

const SubTitle: FC<PropsWithChildren> = ({ children }) => {
	return <p className={s.subtitle}>{children}</p>
}

export default SubTitle
