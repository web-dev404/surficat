import Image from 'next/image'
import Link from 'next/link'

import Button from '@/common/Button/Button'

import Field from '../Field/Field'

import s from './RegistrationBlock.module.scss'
import PrimaryButton from '@/components/UI/PrimaryButton/PrimaryButton'

const RegistrationBlock = () => {
	return (
		<div className={s.registration}>
			<h2 className={s.registration__title}>Регистрация</h2>
			<p className={s.registration__subtitle}>
				У вас уже есть аккаунт?{' '}
				<Link href='/enter' className={s.registration__link}>
					Войти
				</Link>
			</p>
			<form action='#'>
				<div className={s.registration__fields}>
					<Field hide={false}>Ваше имя</Field>
					<Field hide={false}>Ваш email</Field>
					<Field hide={true}>Создайте пароль</Field>
				</div>
				<div className={s.registration__send}>
					<PrimaryButton>Зарегистрироваться</PrimaryButton>
				</div>
			</form>
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
export default RegistrationBlock
