import cn from 'clsx'
import clsx from 'clsx'
import Image from 'next/image'
import React, { FC, PropsWithChildren, useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import CloseModal from '@/common/CloseModal/CloseModal'
import ModalTitle from '@/common/ModalTitle/ModalTitle'

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
			<div className={clsx(s.modal, { [s.modal__hide]: onMob })} ref={nodeRef}>
				<div className={cn(s.modal__wrapper, s[`modal__${className}`])}>
					<div
						className={s.close}
						onClick={() => {
							hide()
						}}
					>
						<Image
							src={'/icons/close.svg'}
							alt={'close'}
							width={20}
							height={20}
							className={s.close__icon}
						/>
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
