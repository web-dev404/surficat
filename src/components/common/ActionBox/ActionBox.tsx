import Image from 'next/image'
import React, { FC, PropsWithChildren, useState } from 'react'

import Hint from '@/common/Hint/Hint'

import s from './ActionBox.module.scss'

interface ActiveBoxProps {
	img: string
	alt: string
	color: string
	onClick: Function
}
const ActionBox: FC<PropsWithChildren<ActiveBoxProps>> = ({
	color,
	img,
	alt,
	children,
	onClick
}) => {
	const [visibility, setVisibility] = useState(false)
	const styles = {
		background: color,
		borderColor: color
	}
	return (
		<button
			style={visibility ? styles : {}}
			className={s.button}
			onClick={() => onClick()}
			onMouseEnter={() => {
				setVisibility(true)
			}}
			onMouseLeave={() => {
				setVisibility(false)
			}}
		>
			<Image src={img} alt={alt} width={16} height={16} />
			<Hint visible={visibility}>{children}</Hint>
		</button>
	)
}

export default ActionBox
