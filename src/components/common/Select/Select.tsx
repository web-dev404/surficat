import Image from 'next/image'
import React, { FC, PropsWithChildren, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import Button from '@/common/Button/Button'
import Modal from '@/common/Modal/Modal'
import Option from '@/common/Option/Option'
import OptionsList from '@/common/OptionsList/OptionsList'

import s from './Select.module.scss'

interface ISelect {
	options: Array<IOption>
	className?: string
}
interface IOption {
	value: string
}
const Select: FC<PropsWithChildren<ISelect>> = ({
	children,
	options,
	className
}) => {
	const [open, setOpen] = useState(false)
	const [option, setOption] = useState(options[0].value)
	const nodeRef = React.useRef(null)
	function changeOption(value: string) {
		setOption(value)
		setOpen(false)
	}
	return (
		<div
			className={s.select + ' ' + (open && s.select_active) + ' ' + className}
		>
			<div
				onClick={() => {
					setOpen(!open)
				}}
				className={s.select__wrapper}
			>
				<div className={s.select__header}>{option}</div>
				<Image
					src={'/icons/select.svg'}
					alt={'arrow'}
					width={20}
					height={20}
					className={s.select__icon + ' ' + (open && s.select__icon_active)}
				/>
			</div>
			<Modal active={open} onClick={setOpen} onMob={true}>
				<div className={s.select__modal}>
					<svg
						onClick={() => {
							setOpen(false)
						}}
						className={s.select__arrow}
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M19 12H6.16667'
							stroke='#232124'
							strokeWidth='1.7'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M11 17.8337L5.16667 12.0003L11 6.16699'
							stroke='#232124'
							strokeWidth='1.7'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
					Сертификаты
				</div>
				<ul className={s.select__listMob}>
					{options.map(option => (
						<li key={option.value} className={s.select__itemMob}>
							{option.value}
						</li>
					))}
				</ul>
				<Button
					onClick={() => {
						setOpen(false)
					}}
				>
					Выбрать
				</Button>
			</Modal>
			<CSSTransition
				nodeRef={nodeRef}
				classNames='alert'
				unmountOnExit
				timeout={300}
				in={open}
			>
				<div ref={nodeRef} className={s.select__list}>
					<OptionsList>
						{options &&
							options.map((element, index) => {
								return (
									<Option
										key={index}
										value={element.value}
										callback={changeOption}
									>
										{element.value}
									</Option>
								)
							})}
					</OptionsList>
				</div>
			</CSSTransition>
		</div>
	)
}

export default Select
