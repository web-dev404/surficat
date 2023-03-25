import clsx from 'clsx'
import React, { useState } from 'react'

import s from './Notify.module.scss'

interface INotify {
	status: number
	active: boolean
}
const Notify = ({ status, active }: INotify) => {
	let className = ''
	let text = ''
	const [show, setShow] = useState(active)
	switch (status) {
		case 1:
			text = 'Система обновилась! Добавились новые функции.'
			className = s.success
			break
			break
		case 2:
			text = 'Внимание! На сайте планируются технические работы.'
			className = s.attention
			break
		case 3:
			text = 'На сайте произошел сбой. Уже чиним.'
			className = s.error
			break
		default:
			return null
	}
	return (
		<>
			{show && (
				<div className={s.notify}>
					<div className={'container'}>
						<div className={s.notify__inner}>
							<div className={clsx(s.notify__box, className)}>
								{status === 1 ? (
									<svg
										width='25'
										height='24'
										viewBox='0 0 25 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
										className={s.notify__icon}
									>
										<path
											d='M19.1673 7L10.0007 16.1667L5.83398 12'
											stroke='#68D258'
											strokeWidth='1.7'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
								) : (
									<svg
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
										className={s.notify__icon}
									>
										<path
											d='M10.5747 5.21684L3.51632 17.0002C3.37079 17.2522 3.29379 17.5379 3.29298 17.8289C3.29216 18.12 3.36756 18.4061 3.51167 18.6589C3.65579 18.9118 3.86359 19.1225 4.11441 19.27C4.36523 19.4176 4.65032 19.497 4.94132 19.5002H19.058C19.349 19.497 19.6341 19.4176 19.8849 19.27C20.1357 19.1225 20.3435 18.9118 20.4876 18.6589C20.6317 18.4061 20.7071 18.12 20.7063 17.8289C20.7055 17.5379 20.6285 17.2522 20.483 17.0002L13.4247 5.21684C13.2761 4.97193 13.0669 4.76944 12.8173 4.62891C12.5677 4.48838 12.2861 4.41455 11.9997 4.41455C11.7132 4.41455 11.4316 4.48838 11.182 4.62891C10.9324 4.76944 10.7232 4.97193 10.5747 5.21684V5.21684Z'
											stroke='#FF4D50'
											strokeWidth='1.7'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
										<path
											d='M12 9.5V12.8333'
											stroke='#FF4D50'
											strokeWidth='1.7'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
										<path
											d='M12 16.1665H12.0083'
											stroke='#FF4D50'
											strokeWidth='1.7'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
								)}
								<div>
									<span className={s.notify__text}>{text}</span>
									<a href='#'> Подробнее</a>
								</div>
							</div>
							<svg
								onClick={() => {
									setShow(false)
								}}
								className={s.notify__close}
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M18 6L6 18'
									stroke='white'
									strokeWidth='1.7'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M6 6L18 18'
									stroke='white'
									strokeWidth='1.7'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default Notify
