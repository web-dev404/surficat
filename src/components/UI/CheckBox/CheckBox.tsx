import Image from 'next/image'
import React, { FC, PropsWithChildren } from 'react'

import s from './CheckBox.module.scss'

const CheckBox: FC<PropsWithChildren> = ({ children }) => {
	return (
		<label className={s.checkbox__check}>
			<input type='checkbox' />
			<div className={s.checkbox__checkBox}>
				<Image
					src={'/icons/check.svg'}
					alt={'check'}
					width={9}
					height={5}
					className={s.checkbox__checkimg}
				></Image>
			</div>
			<span className={s.checkbox__checkText}>{children}</span>
		</label>
	)
}

export default CheckBox
