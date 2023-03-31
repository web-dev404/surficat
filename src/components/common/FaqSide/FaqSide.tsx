import Image from 'next/image'
import React from 'react'

import s from './FaqSide.module.scss'
import PrimaryButton from '@/components/UI/PrimaryButton/PrimaryButton'

const FaqSide = () => {
	return (
		<div className={s.side}>
			<div className={s.side__wrapper}>
				<h4 className={s.side__title}>Остались вопросы или есть пожелания?</h4>
				<p className={s.side__subtitle}>С нами можно связаться в Telegram.</p>
				<PrimaryButton>
					<Image
						src={'/icons/telegram.svg'}
						alt={'telegram'}
						width={24}
						height={24}
						className={s.side__telegram}
					/>
					Написать в Telegram
				</PrimaryButton>
			</div>
			<div className={s.side__wrapper + ' ' + s.side__support}>
				<Image
					src={'/icons/mail.svg'}
					alt={'mail'}
					width={24}
					height={24}
					className={s.side__mail}
				/>
				<a href={'mailto: #'} className={s.side__link}>
					Support@surficat.online
				</a>
			</div>
		</div>
	)
}

export default FaqSide
