import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC, PropsWithChildren } from 'react'

import styles from './PageTitle.module.scss'

interface IPageTitle {
	className?: string
}
const PageTitle: FC<PropsWithChildren<IPageTitle>> = ({
	children,
	className
}) => {
	return (
		<h1 className={clsx(`${styles.title} ${styles.title}`, className)}>
			{children}
		</h1>
	)
}

export default PageTitle
