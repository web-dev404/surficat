import Field from '@/common/../../UI/Input/Input'
import Button from '@/common/Button/Button'
import Title from '@/common/Title/Title'
import Window from '@/common/Window/Window'

import Empty from '@/layout/Empty'

import s from './NewPassword.module.scss'
import PrimaryButton from '@/components/UI/PrimaryButton/PrimaryButton'

const NewPassword = () => {
	return (
		<Empty title={'Новый пароль'}>
			<Window>
				<div className={s.newpassword__title}>
					<Title>Новый пароль</Title>
				</div>
				<div className={s.newpassword__fields}>
					<Field hide={true}>Введите новый пароль</Field>
					<Field hide={true}>Повторите пароль</Field>
				</div>
				<PrimaryButton>Сохранить пароль</PrimaryButton>
			</Window>
		</Empty>
	)
}
export default NewPassword
