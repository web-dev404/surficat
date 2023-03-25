import clsx from 'clsx'
import React, { FC, PropsWithChildren } from 'react'

import s from './WarnBlock.module.scss'

interface IWarnBlock {
	className?: string
}
const WarnBlock: FC<PropsWithChildren<IWarnBlock>> = ({
	children,
	className
}) => {
	return (
		<div className={clsx(s.alert, className)}>
			<img src='/icons/company-alert.svg' alt='alert icon' />
			{children}
		</div>
	)
}

export default WarnBlock
