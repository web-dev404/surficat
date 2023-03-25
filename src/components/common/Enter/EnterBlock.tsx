import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import Button from '@/common/Button/Button'
import Field from '@/common/Field/Field'

import s from './EnterBlock.module.scss'

function EnterBlock() {
	const router = useRouter()
	return (
		<div className={s.registration}>
			<h2 className={s.registration__title}>Добро пожаловать!</h2>
			<p className={s.registration__subtitle}>
				У вас еще нет аккаунта?
				<Link href='/registration' className={s.registration__link}>
					{' '}
					Зарегистрироваться
				</Link>
			</p>
			<div className={s.registration__fields}>
				<Field hide={false}>Ваш email</Field>
				<Field hide={true}>Текущий пароль</Field>
			</div>
			<div className={s.registration__subfields}>
				<label className={s.registration__check}>
					<input type='checkbox' />
					<div className={s.registration__checkBox}>
						<Image
							src={'/icons/check.svg'}
							alt={'check'}
							width={9}
							height={5}
							className={s.registration__checkimg}
						></Image>
					</div>
					<span className={s.registration__checkText}>Запомнить меня</span>
				</label>
				<Link href='/password' className={s.registration__link}>
					Забыли пароль?
				</Link>
			</div>
			<div className={s.registration__send}>
				<Button
					onClick={() => {
						router.push('/certificate')
					}}
				>
					Войти
				</Button>
			</div>
			<p className={s.registration__text}>
				Регистрируясь, вы принимаете условия{' '}
				<a href='#' className={s.registration__link}>
					пользовательского соглашения и политики конфиденциальности.
				</a>
			</p>
			<div className={s.registration__wrapper}>
				<span className={s.registration__or}>Или</span>
			</div>
			<button className={s.registration__button}>
				<Image
					src={'/icons/google.svg'}
					alt={'google'}
					className={s.registration__icon}
					width={24}
					height={24}
				/>
				<span>Войти через Google</span>
			</button>
		</div>
	)
}

export default EnterBlock
