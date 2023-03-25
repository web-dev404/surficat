import clsx from 'clsx'
import React, { FC, PropsWithChildren } from 'react'

import s from './SmallSubtitle.module.scss'

interface ISmallSubtitle {
	className?: string
}
const SmallSubtitle: FC<PropsWithChildren<ISmallSubtitle>> = ({
	children,
	className
}) => {
	return <p className={clsx(s.subtitle, className)}>{children}</p>
}

export default SmallSubtitle
