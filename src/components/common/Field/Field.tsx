import cn from 'clsx'
import Image from 'next/image'
import React, { FC, PropsWithChildren, useState } from 'react'

import s from './Field.module.scss'

interface IField {
	hide: boolean
	icon?: string
	className?: string
	onChange?: Function
	placeholder?: string
	hidden?: boolean
}
const Field: FC<PropsWithChildren<IField>> = ({
	hide,
	children,
	className,
	icon,
	onChange = () => {},
	placeholder = '',
	hidden = false
}) => {
	const [visibility, setVisibility] = useState(hide)
	const [isEmpty, setEmpty] = useState(true)
	return (
		<label
			className={cn(
				s.field,
				{ [s.field__fill]: !isEmpty, [s.field__hide]: hidden },
				className
			)}
		>
			<div className={s.field__inner}>
				{icon && (
					<div className={s.field__icon}>
						<Image src={icon} alt={'icon'} width={24} height={24} />
					</div>
				)}
				<input
					className={cn(s.field__input)}
					type={visibility ? 'password' : 'text'}
					placeholder={placeholder}
					onChange={event => {
						event.target.value ? setEmpty(false) : setEmpty(true)
						onChange(event.target.value)
					}}
				></input>
				<span className={s.field__placeholder}>{children}</span>
				{hide &&
					(visibility ? (
						<svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							onClick={() => {
								setVisibility(!visibility)
							}}
							className={s.field__eye}
						>
							<g clipPath='url(#clip0_21_1073)'>
								<path
									d='M2.8335 11.9997C2.8335 11.9997 6.16683 5.33301 12.0002 5.33301C17.8335 5.33301 21.1668 11.9997 21.1668 11.9997C21.1668 11.9997 17.8335 18.6663 12.0002 18.6663C6.16683 18.6663 2.8335 11.9997 2.8335 11.9997Z'
									stroke='#787486'
									strokeWidth='1.7'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z'
									stroke='#787486'
									strokeWidth='1.7'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</g>
							<defs>
								<clipPath id='clip0_21_1073'>
									<rect
										width='20'
										height='20'
										fill='white'
										transform='translate(2 2)'
									/>
								</clipPath>
							</defs>
						</svg>
					) : (
						<svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							onClick={() => {
								setVisibility(!visibility)
							}}
							className={s.field__eye}
						>
							<g clipPath='url(#clip0_21_1008)'>
								<path
									d='M10.2502 5.53303C10.8238 5.39876 11.411 5.33164 12.0002 5.33303C17.8335 5.33303 21.1668 11.9997 21.1668 11.9997C20.661 12.946 20.0577 13.837 19.3668 14.658M13.7668 13.7664C13.538 14.012 13.262 14.209 12.9553 14.3456C12.6486 14.4823 12.3176 14.5557 11.9819 14.5617C11.6462 14.5676 11.3128 14.5058 11.0015 14.3801C10.6902 14.2544 10.4074 14.0672 10.17 13.8298C9.93264 13.5924 9.74549 13.3096 9.61975 12.9984C9.49402 12.6871 9.43227 12.3536 9.43819 12.018C9.44411 11.6823 9.51759 11.3512 9.65423 11.0446C9.79087 10.7379 9.98787 10.4619 10.2335 10.233M16.9502 16.9497C15.5257 18.0355 13.7911 18.6371 12.0002 18.6664C6.16683 18.6664 2.8335 11.9997 2.8335 11.9997C3.87007 10.0679 5.30778 8.3802 7.05016 7.0497L16.9502 16.9497Z'
									stroke='#787486'
									strokeWidth='1.7'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M2.8335 2.83301L21.1668 21.1663'
									stroke='#787486'
									strokeWidth='1.7'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</g>
							<defs>
								<clipPath id='clip0_21_1008'>
									<rect
										width='20'
										height='20'
										fill='white'
										transform='translate(2 2)'
									/>
								</clipPath>
							</defs>
						</svg>
					))}
			</div>
		</label>
	)
}

export default Field
