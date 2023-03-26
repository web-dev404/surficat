import { FC, PropsWithChildren } from 'react'

import Header from '@/layout/header/Header'

import s from './Empty.module.scss'
import Meta from './meta/Meta'
import { ISeo } from './meta/meta.interface'

interface ILayout extends ISeo {}

const Empty: FC<PropsWithChildren<ILayout>> = ({ children, ...rest }) => {
	return (
		<>
			<Meta {...rest} />
			<Header />
			<section className={s.empty}>{children}</section>
		</>
	)
}

export default Empty