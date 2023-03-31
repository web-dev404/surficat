import Link from 'next/link'

import Button from '@/common/Button/Button'
import SubTitle from '@/common/SubTitle/SubTitle'
import Title from '@/common/Title/Title'
import Window from '@/common/Window/Window'

import Empty from '@/layout/Empty'

import s from './Congratulation.module.scss'
import PrimaryButton from '@/components/UI/PrimaryButton/PrimaryButton'

const Congratulation = () => {
	return (
		<Empty title={'Письмо отправлено'}>
			<Window>
				<div className={s.congratulation__title}>
					<Title>Письмо отправлено!</Title>
				</div>
				<div className={s.congratulation__text}>
					<SubTitle>
						На ваш адрес электронной почты было отправлено письмо с инструкциями
						о том, как сбросить пароль.
					</SubTitle>
				</div>
				<Link href={'/enter'} className={s.password__button}>
					<PrimaryButton>Войти</PrimaryButton>
				</Link>
			</Window>
		</Empty>
	)
}
export default Congratulation
