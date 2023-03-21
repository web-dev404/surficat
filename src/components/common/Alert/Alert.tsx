import Image from 'next/image'
import React, { FC, PropsWithChildren, useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import s from './Alert.module.scss'

interface IAlert {
	state: Function
	active: boolean
	icon: string
}
const Alert: FC<PropsWithChildren<IAlert>> = ({
	children,
	icon,
	active,
	state
}) => {
	const [isActive, setActive] = useState(false)
	useEffect(() => {
		setActive(active)
		if (active) {
			hide(3000)
		}
	})
	function hide(time: number) {
		setTimeout(() => {
			setActive(false)
			state(false)
		}, time)
	}
	const nodeRef = React.useRef(null)
	return (
		<CSSTransition
			nodeRef={nodeRef}
			classNames='info'
			in={isActive}
			timeout={300}
			unmountOnExit
		>
			<div className={s.alert} ref={nodeRef}>
				<Image
					src={icon}
					alt={'icon'}
					width={24}
					height={24}
					className={s.alert__icon}
				/>
				{children}
				<Image
					src={'/icons/across.svg'}
					alt={'across'}
					width={24}
					height={24}
					className={s.alert__across}
					onClick={() => {
						hide(0)
					}}
				/>
			</div>
		</CSSTransition>
	)
}

export default Alert
