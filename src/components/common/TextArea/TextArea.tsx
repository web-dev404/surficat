import clsx from 'clsx'
import React, { FC, PropsWithChildren, useState } from 'react'

import s from './TextArea.module.scss'

interface IModalArea {
	className?: string
	disabled?: boolean
	error?: boolean
	errorText?: string
}
const TextArea: FC<PropsWithChildren<IModalArea>> = ({
	className,
	children,
	disabled,
	error,
	errorText
}) => {
	const [focus, setFocus] = useState(false)
	return (
		<div className={clsx(s.area, className)}>
			<textarea
				disabled={disabled}
				name='comment'
				className={clsx(s.area__inner, { [s.area__error]: error })}
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
			{error && <div className={s.area__errorBox}>{errorText}</div>}
		</div>
	)
}

export default TextArea
