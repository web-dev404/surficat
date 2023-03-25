import clsx from 'clsx'
import Image from 'next/image'
import React, { FC, PropsWithChildren } from 'react'

import s from './CertificateUpload.module.scss'

interface ICertificateUpload {
	icon: string
	disable?: boolean
	className?: string
}
const CertificateUpload: FC<PropsWithChildren<ICertificateUpload>> = ({
	children,
	className,
	disable,
	icon
}) => {
	return (
		<div className={clsx(s.download__box, className)}>
			<input className={s.download} type='file' disabled={disable} />
			<button className={clsx(s.download__btn, { [s.disable]: disable })}>
				<svg
					width='25'
					height='24'
					viewBox='0 0 25 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M20 14.5V17.8333C20 18.2754 19.8244 18.6993 19.5118 19.0118C19.1993 19.3244 18.7754 19.5 18.3333 19.5H6.66667C6.22464 19.5 5.80072 19.3244 5.48816 19.0118C5.17559 18.6993 5 18.2754 5 17.8333V14.5'
						stroke='#232124'
						strokeWidth='1.7'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M8.3335 10.3335L12.5002 14.5002L16.6668 10.3335'
						stroke='#232124'
						strokeWidth='1.7'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M12.5 14.5V4.5'
						stroke='#232124'
						strokeWidth='1.7'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
				{children}
			</button>
		</div>
	)
}

export default CertificateUpload
