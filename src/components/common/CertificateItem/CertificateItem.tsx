import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import s from './CertificateItem.module.scss'

interface ICertificateItem {
	id: string
	title: string
	image: string
	price?: string
	link?: string
}
const CertificateItem = ({
	id,
	title,
	image,
	price,
	link
}: ICertificateItem) => {
	return (
		<div className={s.item}>
			<div className={s.item__img}>
				{price && <span>{price}</span>}
				<Image src={image} alt={'photo'} width={242} height={242} />
			</div>
			<div className={s.item__item__box}>
				<h5 className={s.item__text}>{title}</h5>
				<div className={s.item__buttons}>
					<button className={s.item__send}>Отправить</button>
					<Link href={'/certificate-control'} className={s.item__settings}>
						<img src='/icons/settings.svg' alt={'settings icon'} />
					</Link>
				</div>
			</div>
		</div>
	)
}

export default CertificateItem
