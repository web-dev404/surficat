import { FC, PropsWithChildren } from 'react'

import s from './Title.module.scss'

const Title: FC<PropsWithChildren> = ({ children }) => {
	return <h1 className={s.title}>{children}</h1>
}

export default Title
