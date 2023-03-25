import React from 'react'

import s from './ContactOption.module.scss'

interface IcontactOption {
	value: {
		value: string
		icon: string
	}
	onClick: Function
}
const ContactOption = ({ value, onClick }: IcontactOption) => {
	return (
		<li
			className={s.item}
			onClick={() => {
				onClick(value)
			}}
		>
			<img src={value.icon} alt={value.value} />
		</li>
	)
}

export default ContactOption
