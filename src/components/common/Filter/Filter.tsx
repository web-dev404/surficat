import clsx from 'clsx'
import React from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

import Select from '@/common/Select/Select'
import Status from '@/common/Status/Status'

import s from './Filter.module.scss'
import Input from '@/components/UI/Input/Input'

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
	const [activeIndex, setActiveIndex] = React.useState(0)
	function changeIndex(index: number) {
		setActiveIndex(index)
	}
	return (
		<div className={s.filter}>
			<div className={s.filter__search}>
				<Input
					hide={false}
					className={s.search}
					placeholder={' '}
					icon={'search'}
				>
					Поиск по номеру сертификата
				</Input>
			</div>
			<Select options={certificates}></Select>
			<Select options={status} className={s.select__hide}></Select>
			<Swiper spaceBetween={8} slidesPerView={2} className={s.swiper}>
				{status &&
					status.map((status, index) => {
						return (
							<SwiperSlide
								key={status.value}
								className={clsx(s.swiper__slide, {
									[s.swiper__slideActive]: index === activeIndex
								})}
								onClick={() => {
									changeIndex(index)
								}}
							>
								<Status key={index} state={status.code} />
								<svg
									width='16'
									height='16'
									viewBox='0 0 16 16'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M14 4L5.83333 12.1667L2 8.33333'
										stroke='#6D54FE'
										stroke-width='1.3'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
								</svg>
							</SwiperSlide>
						)
					})}
			</Swiper>
		</div>
	)
}

export default Filter
