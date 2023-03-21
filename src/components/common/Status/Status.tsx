import { FC, PropsWithChildren } from 'react'

import s from './Status.module.scss'

interface StatusProps {
	state: number
}
const Status: FC<PropsWithChildren<StatusProps>> = ({ children, state }) => {
	let result
	if (state == 0) {
		result = <div className={s.status + ' ' + s.status__code0}>Все статусы</div>
	} else if (state == 1) {
		result = <div className={s.status + ' ' + s.status__code1}>Активен</div>
	} else if (state == 2) {
		result = <div className={s.status + ' ' + s.status__code2}>Выполнен</div>
	} else if (state == 3) {
		result = <div className={s.status + ' ' + s.status__code3}>Просрочен</div>
	}
	return <>{result}</>
}

export default Status
