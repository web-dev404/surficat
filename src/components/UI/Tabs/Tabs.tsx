import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import styles from './Tabs.module.scss'

interface IPageButtons {
	mob?: boolean
	className?: string
	firstValue?: string
	secondValue?: string
}
const Tabs = ({
	className,
	mob,
	firstValue = 'Сертификаты',
	secondValue = 'Отправки'
}: IPageButtons) => {
	const router = useRouter()
	return (
		<div
			className={clsx(
				styles.buttons,
				{ [styles.buttons__mob]: mob },
				className
			)}
		>
			<Link
				href='/certificate'
				className={clsx(styles.buttons__btn, {
					[styles.buttons__btn__active]: router.pathname === '/certificate'
				})}
			>
				{firstValue}
			</Link>
			<Link
				href={'/sends'}
				className={clsx(styles.buttons__btn, {
					[styles.buttons__btn__active]: router.pathname === '/sends'
				})}
			>
				{secondValue}
			</Link>
		</div>
	)
}

export default Tabs
