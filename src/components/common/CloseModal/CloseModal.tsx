import Image from 'next/image'

import s from './CloseModal.module.scss'

interface IModal {
	onClick: Function
}
function CloseModal({ onClick }: IModal) {
	return (
		<div
			className={s.close}
			onClick={() => {
				onClick()
			}}
		>
			<Image
				src={'/icons/close.svg'}
				alt={'close'}
				width={20}
				height={20}
				className={s.close__icon}
			/>
		</div>
	)
}

export default CloseModal
