import Image from 'next/image'
import React from 'react'

import s from './PreloadItem.module.scss'

interface IPreloadItem {
	img: string
}
const PreloadItem = ({ img }: IPreloadItem) => {
	return (
		<div className={s.preload__item}>
			<Image src={img} alt={'preload'} width={156} height={156} />
			<div className={s.preload__close}>
				<svg
					width='16'
					height='16'
					viewBox='0 0 16 16'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M12 4L4 12'
						stroke='white'
						strokeWidth='1.3'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M4 4L12 12'
						stroke='white'
						strokeWidth='1.3'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			</div>
		</div>
	)
}

export default PreloadItem
