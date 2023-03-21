import Image from 'next/image'
import React, { FC, PropsWithChildren } from 'react'

import s from './CancelButton.module.scss'

interface ICancelButton {
	icon?: boolean
	onClick: Function
}
const CancelButton: FC<PropsWithChildren<ICancelButton>> = ({
	children,
	icon,
	onClick
}) => {
	return (
		<button
			className={s.button}
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
