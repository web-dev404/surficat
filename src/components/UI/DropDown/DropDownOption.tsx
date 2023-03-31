import React, { FC, PropsWithChildren } from 'react'

import s from './DropDownOption.module.scss'

interface IDropDownOption {
	callback: Function
	onMouseOver: Function
	onMouseOut: Function
}
const DropDownOption: FC<PropsWithChildren<IDropDownOption>> = ({
	children,
	callback,
	onMouseOver,
	onMouseOut
}) => {
	return (
		<li
			onMouseOver={() => {
				onMouseOver()
			}}
			onMouseOut={() => {
				onMouseOut()
			}}
			onClick={() => {
				callback()
			}}
			className={s.item}
		>
			{children}
		</li>
	)
}

export default DropDownOption
