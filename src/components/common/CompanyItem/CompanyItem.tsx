import clsx from 'clsx'
import Image from 'next/image'
import React, { useState } from 'react'

import button from '@/common/Button/Button'
import Hint from '@/common/Hint/Hint'

import s from './CompanyItem.module.scss'
import OutlineButton from '@/components/UI/OutlineButton/OutlineButton'

interface ICompanyItem {
	onEdit?: Function
	del?: Function
	select?: boolean
	className?: string
	data: {
		name: string
		info: string
		img: string
		link: boolean
	}
}
const CompanyItem = ({
	data,
	del,
	className,
	select,
	onEdit
}: ICompanyItem) => {
	const [isVisible, setVisible] = useState(false)
	const [isSelect, setSelect] = useState(false)
	return (
		<div
			className={clsx(s.item, { [s.itemSelect]: isSelect }, className)}
			onClick={() => {
				select && setSelect(!isSelect)
			}}
		>
			<div className={s.item__inner}>
				{select && (
					<div
						className={clsx(s.item__select, {
							[s.item__selectActive]: isSelect
						})}
					></div>
				)}
				<div className={s.item__photo}>
					<Image src={data.img} alt={data.name} width={40} height={40} />
				</div>
				<div>
					<h6 className={s.item__name}>{data.name}</h6>
					<p className={s.item__subName}>{data.info}</p>
				</div>
			</div>
			<div className={s.item__buttons}>
				{select && (
					<button
						className={clsx(s.item__selectBtn, {
							[s.item__selectBtnActive]: isSelect
						})}
					>
						{isSelect && (
							<svg
								width='17'
								height='16'
								viewBox='0 0 17 16'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M14.5 4L6.33333 12.1667L2.5 8.33333'
									stroke='white'
									strokeWidth='1.3'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						)}
						{isSelect ? 'Выбрано' : 'Выбрать'}
					</button>
				)}
				<OutlineButton
					size={'small'}
					className={clsx(s.item__button, { [s.item__buttonEdit]: select })}
					onClick={() => {
						onEdit && onEdit()
					}}
				>
					<svg
						width='16'
						height='16'
						viewBox='0 0 16 16'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<g clipPath='url(#clip0_110_2640)'>
							<path
								d='M11.3344 2.04314C11.5066 1.87094 11.711 1.73435 11.936 1.64116C12.161 1.54796 12.4021 1.5 12.6456 1.5C12.8891 1.5 13.1303 1.54796 13.3553 1.64116C13.5802 1.73435 13.7847 1.87094 13.9569 2.04314C14.1291 2.21533 14.2657 2.41976 14.3588 2.64474C14.452 2.86973 14.5 3.11086 14.5 3.35439C14.5 3.59791 14.452 3.83904 14.3588 4.06403C14.2657 4.28901 14.1291 4.49344 13.9569 4.66563L5.10593 13.5166L1.5 14.5L2.48344 10.8941L11.3344 2.04314Z'
								stroke='#232124'
								strokeWidth='1.3'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</g>
						<defs>
							<clipPath id='clip0_110_2640'>
								<rect width='16' height='16' fill='white' />
							</clipPath>
						</defs>
					</svg>
				</OutlineButton>
				{!select && (
					<div
						className={clsx(
							s.item__button,
							{ [s.item__buttonEdit]: select },
							s.hide
						)}
						onMouseEnter={() => {
							data.link && setVisible(true)
						}}
						onMouseLeave={() => {
							data.link && setVisible(false)
						}}
					>
						<OutlineButton
							onClick={() => {
								del && del(true)
							}}
							disabled={data.link}
							size={'small'}
							className={clsx(s.item__button, { [s.item__buttonEdit]: select })}
						>
							<svg
								width='16'
								height='16'
								viewBox='0 0 16 16'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M2 4H3.33333H14'
									stroke='#232124'
									strokeWidth='1.3'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M5.3335 4.00016V2.66683C5.3335 2.31321 5.47397 1.97407 5.72402 1.72402C5.97407 1.47397 6.31321 1.3335 6.66683 1.3335H9.3335C9.68712 1.3335 10.0263 1.47397 10.2763 1.72402C10.5264 1.97407 10.6668 2.31321 10.6668 2.66683V4.00016M12.6668 4.00016V13.3335C12.6668 13.6871 12.5264 14.0263 12.2763 14.2763C12.0263 14.5264 11.6871 14.6668 11.3335 14.6668H4.66683C4.31321 14.6668 3.97407 14.5264 3.72402 14.2763C3.47397 14.0263 3.3335 13.6871 3.3335 13.3335V4.00016H12.6668Z'
									stroke='#232124'
									strokeWidth='1.3'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M9.3335 7.3335V11.3335'
									stroke='#232124'
									strokeWidth='1.3'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M6.6665 7.3335V11.3335'
									stroke='#232124'
									strokeWidth='1.3'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</OutlineButton>
						<Hint className={'small'} visible={isVisible}>
							Эту компанию нельзя удалить, пока она привязана к сертификату.
						</Hint>
					</div>
				)}
				{!select && (
					<OutlineButton
						size={'small'}
						className={s.mob}
						onClick={() => {
							del && del(true)
						}}
						disabled={data.link}
					>
						<svg
							width='16'
							height='16'
							viewBox='0 0 16 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M2 4H3.33333H14'
								stroke='#232124'
								strokeWidth='1.3'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M5.3335 4.00016V2.66683C5.3335 2.31321 5.47397 1.97407 5.72402 1.72402C5.97407 1.47397 6.31321 1.3335 6.66683 1.3335H9.3335C9.68712 1.3335 10.0263 1.47397 10.2763 1.72402C10.5264 1.97407 10.6668 2.31321 10.6668 2.66683V4.00016M12.6668 4.00016V13.3335C12.6668 13.6871 12.5264 14.0263 12.2763 14.2763C12.0263 14.5264 11.6871 14.6668 11.3335 14.6668H4.66683C4.31321 14.6668 3.97407 14.5264 3.72402 14.2763C3.47397 14.0263 3.3335 13.6871 3.3335 13.3335V4.00016H12.6668Z'
								stroke='#232124'
								strokeWidth='1.3'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M9.3335 7.3335V11.3335'
								stroke='#232124'
								strokeWidth='1.3'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M6.6665 7.3335V11.3335'
								stroke='#232124'
								strokeWidth='1.3'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</OutlineButton>
					// <button
					// 	className={s.item__button + ' ' + (data.link && s.item__disable)}
					// 	onClick={e => {
					// 		!e.currentTarget.classList.contains(s.item__disable) &&
					// 			del &&
					// 			del(true)
					// 	}}
					// 	onMouseEnter={() => {
					// 		data.link && setVisible(true)
					// 	}}
					// 	onMouseLeave={() => {
					// 		data.link && setVisible(false)
					// 	}}
					// ></button>
				)}
			</div>
			{data.link && !select && (
				<div className={s.item__info}>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className={s.item__icon}
					>
						<g clipPath='url(#clip0_1898_8153)'>
							<path
								d='M12.0001 20.3337C16.6025 20.3337 20.3334 16.6027 20.3334 12.0003C20.3334 7.39795 16.6025 3.66699 12.0001 3.66699C7.39771 3.66699 3.66675 7.39795 3.66675 12.0003C3.66675 16.6027 7.39771 20.3337 12.0001 20.3337Z'
								stroke='#787486'
								strokeWidth='1.7'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M12 15.3333V12'
								stroke='#787486'
								strokeWidth='1.7'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M12 8.66699H12.0079'
								stroke='#787486'
								strokeWidth='1.7'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</g>
						<defs>
							<clipPath id='clip0_1898_8153'>
								<rect
									width='20'
									height='20'
									fill='white'
									transform='translate(2 2)'
								/>
							</clipPath>
						</defs>
					</svg>
					<p>Эту компанию нельзя удалить, пока она привязана к сертификату.</p>
				</div>
			)}
		</div>
	)
}

export default CompanyItem
