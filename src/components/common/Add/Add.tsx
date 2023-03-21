import Image from 'next/image'
import React from 'react'

import s from './Add.module.scss'

interface IAdd {
	onClick: Function
}
function Add({ onClick }: IAdd) {
	return (
		<div
			className={s.add__add}
			onClick={() => {
				onClick()
			}}
		>
			<svg
				className={s.add__plus}
				width='16'
				height='16'
				viewBox='0 0 16 16'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M8 3.3335V12.6668'
					stroke='#6D54FE'
					strokeWidth='1.3'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M3.33333 8H12.6667'
					stroke='#6D54FE'
					strokeWidth='1.3'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
			<span>Добавить</span>
		</div>
	)
}

export default Add
