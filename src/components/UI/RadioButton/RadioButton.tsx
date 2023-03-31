import clsx from 'clsx'
import React, { useState } from 'react'

import s from './RadioButton.module.scss'

const RadioButton = () => {
	const [isSelect, setSelect] = useState(false)
	return (
		<div
			onClick={() => {
				setSelect(!isSelect)
			}}
			className={clsx(s.radioBtn__select, {
				[s.radioBtn__selectActive]: isSelect
			})}
		></div>
	)
}

export default RadioButton
