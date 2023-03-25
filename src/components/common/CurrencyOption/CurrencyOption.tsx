import React from 'react'

import s from './CurrencyOption.module.scss'

interface IValuteOptionProps {
	value: string
	onClick: Function
}
const CurrencyOption = ({ value, onClick }: IValuteOptionProps) => {
	return (
		<li
			onClick={() => {
				onClick(value)
			}}
			className={s.option}
		>
			{value}
		</li>
	)
}

export default CurrencyOption
