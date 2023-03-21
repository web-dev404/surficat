import { FC, PropsWithChildren } from 'react'

import s from './Option.module.scss'

interface IOption {
	value: string
	callback: Function
}
const Option: FC<PropsWithChildren<IOption>> = ({
	children,
	value,
	callback
}) => {
	return (
		<li
			onClick={() => {
				callback(value)
			}}
			className={s.option}
		>
			{children}
		</li>
	)
}

export default Option
