import Button from '@/common/Button/Button'
import Field from '@/common/Field/Field'
import Title from '@/common/Title/Title'
import Window from '@/common/Window/Window'

import Empty from '@/layout/Empty'

import s from './NewPassword.module.scss'

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
				<Button>Сохранить пароль</Button>
			</Window>
		</Empty>
	)
}
export default NewPassword
