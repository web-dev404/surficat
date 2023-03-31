import Window from '@/common/Window/Window'

import Empty from '@/layout/Empty'

import s from './Email.module.scss'

const Email = () => {
	return (
		<Empty title={'Новый пароль'}>
			<Window className={s.email}>
				<h5 className={s.email__title}>Осталось только подтвердить email</h5>
				<p className={s.email__text}>
					Мы отправили на указанный адрес электронной почты письмо с
					подтверждением.
				</p>
			</Window>
		</Empty>
	)
}
export default Email
