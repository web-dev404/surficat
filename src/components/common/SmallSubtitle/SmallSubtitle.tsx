import React, { FC, PropsWithChildren } from 'react'

import s from './SmallSubtitle.module.scss'

const SmallSubtitle: FC<PropsWithChildren> = ({ children }) => {
	return <p className={s.subtitle}>{children}</p>
}

export default SmallSubtitle
