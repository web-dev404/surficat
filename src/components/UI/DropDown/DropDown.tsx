import clsx from 'clsx'
import React, { useEffect, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'

import Option from '@/common/Option/Option'
import OptionsList from '@/common/OptionsList/OptionsList'

import s from './DropDown.module.scss'
import DropDownOption from '@/components/UI/DropDown/DropDownOption'

const DropDown = () => {
	const [isOpen, setOpen] = React.useState(false)
	const [value, setValue] = React.useState('')
	const nodeRef = React.useRef(null)
	const ref = useRef<HTMLUListElement>(null)
	const [active, setActive] = React.useState(false)
	const options = [
		{
			value: 'Label 1'
		},
		{
			value: 'Label 2'
		},
		{
			value: 'Label 3'
		},
		{
			value: 'Label 4'
		},
		{
			value: 'Label 5'
		},
		{
			value: 'Label 6'
		}
	]
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				setOpen(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [ref])
	function changeOption(value: string) {
		setValue(value)
		setOpen(false)
	}
	return (
		<div className={s.dropdownMenu}>
			<div
				className={clsx(s.dropdownMenu__header, {
					[s.dropdownMenu__show]: isOpen,
					[s.dropdownMenu__active]: active
				})}
				onClick={() => {
					setOpen(true)
				}}
			>
				<svg
					className={s.dropdownMenu__icon}
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M18.6667 19.5V17.8333C18.6667 16.9493 18.3155 16.1014 17.6904 15.4763C17.0652 14.8512 16.2174 14.5 15.3333 14.5H8.66668C7.78262 14.5 6.93478 14.8512 6.30965 15.4763C5.68453 16.1014 5.33334 16.9493 5.33334 17.8333V19.5'
						stroke='#787486'
						strokeWidth='1.7'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M12 11.1667C13.8409 11.1667 15.3333 9.67428 15.3333 7.83333C15.3333 5.99238 13.8409 4.5 12 4.5C10.159 4.5 8.66666 5.99238 8.66666 7.83333C8.66666 9.67428 10.159 11.1667 12 11.1667Z'
						stroke='#787486'
						strokeWidth='1.7'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
				{value}
				<svg
					className={s.dropdownMenu__arrow}
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M7 9.5L12 14.5L17 9.5'
						stroke='#787486'
						strokeWidth='1.7'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			</div>
			<CSSTransition
				nodeRef={ref}
				classNames='alert'
				unmountOnExit
				timeout={300}
				in={isOpen}
			>
				<ul className={s.dropdownMenu__list} ref={ref}>
					{options &&
						options.map((element, index) => {
							return (
								<DropDownOption
									callback={() => {
										setActive(false)
										changeOption(element.value)
									}}
									onMouseOver={() => {
										setActive(true)
									}}
									onMouseOut={() => {
										setActive(false)
									}}
									key={index}
								>
									{element.value}
								</DropDownOption>
							)
						})}
				</ul>
			</CSSTransition>
		</div>
	)
}

export default DropDown
