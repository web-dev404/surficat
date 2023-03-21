import clsx from 'clsx'
import React, { FC, PropsWithChildren } from 'react'

import s from './ModalText.module.scss'

interface IModalText {
	className?: string
}
const ModalText: FC<PropsWithChildren<IModalText>> = ({
	children,
	className
}) => {
	return <p className={clsx(s.text, className)}>{children}</p>
}

export default ModalText
