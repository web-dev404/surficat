import cn from 'clsx'
import React, { FC, PropsWithChildren } from 'react'
import { CSSTransition } from 'react-transition-group'

import s from './Hint.module.scss'

interface IHint {
	visible: boolean
	className?: string
}
const Hint: FC<PropsWithChildren<IHint>> = ({
	children,
	visible,
	className
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
			<div ref={nodeRef} className={cn(s.hint, s[`hint__${className}`])}>
				<div className={s.hint__text}>{children}</div>
			</div>
		</CSSTransition>
	)
}
export default Hint
