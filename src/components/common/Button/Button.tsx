import {FC, PropsWithChildren} from 'react'

import s from './Button.module.scss'

const ButtonComponent: FC<PropsWithChildren> = ({ children, ...rest }) => {
	return <button className={s.btn} {...rest}>{children}</button>
}
export default ButtonComponent
