import Image from 'next/image'
import React from 'react'

import s from './ExitBtn.module.scss'

const ExitBtn = () => {
	return (
		<button className={s.btn}>
			<svg
				className={s.btn__icon}
				width='25'
				height='24'
				viewBox='0 0 25 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M15.8335 16.1668L20.0002 12.0002L15.8335 7.8335'
					stroke='#232124'
					strokeWidth='1.7'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M20 12H10'
					stroke='#232124'
					strokeWidth='1.7'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M10 19.5H6.66667C6.22464 19.5 5.80072 19.3244 5.48816 19.0118C5.17559 18.6993 5 18.2754 5 17.8333V6.16667C5 5.72464 5.17559 5.30072 5.48816 4.98816C5.80072 4.67559 6.22464 4.5 6.66667 4.5H10'
					stroke='#232124'
					strokeWidth='1.7'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
			Выйти
		</button>
	)
}

export default ExitBtn
