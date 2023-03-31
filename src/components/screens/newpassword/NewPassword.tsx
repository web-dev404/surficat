import Title from '@/common/Title/Title'
import Window from '@/common/Window/Window'

import Empty from '@/layout/Empty'

import s from './NewPassword.module.scss'
import Input from '@/components/UI/Input/Input'
import PrimaryButton from '@/components/UI/PrimaryButton/PrimaryButton'

const NewPassword = () => {
	return (
		<Empty title={'Новый пароль'}>
			<Window>
				<div className={s.newpassword__title}>
					<Title>Новый пароль</Title>
				</div>
				<div className={s.newpassword__fields}>
					<Input hide={true} className={s.newpassword__field}>
						Введите новый пароль
					</Input>
					<Input hide={true} className={s.newpassword__field}>
						Повторите пароль
					</Input>
				</div>
				<PrimaryButton>Сохранить пароль</PrimaryButton>
			</Window>
		</Empty>
	)
}
export default NewPassword
