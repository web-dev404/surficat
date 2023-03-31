import { FC, PropsWithChildren } from 'react'

import s from './Empty.module.scss'
import Meta from './meta/Meta'
import { ISeo } from './meta/meta.interface'

interface ILayout extends ISeo {}

const Empty2: FC<PropsWithChildren<ILayout>> = ({ children, ...rest }) => {
	return (
		<>
			<Meta {...rest} />
			<section className={s.empty}>{children}</section>
		</>
	)
}

export default Empty2
