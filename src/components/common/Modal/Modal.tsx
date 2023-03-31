import clsx from 'clsx'
import React, {
	FC,
	MouseEvent,
	PropsWithChildren,
	useEffect,
	useState
} from 'react'
import { CSSTransition } from 'react-transition-group'

import s from './Modal.module.scss'

interface IModal {
	active: boolean
	onClick: Function
	className?: string
	onMob?: boolean
}
const Modal: FC<PropsWithChildren<IModal>> = ({
	children,
	onClick,
	active,
	className,
	onMob = false
}) => {
	const nodeRef = React.useRef(null)
	const [visible, setVisible] = useState(active)
	useEffect(() => {
		setVisible(active)
		if (visible && !onMob) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}
	})
	function hide() {
		setVisible(false)
		onClick(false)
	}
	return (
		<CSSTransition
			nodeRef={nodeRef}
			in={visible}
			classNames='modal'
			timeout={300}
			unmountOnExit
		>
			<div
				className={clsx(s.modal, { [s.modal__hide]: onMob })}
				ref={nodeRef}
				onClick={(event: MouseEvent<HTMLDivElement>) => {
					const target = event.target as HTMLDivElement
					target.contains(nodeRef.current) && hide()
				}}
			>
				<div className={clsx(s.modal__wrapper, className)}>
					<div
						className={s.close}
						onClick={() => {
							hide()
						}}
					>
						<svg
							width='20'
							height='20'
							viewBox='0 0 20 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className={s.close__icon}
						>
							<path
								d='M16 4L4 16'
								stroke='#787486'
								strokeWidth='1.7'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M4 4L16 16'
								stroke='#787486'
								strokeWidth='1.7'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</div>
					<div
						className={s.modal__back}
						onClick={() => {
							hide()
						}}
					>
						<svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M19 12H6.16669'
								stroke='#6D54FE'
								strokeWidth='1.7'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M11 17.8337L5.16667 12.0003L11 6.16699'
								stroke='#6D54FE'
								strokeWidth='1.7'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
						Назад
					</div>
					{children}
				</div>
			</div>
		</CSSTransition>
	)
}

export default Modal
