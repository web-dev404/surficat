import clsx from 'clsx'
import React, { FC, PropsWithChildren } from 'react'

import s from './SmallTitle.module.scss'

interface ISmallTitle {
	className?: string
}
const SmallTitle: FC<PropsWithChildren<ISmallTitle>> = ({
	children,
	className
}) => {
	return <h3 className={clsx(s.title, className)}>{children}</h3>
}

export default SmallTitle
