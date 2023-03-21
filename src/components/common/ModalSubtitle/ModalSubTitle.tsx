import clsx from 'clsx'
import React, { FC, PropsWithChildren } from 'react'

import s from './ModalSubTitle.module.scss'

interface IModalTitle {
	className?: string
}
const ModalSubTitle: FC<PropsWithChildren<IModalTitle>> = ({
	children,
	className
}) => {
	return <p className={clsx(s.subtitle, className)}>{children}</p>
}

export default ModalSubTitle
