import clsx from 'clsx'
import React, { FC, PropsWithChildren } from 'react'

import styles from './PageHeader.module.scss'

interface IPageHeader {
	className?: string
}
const PageHeader: FC<PropsWithChildren<IPageHeader>> = ({
	children,
	className
}) => {
	return <div className={clsx(styles.header__inner, className)}>{children}</div>
}

export default PageHeader
