import { FC, PropsWithChildren } from 'react'

import s from './SendsInformation.module.scss'

interface ISendsInformation {
	dashed: boolean
}
const SendsInformation: FC<PropsWithChildren<ISendsInformation>> = ({
	children,
	dashed
}) => {
	return (
		<div className={s.sends + ' ' + (dashed && s.sends__dashed)}>
			<div className={s.sends__inner}>{children}</div>
		</div>
	)
}

export default SendsInformation
