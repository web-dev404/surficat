import React from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

import Field from '@/common/Field/Field'
import Select from '@/common/Select/Select'
import Status from '@/common/Status/Status'

import s from './Filter.module.scss'

function Filter() {
	const certificates = [
		{
			value: 'Все сертификаты'
		},
		{
			value: 'Название моего сертификата 1'
		},
		{
			value: 'Семейные выходные в уютном доме «Taiga» на байкале'
		},
		{
			value: 'Название моего сертификата 3'
		},
		{
			value: 'Название моего сертификата 4'
		},
		{
			value: 'Название моего сертификата 5'
		}
	]
	const status = [
		{
			value: 'Все статусы',
			selected: false,
			code: 0
		},
		{
			value: 'Активен',
			selected: false,
			code: 1
		},
		{
			value: 'Выполнен',
			selected: false,
			code: 2
		},
		{
			value: 'Просрочен',
			selected: false,
			code: 3
		}
	]
	return (
		<div className={s.filter}>
			<div className={s.filter__search}>
				<Field hide={false} className={'search'} icon={'/icons/search.svg'}>
					Поиск по номеру сертификата
				</Field>
			</div>
			<Select options={certificates}></Select>
			<Select options={status} className={s.select__hide}></Select>
			<Swiper spaceBetween={8} slidesPerView={2} className={s.swiper}>
				{status &&
					status.map(status => {
						return (
							<SwiperSlide key={status.value} className={s.swiper__slide}>
								<Status state={status.code} />
							</SwiperSlide>
						)
					})}
			</Swiper>
		</div>
	)
}

export default Filter
