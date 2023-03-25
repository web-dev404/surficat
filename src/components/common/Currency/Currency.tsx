import clsx from 'clsx'
import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import CurrencyOption from '@/common/CurrencyOption/CurrencyOption'

import styles from '@/screens/certificateInfo/cerrtificateInfo.module.scss'

import s from './Currency.module.scss'

const Currency = () => {
	const options = ['Рубли, ₽', 'Dollars', 'Euro']
	const [value, setValue] = useState(options[0])
	const [show, setShow] = useState(false)
	function changeValue(value: string) {
		setShow(false)
		setValue(value)
	}
	return (
		<div className={s.valute}>
			<div
				className={s.valute__header}
				onClick={() => {
					setShow(!show)
				}}
			>
				<span>{value}</span>
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className={clsx(s.valute__arrow, { [s.valute__arrowActive]: show })}
				>
					<g opacity='0.7'>
						<path
							d='M7 9.5L12 14.5L17 9.5'
							stroke='#787486'
							strokeWidth='1.7'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</g>
				</svg>
			</div>
			<CSSTransition in={show} classNames={'modal'} unmountOnExit timeout={300}>
				<>
					{show && (
						<ul className={s.valute__list}>
							{options.map((option, index) => (
								<CurrencyOption
									key={index}
									value={option}
									onClick={changeValue}
								/>
							))}
						</ul>
					)}
				</>
			</CSSTransition>
		</div>
	)
}

export default Currency
