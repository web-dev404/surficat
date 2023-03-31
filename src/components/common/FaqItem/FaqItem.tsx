import Image from 'next/image'
import React, { FC, PropsWithChildren, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import s from './FaqItem.module.scss'

interface IFaqItem {
	title: string
}
const FaqItem: FC<PropsWithChildren<IFaqItem>> = ({ children, title }) => {
	const [isVisible, setVisibility] = useState(false)
	const nodeRef = React.useRef(null)
	return (
		<li className={s.item}>
			<div
				className={s.item__header}
				onClick={() => {
					setVisibility(!isVisible)
				}}
			>
				<h2 className={s.item__title}>{title}</h2>
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className={s.item__icon + ' ' + (isVisible && s.item__icon_active)}
				>
					<path
						d='M7 9.5L12 14.5L17 9.5'
						stroke='#232124'
						stroke-width='1.7'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
				</svg>
			</div>
			<CSSTransition in={isVisible} timeout={0} unmountOnExit>
				<p className={s.item__text}>{children}</p>
			</CSSTransition>
		</li>
	)
}

export default FaqItem
