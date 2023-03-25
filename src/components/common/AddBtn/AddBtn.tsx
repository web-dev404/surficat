import clsx from 'clsx'
import React, { FC, PropsWithChildren } from 'react'

import styles from '@/screens/certificateEdit/CertificateEdit.module.scss'

import s from './AddBtn.module.scss'

interface IAddBtn {
	className?: string
}
const AddBtn: FC<PropsWithChildren<IAddBtn>> = ({ children, className }) => {
	return (
		<button className={clsx(styles.info__company__btn, className)}>
			<img src='/icons/plus-black.svg' alt='plus icon' />
			{children}
		</button>
	)
}

export default AddBtn
