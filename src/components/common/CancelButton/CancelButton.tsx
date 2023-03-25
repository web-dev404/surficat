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
				<Image
					src={'/icons/trash.svg'}
					alt={'trash'}
					width={20}
					height={20}
					className={s.button__icon}
				/>
			)}
			{children}
		</button>
	)
}

export default CancelButton
