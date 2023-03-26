import clsx from 'clsx'
import { useRouter } from 'next/router'
import React from 'react'

import s from './Back.module.scss'

interface IModalBack {
	className?: string
	onClick?: () => void
}
const Back = ({ onClick, className }: IModalBack) => {
	const router = useRouter()
	return (
		<div
			className={clsx(s.back, className)}
			onClick={() => {
				onClick ? onClick() : router.back()
			}}
		>
			<svg
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M19 12H6.16669'
					stroke='#6D54FE'
					strokeWidth='1.7'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M11 17.8337L5.16667 12.0003L11 6.16699'
					stroke='#6D54FE'
					strokeWidth='1.7'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
			Назад
		</div>
	)
}

export default Back
