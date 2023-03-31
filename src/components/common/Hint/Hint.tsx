import cn from 'clsx'
import clsx from 'clsx'
import React, { FC, PropsWithChildren } from 'react'
import { CSSTransition } from 'react-transition-group'

import s from './Hint.module.scss'

interface IHint {
	visible: boolean
	className?: string
	up?: boolean
}
const Hint: FC<PropsWithChildren<IHint>> = ({
	children,
	visible,
	className,
	up
}) => {
	const nodeRef = React.useRef(null)
	return (
		<CSSTransition
			nodeRef={nodeRef}
			in={visible}
			timeout={300}
			unmountOnExit
			classNames='alert'
		>
			<div ref={nodeRef} className={clsx(s.hint, { [s.hint__up]: up })}>
				<div className={s.hint__text}>{children}</div>
			</div>
		</CSSTransition>
	)
}
export default Hint
