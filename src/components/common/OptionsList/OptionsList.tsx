import { FC, PropsWithChildren } from 'react'

import s from './OptionsList.module.scss'

const OptionsList: FC<PropsWithChildren> = ({ children }) => {
	return <ul className={s.list}>{children}</ul>
}
export default OptionsList
