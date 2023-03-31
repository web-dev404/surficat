import { FC, PropsWithChildren } from 'react'

import s from './PageNum.module.scss'

interface IPageNum {
	active: boolean
	to: number
	onClick: Function
}
const PageNum: FC<PropsWithChildren<IPageNum>> = ({
	children,
	active,
	onClick,
	to
}) => {
	return (
		<button
			className={s.button + ' ' + (active && s.button__active)}
			onClick={() => {
				onClick(to)
			}}
		>
			<span className={s.button__text}>{children}</span>
		</button>
	)
}

export default PageNum
