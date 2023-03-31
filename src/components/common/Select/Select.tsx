import clsx from 'clsx'
import Image from 'next/image'
import React, {
	FC,
	PropsWithChildren,
	useEffect,
	useRef,
	useState
} from 'react'
import { CSSTransition } from 'react-transition-group'

import Button from '@/common/Button/Button'
import Modal from '@/common/Modal/Modal'
import Option from '@/common/Option/Option'
import OptionsList from '@/common/OptionsList/OptionsList'

import s from './Select.module.scss'
import PrimaryButton from '@/components/UI/PrimaryButton/PrimaryButton'

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
	const [activeIndex, setActiveIndex] = useState(0)
	const nodeRef = React.useRef(null)
	const ref = useRef<HTMLUListElement>(null)
	function changeIndex(index: number) {
		setActiveIndex(index)
	}
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
		setOption(value)
		setOpen(false)
	}
	return (
		<div
			className={s.select + ' ' + (open && s.select_active) + ' ' + className}
		>
			<div
				onClick={() => {
					setOpen(true)
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
				<ul className={s.select__listMob} ref={ref}>
					{options.map((option, index) => (
						<li
							key={index}
							className={clsx(s.select__itemMob, {
								[s.select__itemMobActive]: index == activeIndex
							})}
							onClick={() => {
								changeIndex(index)
							}}
						>
							{option.value}
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M18.6667 7L9.50001 16.1667L5.33334 12'
									stroke='#6D54FE'
									strokeWidth='1.7'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</li>
					))}
				</ul>
				<PrimaryButton
					onClick={() => {
						changeOption(options[activeIndex].value)
					}}
				>
					Выбрать
				</PrimaryButton>
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
