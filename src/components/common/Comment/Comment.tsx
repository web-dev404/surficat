import cn from 'clsx'
import Image from 'next/image'
import React, { FC, PropsWithChildren, useState } from 'react'

import Hint from '@/common/Hint/Hint'

import s from './Comment.module.scss'

interface IComment {
	onClick: Function
}
const Comment: FC<PropsWithChildren<IComment>> = ({ children, onClick }) => {
	const [visibility, setVisibility] = useState(false)
	const [isShow, setShow] = useState(false)
	return (
		<div className={s.comment}>
			<div className={s.comment__wrapper}>
				<p
					className={cn(s.comment__text, { [s.comment__active]: isShow })}
					onMouseLeave={() => {
						setVisibility(false)
					}}
					onMouseEnter={() => {
						setVisibility(true)
					}}
				>
					{children}
				</p>
				<Hint visible={visibility}>{children}</Hint>
			</div>
			<div
				className={s.comment__show}
				onClick={() => {
					setShow(!isShow)
				}}
			>
				{isShow ? 'Свернуть' : 'Развернуть'}
			</div>
			<Image
				src={'/icons/comment.svg'}
				alt={'edit'}
				height={16}
				width={16}
				className={s.comment__icon}
				onClick={() => {
					onClick()
				}}
			/>
			<button
				className={s.comment__mob}
				onClick={() => {
					onClick()
				}}
			>
				<svg
					className={s.comment__iconMob}
					width='17'
					height='16'
					viewBox='0 0 17 16'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M11.8344 2.04314C12.0066 1.87094 12.211 1.73435 12.436 1.64116C12.661 1.54796 12.9021 1.5 13.1456 1.5C13.3891 1.5 13.6303 1.54796 13.8553 1.64116C14.0802 1.73435 14.2847 1.87094 14.4569 2.04314C14.6291 2.21533 14.7657 2.41976 14.8588 2.64474C14.952 2.86973 15 3.11086 15 3.35439C15 3.59791 14.952 3.83904 14.8588 4.06403C14.7657 4.28901 14.6291 4.49344 14.4569 4.66563L5.60593 13.5166L2 14.5L2.98344 10.8941L11.8344 2.04314Z'
						stroke='#232124'
						strokeWidth='1.3'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
				Редактировать
			</button>
		</div>
	)
}

export default Comment
