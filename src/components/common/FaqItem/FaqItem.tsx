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
				<Image
					src={'/icons/select.svg'}
					alt={'arrow'}
					width={20}
					height={20}
					className={s.item__icon + ' ' + (isVisible && s.item__icon_active)}
				/>
			</div>
			<CSSTransition
				nodeRef={nodeRef}
				in={isVisible}
				timeout={300}
				unmountOnExit
				classNames='loader'
			>
				<p ref={nodeRef} className={s.item__text}>
					{children}
				</p>
			</CSSTransition>
		</li>
	)
}

export default FaqItem
