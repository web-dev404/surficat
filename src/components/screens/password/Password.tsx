import Link from 'next/link'

import SubTitle from '@/common/SubTitle/SubTitle'
import Title from '@/common/Title/Title'
import Window from '@/common/Window/Window'

import Empty from '@/layout/Empty'

import s from './Password.module.scss'
import Input from '@/components/UI/Input/Input'
import PrimaryButton from '@/components/UI/PrimaryButton/PrimaryButton'

const Password = () => {
	return (
		<Empty title={'Забыли пароль?'}>
			<Window>
				<div className={s.password__title}>
					<Title>Забыли пароль?</Title>
				</div>
				<div className={s.password__subtitle}>
					<SubTitle>
						Введите адрес электронной почты, который вы использовали для
						регистрации. Вам будет отправлено письмо с инструкциями по сбросу
						пароля.
					</SubTitle>
				</div>
				<div className={s.password__field}>
					<Input hide={false}>Ваш email</Input>
				</div>
				<Link href={'/congratulation'} className={s.password__button}>
					<PrimaryButton>Отправить письмо</PrimaryButton>
				</Link>
				<p className={s.password__subButton}>
					Вспомнили пароль?{' '}
					<Link href={'/enter'} className={s.password__link}>
						{' '}
						Войти
					</Link>
				</p>
			</Window>
		</Empty>
	)
}
export default Password
