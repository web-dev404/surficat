import cn from 'clsx'
import React, { FC, PropsWithChildren } from 'react'

import s from './ModalTitle.module.scss'

interface IModalTitle {
	className?: string
}
const ModalTitle: FC<PropsWithChildren<IModalTitle>> = ({
	children,
	className
}) => {
	return <h5 className={cn(s.title, className)}>{children}</h5>
}

export default ModalTitle
