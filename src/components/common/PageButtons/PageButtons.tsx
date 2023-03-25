import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import styles from './PageButtons.module.scss'

interface IPageButtons {
	mob: boolean
	className?: string
}
const PageButtons = ({ className, mob }: IPageButtons) => {
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
				Сертификаты
			</Link>
			<Link
				href={'/sends'}
				className={clsx(styles.buttons__btn, {
					[styles.buttons__btn__active]: router.pathname === '/sends'
				})}
			>
				Отправки
			</Link>
		</div>
	)
}

export default PageButtons
