import clsx from 'clsx'
import Image from 'next/image'
import React, { FC, PropsWithChildren } from 'react'

import s from './CancelButton.module.scss'

interface ICancelButton {
	icon?: boolean
	className?: string
	onClick: Function
}
const CancelButton: FC<PropsWithChildren<ICancelButton>> = ({
	children,
	icon,
	onClick,
	className
}) => {
	return (
		<button
			className={clsx(s.button, className)}
			onClick={() => {
				onClick()
			}}
		>
			{icon && (
				<svg
					width='25'
					height='24'
					viewBox='0 0 25 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className={s.button__icon}
				>
					<path
						d='M5 7H6.66667H20'
						stroke='#232124'
						stroke-width='1.7'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M9.16663 6.99984V5.33317C9.16663 4.89114 9.34222 4.46722 9.65478 4.15466C9.96734 3.8421 10.3913 3.6665 10.8333 3.6665H14.1666C14.6087 3.6665 15.0326 3.8421 15.3451 4.15466C15.6577 4.46722 15.8333 4.89114 15.8333 5.33317V6.99984M18.3333 6.99984V18.6665C18.3333 19.1085 18.1577 19.5325 17.8451 19.845C17.5326 20.1576 17.1087 20.3332 16.6666 20.3332H8.33329C7.89127 20.3332 7.46734 20.1576 7.15478 19.845C6.84222 19.5325 6.66663 19.1085 6.66663 18.6665V6.99984H18.3333Z'
						stroke='#232124'
						stroke-width='1.7'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M14.1666 11.1665V16.1665'
						stroke='#232124'
						stroke-width='1.7'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M10.8334 11.1665V16.1665'
						stroke='#232124'
						stroke-width='1.7'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
				</svg>
			)}
			{children}
		</button>
	)
}

export default CancelButton
