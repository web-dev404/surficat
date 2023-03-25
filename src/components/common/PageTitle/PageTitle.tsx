import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC, PropsWithChildren } from 'react'

import styles from './PageTitle.module.scss'

interface IPageTitle {
	className?: string
	back?: boolean
}
const PageTitle: FC<PropsWithChildren<IPageTitle>> = ({
	children,
	back,
	className
}) => {
	return (
		<h1 className={clsx(`${styles.title} ${styles.title}`, className)}>
			{back && (
				<Link href={'/certificate'} className={styles.title__icon}>
					<Image
						src={'/icons/back.svg'}
						alt={'back-arrow'}
						width={32}
						height={32}
					/>
				</Link>
			)}
			{children}
		</h1>
	)
}

export default PageTitle
