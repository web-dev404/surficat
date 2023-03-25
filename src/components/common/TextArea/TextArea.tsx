import clsx from 'clsx'
import React, { FC, PropsWithChildren, useState } from 'react'

import s from './ModalArea.module.scss'

interface IModalArea {
	className?: string
}
const TextArea: FC<PropsWithChildren<IModalArea>> = ({
	className,
	children
}) => {
	const [focus, setFocus] = useState(false)
	return (
		<div className={clsx(s.area, className)}>
			<textarea
				name='comment'
				className={s.area__inner}
				onFocus={() => {
					setFocus(true)
				}}
				onBlur={() => {
					setFocus(false)
				}}
			></textarea>
			<span
				className={clsx(s.area__placeholder, {
					[s.area__placeholderActive]: focus
				})}
			>
				{children}
			</span>
		</div>
	)
}

export default TextArea
