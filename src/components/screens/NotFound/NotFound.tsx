import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import SubTitle from '@/common/SubTitle/SubTitle'
import Title from '@/common/Title/Title'

import Empty from '@/layout/Empty'

import s from './NotFound.module.scss'

const NotFound = () => {
	return (
		<Empty title={'Страница не найдена'}>
			<div className={s.notfound}>
				<div className={s.notfound__inner}>
					<Image
						src={'/img/404.png'}
						alt={'NotFound'}
						width={320}
						height={320}
						className={s.notfound__img}
					/>
					<h5 className={s.notfound__title}>Страница не найдена</h5>
					<div className={s.notfound__text}>
						<SubTitle>
							Возможно, она была удалена или введен неверный адрес.
						</SubTitle>
					</div>
					<Link href={'/enter'} className={s.notfound__link}>
						На главную
					</Link>
				</div>
			</div>
		</Empty>
	)
}

export default NotFound
