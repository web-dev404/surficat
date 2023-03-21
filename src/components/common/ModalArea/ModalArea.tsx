import clsx from 'clsx'
import React, { useState } from 'react'

import s from './ModalArea.module.scss'

interface IModalArea {
	placeholder?: string
}
const ModalArea = ({ placeholder }: IModalArea) => {
	const [focus, setFocus] = useState(false)
	return (
		<div className={s.area}>
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
				{placeholder}
			</span>
		</div>
	)
}

export default ModalArea
