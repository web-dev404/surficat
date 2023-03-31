import cn from 'clsx'
import clsx from 'clsx'
import Image from 'next/image'
import React, { FC, PropsWithChildren, useState } from 'react'

import s from './Input.module.scss'

interface IField {
	hide: boolean
	error?: boolean
	errorText?: string
	icon?: 'person' | 'calendar' | 'search'
	className?: string
	onChange?: Function
	placeholder?: string
	hidden?: boolean
}
const Input: FC<PropsWithChildren<IField>> = ({
	hide,
	children,
	className,
	icon = '',
	onChange = () => {},
	placeholder = '',
	hidden = false,
	error = false,
	errorText = 'Аккаунтов с этим email не найдено.'
}) => {
	const [visibility, setVisibility] = useState(hide)
	const [isEmpty, setEmpty] = useState(true)
	return (
		<label
			className={cn(
				s.field,
				{
					[s.field__fill]: !isEmpty,
					[s.field__hide]: hidden,
					[s.fieldIcon]: icon
				},
				className
			)}
		>
			<div className={s.field__inner}>
				<input
					className={cn(s.field__input, { [s.field__errorInput]: error })}
					type={visibility ? 'password' : 'text'}
					placeholder={placeholder}
					onChange={event => {
						event.target.value ? setEmpty(false) : setEmpty(true)
						onChange(event.target.value)
					}}
				/>
				<span
					className={clsx(s.field__placeholder, { [s.field__error]: error })}
				>
					{children}
				</span>
				{icon === 'person' && (
					<svg
						className={s.field__icon}
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M18.6667 19.5V17.8333C18.6667 16.9493 18.3155 16.1014 17.6904 15.4763C17.0653 14.8512 16.2174 14.5 15.3334 14.5H8.66671C7.78265 14.5 6.93481 14.8512 6.30968 15.4763C5.68456 16.1014 5.33337 16.9493 5.33337 17.8333V19.5'
							stroke='#232124'
							strokeWidth='1.7'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M12 11.1667C13.8409 11.1667 15.3333 9.67428 15.3333 7.83333C15.3333 5.99238 13.8409 4.5 12 4.5C10.159 4.5 8.66663 5.99238 8.66663 7.83333C8.66663 9.67428 10.159 11.1667 12 11.1667Z'
							stroke='#232124'
							strokeWidth='1.7'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				)}
				{icon === 'calendar' && (
					<svg
						className={s.field__icon}
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M15.6666 5.33317V5.83317H16.1666H17.8333C18.3637 5.83317 18.8724 6.04388 19.2475 6.41896C19.6226 6.79403 19.8333 7.30274 19.8333 7.83317V17.8332C19.8333 18.3636 19.6226 18.8723 19.2475 19.2474C18.8724 19.6225 18.3637 19.8332 17.8333 19.8332H6.16663C5.63619 19.8332 5.12749 19.6225 4.75241 19.2474C4.37734 18.8723 4.16663 18.3636 4.16663 17.8332V7.83317C4.16663 7.30274 4.37734 6.79403 4.75241 6.41896C5.12749 6.04388 5.63619 5.83317 6.16663 5.83317H7.83329H8.33329V5.33317V4.49984C8.33329 4.41143 8.36841 4.32665 8.43092 4.26414C8.49344 4.20162 8.57822 4.1665 8.66663 4.1665C8.75503 4.1665 8.83982 4.20162 8.90233 4.26413C8.96484 4.32665 8.99996 4.41143 8.99996 4.49984V5.33317V5.83317H9.49996H14.5H15V5.33317V4.49984C15 4.41143 15.0351 4.32665 15.0976 4.26414C15.1601 4.20162 15.2449 4.1665 15.3333 4.1665C15.4217 4.1665 15.5065 4.20162 15.569 4.26414C15.6315 4.32665 15.6666 4.41143 15.6666 4.49984V5.33317ZM5.33329 11.4998H4.83329V11.9998V17.8332C4.83329 18.1868 4.97377 18.5259 5.22382 18.776C5.47387 19.026 5.813 19.1665 6.16663 19.1665H17.8333C18.1869 19.1665 18.5261 19.026 18.7761 18.776C19.0262 18.5259 19.1666 18.1868 19.1666 17.8332V11.9998V11.4998H18.6666H5.33329ZM18.6666 10.8332H19.1666V10.3332V7.83317C19.1666 7.47955 19.0262 7.14041 18.7761 6.89036C18.5261 6.64031 18.1869 6.49984 17.8333 6.49984H16.1666H15.6666V6.99984V7.83317C15.6666 7.92158 15.6315 8.00636 15.569 8.06887C15.5065 8.13138 15.4217 8.1665 15.3333 8.1665C15.2449 8.1665 15.1601 8.13139 15.0976 8.06887C15.0351 8.00636 15 7.92158 15 7.83317V6.99984V6.49984H14.5H9.49996H8.99996V6.99984V7.83317C8.99996 7.92158 8.96484 8.00636 8.90233 8.06887C8.83982 8.13139 8.75503 8.1665 8.66663 8.1665C8.57822 8.1665 8.49344 8.13139 8.43092 8.06887C8.36841 8.00636 8.33329 7.92158 8.33329 7.83317V6.99984V6.49984H7.83329H6.16663C5.813 6.49984 5.47387 6.64031 5.22382 6.89036C4.97377 7.14041 4.83329 7.47955 4.83329 7.83317V10.3332V10.8332H5.33329H18.6666Z'
							fill='#232124'
							stroke='#232124'
						/>
					</svg>
				)}
				{icon === 'search' && (
					<svg
						className={s.field__icon}
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M11.1667 17.8333C14.8486 17.8333 17.8333 14.8486 17.8333 11.1667C17.8333 7.48477 14.8486 4.5 11.1667 4.5C7.48477 4.5 4.5 7.48477 4.5 11.1667C4.5 14.8486 7.48477 17.8333 11.1667 17.8333Z'
							stroke='#787486'
							strokeWidth='1.7'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M19.5 19.5L15.875 15.875'
							stroke='#787486'
							strokeWidth='1.7'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				)}
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
			{error && <div className={s.field__errorBox}>{errorText}</div>}
		</label>
	)
}

export default Input
