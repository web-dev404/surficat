import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import ContactOption from '@/common/ContactOption/ContactOption'

import s from './ContatctItem.module.scss'
import OutlineButton from '@/components/UI/OutlineButton/OutlineButton'

interface IContactItem {
	className?: string
	placeholder?: string
}
interface IOption {
	value?: string
	icon?: string
}
const ContactItem = ({ className, placeholder }: IContactItem) => {
	const options = [
		{ value: 'vk', icon: '/icons/contact/vk.svg' },
		{ value: 'facebook', icon: '/icons/contact/facebook.svg' },
		{ value: 'telegram', icon: '/icons/contact/telegram.svg' },
		{ value: 'whatsapp', icon: '/icons/contact/whatsapp.svg' },
		{ value: 'telephone', icon: '/icons/contact/phone.svg' }
	]
	const [isOpened, setOpened] = useState(false)
	const [value, setValue] = useState<IOption>(options[0])
	const ref = useRef<HTMLUListElement>(null)
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				setOpened(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [ref])
	function Select(value: IOption) {
		setValue(value)
		setOpened(false)
	}
	return (
		<div className={clsx(s.item, className)}>
			<div className={s.item__box}>
				<div>
					<div className={s.item__icon}>
						<img src={value.icon} alt={value.value} />
					</div>
				</div>
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className={clsx(s.item__arrow, { [s.item__arrowActive]: isOpened })}
					onClick={() => {
						setOpened(!isOpened)
					}}
				>
					<path
						d='M7 9.5L12 14.5L17 9.5'
						stroke='#787486'
						strokeWidth='1.7'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
				<CSSTransition
					classNames={'modal'}
					timeout={300}
					in={isOpened}
					unmountOnExit
				>
					<>
						{isOpened && (
							<ul className={s.item__list} ref={ref}>
								{options.map(option => (
									<ContactOption value={option} onClick={Select} />
								))}
							</ul>
						)}
					</>
				</CSSTransition>
			</div>
			<div className={s.item__box}>
				<input
					type='text'
					className={s.item__field}
					placeholder={placeholder}
				/>
			</div>
			<OutlineButton className={s.item__delete}>
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M4.5 7H6.16667H19.5'
						stroke='#232124'
						strokeWidth='1.7'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M8.6665 6.99984V5.33317C8.6665 4.89114 8.8421 4.46722 9.15466 4.15466C9.46722 3.8421 9.89114 3.6665 10.3332 3.6665H13.6665C14.1085 3.6665 14.5325 3.8421 14.845 4.15466C15.1576 4.46722 15.3332 4.89114 15.3332 5.33317V6.99984M17.8332 6.99984V18.6665C17.8332 19.1085 17.6576 19.5325 17.345 19.845C17.0325 20.1576 16.6085 20.3332 16.1665 20.3332H7.83317C7.39114 20.3332 6.96722 20.1576 6.65466 19.845C6.3421 19.5325 6.1665 19.1085 6.1665 18.6665V6.99984H17.8332Z'
						stroke='#232124'
						strokeWidth='1.7'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M13.6665 11.1665V16.1665'
						stroke='#232124'
						strokeWidth='1.7'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M10.3335 11.1665V16.1665'
						stroke='#232124'
						strokeWidth='1.7'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			</OutlineButton>
		</div>
	)
}

export default ContactItem
