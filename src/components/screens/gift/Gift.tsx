import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react'

import Preview from '@/layout/Preview'

import s from './Gift.module.scss'
import PrimaryButton from '@/components/UI/PrimaryButton/PrimaryButton'

const Gift = () => {
	const router = useRouter()
	const [isOpen, setOpen] = useState(false)
	const video = useRef<HTMLVideoElement>(null)
	function openGift() {
		if (!isOpen) {
			if (video.current) {
				video.current.setAttribute('src', '/video/part2.mp4')
				video.current.setAttribute('poster', '/video/preview_2.png')
				video.current.removeAttribute('loop')
				video.current.addEventListener('ended', () => {
					router.push('/certificate-preview')
				})
			}
		}
		setOpen(true)
	}
	return (
		<Preview title={'Вам подарок!'}>
			<div className={s.gift}>
				<div className={s.gift__box}>
					<video
						autoPlay
						muted
						loop={true}
						className={s.gift__video}
						ref={video}
						poster={'/video/preview_1.png'}
					>
						<source src='/video/part1.mp4' />
					</video>
					<h1 className={s.gift__title}>Любимой Александрине!</h1>
					<p className={s.gift__text}>
						С наилучшими пожеланиями от твоих лучших подруг и коллег! С Днем
						Рождения, дорогая!
					</p>
					<PrimaryButton
						size={'medium'}
						onClick={() => {
							openGift()
						}}
						className={s.gift__button}
					>
						Открыть
					</PrimaryButton>
				</div>
			</div>
		</Preview>
	)
}

export default Gift
