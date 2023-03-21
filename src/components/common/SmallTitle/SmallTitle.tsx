import React, { FC, PropsWithChildren } from 'react'

import s from './SmallTitle.module.scss'

const SmallTitle: FC<PropsWithChildren> = ({ children }) => {
	return <h3 className={s.title}>{children}</h3>
}

export default SmallTitle
