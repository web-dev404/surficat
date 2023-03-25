import clsx from 'clsx'
import Image from 'next/image'
import React, { useState } from 'react'
import { EffectFade, Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'

import button from '@/common/Button/Button'
import Button from '@/common/Button/Button'
import Hint from '@/common/Hint/Hint'
import Modal from '@/common/Modal/Modal'

import s from './Certeficate.module.scss'

interface ICerteficate {
	subSlider?: boolean
	data?: {
		number: number
		date: string
		link: string
		use: boolean
	}
}
const Certeficate = ({
	subSlider = true,
	data = {
		number: 0,
		date: '',
		link: '',
		use: false
	}
}: ICerteficate) => {
	const [isCopied, setCopied] = useState(false)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isHide, setHide] = useState(true)
	function Copy() {
		setCopied(true)
		setTimeout(() => {
			setCopied(false)
		}, 1000)
	}
	return (
		<>
			<div className={s.certificate__body}>
				<div className={s.certificate__item}>
					{data.use && (
						<div className={s.certificate__info}>
							<svg
								width='16'
								height='16'
								viewBox='0 0 16 16'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<g clipPath='url(#clip0_206_1608)'>
									<path
										d='M8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5Z'
										stroke='white'
										strokeWidth='1.3'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
									<path
										d='M8 11H8.00788'
										stroke='white'
										strokeWidth='1.3'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
									<path
										d='M8 4.5V8.5'
										stroke='white'
										strokeWidth='1.3'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</g>
								<defs>
									<clipPath id='clip0_206_1608'>
										<rect width='16' height='16' fill='white' />
									</clipPath>
								</defs>
							</svg>
							Сертификат просрочен
						</div>
					)}
					{data.use && (
						<div className={clsx(s.certificate__info, s.certificate__infoUse)}>
							<svg
								width='16'
								height='16'
								viewBox='0 0 16 16'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M14 4L5.83333 12.1667L2 8.33333'
									stroke='white'
									strokeWidth='1.3'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
							Сертификат использован
						</div>
					)}
					<Swiper
						modules={[Pagination, EffectFade, Navigation]}
						slidesPerView={1}
						className={clsx('swiper-control', s.certificate__slider)}
						pagination={{ clickable: true }}
						loop={true}
						effect='fade'
						navigation={{
							nextEl: '.swiper-control__next',
							prevEl: '.swiper-control__prev'
						}}
					>
						<SwiperSlide>
							<Image
								src={'/img/control/3.png'}
								alt={'photo'}
								width={580}
								height={580}
								className={s.certificate__sliderPhoto}
							/>
						</SwiperSlide>
						<SwiperSlide>
							<Image
								src={'/img/control/2.png'}
								alt={'photo'}
								width={580}
								height={580}
								className={s.certificate__sliderPhoto}
							/>
						</SwiperSlide>
						<SwiperSlide>
							<Image
								src={'/img/control/1.png'}
								alt={'photo'}
								width={580}
								height={580}
								className={s.certificate__sliderPhoto}
							/>
						</SwiperSlide>
						<SwiperSlide>
							<Image
								src={'/img/control/2.png'}
								alt={'photo'}
								width={580}
								height={580}
								className={s.certificate__sliderPhoto}
							/>
						</SwiperSlide>
					</Swiper>
					<div className={'swiper-control__arrow swiper-control__prev'}>
						<svg
							width='20'
							height='20'
							viewBox='0 0 20 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M11.5 15L6.5 10L11.5 5'
								stroke='white'
								strokeWidth='1.7'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</div>
					<div className={'swiper-control__arrow swiper-control__next'}>
						<svg
							width='20'
							height='20'
							viewBox='0 0 20 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M8.5 15L13.5 10L8.5 5'
								stroke='white'
								strokeWidth='1.7'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</div>
				</div>
				<div className={clsx(s.certificate__item)}>
					<div className={s.certificate__inner}>
						<p className={s.certificate__price}>
							Подарочный сертификат{' '}
							<span className={s.certificate__dot}>•</span> 10 000 ₽
						</p>
						<h3 className={s.certificate__title}>
							Семейные выходные <br />в уютном доме «Taiga» на Байкале
						</h3>
						<p
							className={clsx(s.certificate__text, {
								[s.certificate__textFull]: !isHide
							})}
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
							ullamcorper leo finibus ligula auctor volutpat. Donec sagittis
							aliquet nisi vel suscipit. Curabitur mattis arcu lectus, vitae
							vulputate ipsum facilisis vitae. Phasellus eget enim eu risus
							elementum bibendum. Aliquam porta vestibulum metus at auctor.
							Nullam sit amet sollicitudin mi. Nullam euismod gravida urna, a
							commodo elit tristique vel. Nulla aliquam lorem orci. Maecenas
							efficitur venenatis dolor et feugiat. Suspendisse porta velit
							odio, vel malesuada arcu congue sed. Integer elementum molestie
							leo, nec auctor libero ultricies vel. Donec aliquam, tellus vel
							ultricies volutpat, erat Lorem ipsum dolor sit amet, consectetur
							adipiscing elit. Nam ullamcorper leo finibus ligula auctor
							volutpat. Donec sagittis aliquet nisi vel suscipit. Curabitur
							mattis arcu lectus, vitae vulputate ipsum facilisis vitae.
							Phasellus eget enim eu risus elementum bibendum. Aliquam porta
							vestibulum metus at auctor. Nullam sit amet sollicitudin mi.
							Nullam euismod gravida urna, a commodo elit tristique vel. Nulla
							aliquam lorem orci. Maecenas efficitur venenatis dolor et feugiat.
							Suspendisse porta velit odio, vel malesuada arcu congue sed.
							Integer elementum molestie leo, nec auctor libero ultricies vel.
							Donec aliquam, tellus vel ultricies volutpat, erat
						</p>
						<span
							className={s.certificate__full}
							onClick={() => {
								setHide(!isHide)
							}}
						>
							{isHide ? 'Развернуть' : 'Свернуть'}
						</span>
					</div>
				</div>
				<div
					className={clsx(s.certificate__subSlider, {
						[s.certificate__subSliderMob]: !subSlider
					})}
				>
					<span
						className={clsx(s.certificate__disable, {
							[s.certificate__has]: data.number
						})}
					>
						<span>№</span> {data.number > 0 ? data.number : '0000000000'}
					</span>
					<span
						className={clsx(s.certificate__disable, {
							[s.certificate__has]: data.date
						})}
					>
						<span>До</span> {data.date ? data.date : '00.00.0000'}
					</span>
					<button
						onClick={() => {
							data?.link && Copy()
						}}
						className={clsx(s.certificate__shareBtn, {
							[s.certificate__shareBtnActive]: data.link
						})}
					>
						Поделиться
						<Hint visible={isCopied}>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								className={s.certificate__shareIcon}
							>
								<path
									d='M18.6666 7L9.49992 16.1667L5.33325 12'
									stroke='white'
									strokeWidth='1.7'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
							Ссылка скопирована
						</Hint>
					</button>
				</div>
				<div className={s.certificate__bottom}>
					<div className={s.certificate__user}>
						<div className={s.certificate__userAvatar}>
							<Image
								src={'/img/item.png'}
								alt={'photo'}
								width={48}
								height={48}
							/>
						</div>
						<div className={s.certificate__userInfo}>
							<h5 className={s.certificate__userName}>
								Александр Александровский
							</h5>
							<span className={s.certificate__userSubName}>
								Сдаю дома для отдыха
							</span>
						</div>
					</div>
					<Button
						className={s.certificate__userBtn}
						onClick={() => {
							setIsModalOpen(true)
						}}
					>
						Связаться
					</Button>
				</div>
			</div>
			<Modal active={isModalOpen} onClick={setIsModalOpen} className={s.modal}>
				<div className={s.modal__inner}>
					<div className={s.modal__photo}>
						<Image
							src={'/img/itemBig.png'}
							alt={'photo'}
							width={104}
							height={104}
						/>
					</div>
					<h6 className={s.modal__title}>Александр Александровский</h6>
					<p className={s.modal__subtitle}>Сдаю дома для отдыха</p>
				</div>
				<div className={s.certificate__links}>
					<a href={'#'} className={s.certificate__link}>
						<svg
							width='25'
							height='24'
							viewBox='0 0 25 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M21.5618 6.67017L21.5411 6.73984V6.75435C21.4762 7.00464 21.2956 7.40782 21.0235 7.91314C20.7423 8.43548 20.3899 9.01952 20.0422 9.5696C19.6952 10.1187 19.3564 10.6286 19.104 11.0016C18.978 11.1879 18.8737 11.3398 18.8011 11.4449C18.7648 11.4974 18.7364 11.5382 18.7172 11.5658L18.6953 11.597L18.6899 11.6048L18.6886 11.6067L18.6883 11.6072L18.6882 11.6072L18.6799 11.6191L18.6722 11.6314C18.6688 11.637 18.6652 11.6427 18.6616 11.6485C18.5599 11.8125 18.4122 12.0505 18.3902 12.3293C18.3644 12.6548 18.5065 12.9285 18.6953 13.1754C18.8374 13.3732 19.103 13.6359 19.353 13.8831C19.3669 13.8969 19.3807 13.9106 19.3945 13.9242C19.6819 14.2086 19.9833 14.5082 20.2206 14.7916L20.2205 14.7917L20.2285 14.8009C20.6953 15.3314 21.0957 15.8105 21.4016 16.2287C21.7112 16.652 21.8965 16.9766 21.9708 17.2062C22.0011 17.313 22.0023 17.3789 21.9984 17.4126C21.9965 17.4288 21.9935 17.4367 21.9926 17.4388C21.9923 17.4395 21.9921 17.4399 21.992 17.4401C21.992 17.4402 21.9919 17.4403 21.992 17.4402L21.9919 17.4402L21.9905 17.4414C21.9892 17.4426 21.9868 17.4445 21.9829 17.447C21.975 17.4521 21.9605 17.4599 21.9368 17.4681C21.8878 17.485 21.8086 17.5 21.692 17.5H19.504C19.3703 17.5 19.2798 17.4749 19.1939 17.4295C19.097 17.3783 18.984 17.2893 18.8219 17.1251C18.69 16.9915 18.546 16.8296 18.3634 16.6245C18.3191 16.5747 18.2725 16.5223 18.2233 16.4672C17.9761 16.1905 17.6763 15.8603 17.2968 15.477L17.2969 15.477L17.2904 15.4706C15.9838 14.198 15.3009 13.9003 14.7622 13.9003C14.5323 13.9003 14.1656 13.9224 13.92 14.2308C13.8076 14.3719 13.7545 14.5332 13.7266 14.6792C13.6987 14.8249 13.6902 14.9872 13.6902 15.1579V17.1403C13.6902 17.3562 13.6562 17.3595 13.6506 17.3601C13.6503 17.3601 13.65 17.3601 13.6499 17.3602C13.5713 17.4134 13.3224 17.5 12.6274 17.5C10.5106 17.5 8.1036 16.1924 6.36557 13.6716L6.3656 13.6715L6.36236 13.667C5.02805 11.7774 4.18275 10.1243 3.67258 8.87996C3.41738 8.2575 3.24691 7.73944 3.14101 7.34718C3.03127 6.94069 3 6.70239 3 6.62526C3 6.57503 3.0047 6.54707 3.00816 6.53338C3.0328 6.52205 3.10061 6.5 3.25018 6.5H5.43819C5.6401 6.5 5.69249 6.54221 5.71832 6.56624C5.77021 6.61451 5.84313 6.72584 5.94428 7.02092C6.49138 8.63059 7.22626 10.141 7.925 11.2566C8.27349 11.813 8.62172 12.2852 8.94268 12.6251C9.10264 12.7945 9.26722 12.9432 9.4323 13.053C9.58796 13.1565 9.79673 13.2611 10.0336 13.2611C10.1355 13.2611 10.2775 13.2504 10.4218 13.1846C10.58 13.1125 10.699 12.9938 10.7792 12.8475C10.9142 12.6013 10.9394 12.2701 10.9394 11.9179V8.66258V8.64903L10.9386 8.63551C10.8923 7.78119 10.6372 7.28435 10.3785 6.92895C10.3226 6.85215 10.2677 6.78348 10.2232 6.72777L10.2143 6.71666C10.1651 6.65506 10.1326 6.6137 10.1072 6.57654C10.0831 6.54125 10.0746 6.52289 10.0717 6.51505C10.0717 6.51501 10.0716 6.51497 10.0716 6.51494C10.0719 6.51468 10.0721 6.51442 10.0724 6.51416C10.0744 6.51211 10.0779 6.50929 10.0842 6.50668C10.0902 6.50421 10.1033 6.5 10.1268 6.5H13.5651C13.611 6.5 13.6397 6.50402 13.6558 6.50742C13.6596 6.51743 13.6644 6.53279 13.6693 6.55507C13.6814 6.6107 13.6902 6.69324 13.6902 6.81253V11.1919C13.6902 11.7438 13.956 12.3239 14.5306 12.3239C15.0503 12.3239 15.4253 11.9823 15.9059 11.4967L15.9157 11.4869L15.9248 11.4765C16.7523 10.5422 17.4466 9.37117 17.9291 8.44967C18.172 7.98592 18.3645 7.57904 18.4966 7.2875C18.5626 7.14162 18.6137 7.02436 18.6485 6.94297C18.6659 6.90227 18.6792 6.87052 18.6883 6.84863L18.6988 6.82329L18.7011 6.81772C18.7495 6.70441 18.8033 6.63221 18.8625 6.58703C18.9154 6.54659 19.0083 6.5 19.1914 6.5H21.3794C21.4888 6.5 21.5546 6.51274 21.5898 6.52365C21.5888 6.55375 21.5821 6.60175 21.5618 6.67017ZM3.01179 6.5224C3.01181 6.52242 3.01164 6.52283 3.01124 6.52355L3.01179 6.5224ZM2.99842 6.53852C2.99721 6.53953 2.99652 6.53996 2.99648 6.53993C2.99644 6.53989 2.99705 6.53939 2.99842 6.53852Z'
								fill='#232124'
								stroke='#232124'
							/>
						</svg>
					</a>
					<a href={'#'} className={s.certificate__link}>
						<svg
							width='25'
							height='24'
							viewBox='0 0 25 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M17.725 6.775H17.7345M7.75 2.5H17.25C19.8734 2.5 22 4.62665 22 7.25V16.75C22 19.3734 19.8734 21.5 17.25 21.5H7.75C5.12665 21.5 3 19.3734 3 16.75V7.25C3 4.62665 5.12665 2.5 7.75 2.5ZM16.3002 11.4013C16.4174 12.192 16.2824 12.9994 15.9143 13.7089C15.5461 14.4183 14.9637 14.9937 14.2497 15.353C13.5358 15.7124 12.7267 15.8374 11.9376 15.7105C11.1485 15.5835 10.4195 15.2109 9.85428 14.6457C9.28911 14.0805 8.91653 13.3516 8.78955 12.5624C8.66257 11.7733 8.78765 10.9642 9.147 10.2503C9.50634 9.53633 10.0817 8.95388 10.7911 8.58575C11.5006 8.21763 12.3081 8.08258 13.0987 8.19982C13.9052 8.31941 14.6518 8.69521 15.2283 9.27171C15.8048 9.84821 16.1806 10.5948 16.3002 11.4013Z'
								stroke='#232124'
								strokeWidth='1.9'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</a>
					<a href={'#'} className={s.certificate__link}>
						<svg
							width='25'
							height='24'
							viewBox='0 0 25 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M4.07313 11.208L4.081 11.2046L4.08874 11.2009C9.45813 8.6604 13.0341 6.98765 14.8206 6.18067C17.3798 5.02471 18.9129 4.35198 19.8912 3.96645C20.8793 3.57705 21.2452 3.50485 21.4942 3.50004L21.4846 3.00013L21.4937 3.50005C21.5272 3.49944 21.605 3.50436 21.6902 3.52647C21.7774 3.54912 21.8364 3.58042 21.8676 3.60793C21.916 3.65056 21.9456 3.7205 21.9664 3.85225C21.9868 3.98149 22.0127 4.29339 21.993 4.51809C21.7179 7.65702 20.5223 15.3122 19.9119 18.8558C19.7891 19.5688 19.615 19.9894 19.4519 20.2249C19.2983 20.4469 19.1704 20.4862 19.0963 20.4936C18.7222 20.5309 18.3672 20.4039 17.9437 20.1337C17.7312 19.9981 17.5147 19.8352 17.2765 19.6515C17.2379 19.6217 17.1987 19.5914 17.1589 19.5606C16.9584 19.4053 16.7432 19.2386 16.5186 19.0788C15.7121 18.5047 15.081 18.0389 14.4532 17.5746L14.3698 17.5129C13.7696 17.0691 13.1651 16.622 12.4098 16.0814C11.9837 15.7765 11.7946 15.5472 11.7186 15.3891C11.6568 15.2606 11.6589 15.1603 11.7103 15.033C11.7734 14.8767 11.9086 14.6923 12.1314 14.4461C12.2274 14.34 12.3311 14.2314 12.4441 14.1131C12.4586 14.0979 12.4732 14.0826 12.488 14.0671C12.6161 13.9329 12.7534 13.7881 12.8896 13.6345C12.9476 13.5691 13.2386 13.2754 13.6572 12.8529C14.1461 12.3595 14.809 11.6904 15.4782 11.0041C16.0906 10.376 16.7011 9.74053 17.1653 9.23414C17.3967 8.98163 17.5965 8.75611 17.7433 8.57727C17.8162 8.48849 17.8815 8.40457 17.9324 8.33079C17.9577 8.29405 17.9839 8.25352 18.0067 8.21182C18.0254 8.17768 18.0604 8.10999 18.0786 8.02567L17.5899 7.92011L18.0786 8.02567C18.0974 7.93889 18.1039 7.81772 18.0871 7.69489C18.0709 7.57574 18.0214 7.37074 17.8515 7.20677C17.6769 7.03827 17.4699 6.99816 17.3204 6.99689C17.1861 6.99575 17.0642 7.02587 17.008 7.03973L17.0033 7.04091C16.9437 7.0556 16.8963 7.07876 16.8811 7.08624L16.8809 7.08633C16.8574 7.0978 16.8348 7.11028 16.8151 7.12155C16.7754 7.14435 16.7288 7.17332 16.6778 7.20611C16.5748 7.27234 16.4355 7.36619 16.262 7.48587C15.9141 7.7259 15.4155 8.07906 14.7674 8.54423C13.4707 9.47505 11.5677 10.8602 9.05925 12.6991L9.05924 12.699L9.05596 12.7015C8.36506 13.2167 7.8083 13.4139 7.36943 13.4036C7.10647 13.3974 6.67682 13.3116 6.16374 13.1719C5.66333 13.0356 5.12433 12.8597 4.66142 12.6963C4.50416 12.6408 4.35757 12.5906 4.22111 12.544C3.82177 12.4075 3.5092 12.3006 3.27026 12.1749C3.11791 12.0948 3.04893 12.0323 3.0201 11.9939C3.00412 11.9725 2.99624 11.9573 3.00155 11.9113C3.00147 11.912 3.00141 11.9123 3.00143 11.9123C3.00173 11.9124 3.01778 11.8376 3.19243 11.6968C3.37069 11.553 3.65653 11.3879 4.07313 11.208Z'
								fill='#232124'
								stroke='#232124'
							/>
						</svg>
					</a>
					<a href={'#'} className={s.certificate__link}>
						<svg
							width='25'
							height='24'
							viewBox='0 0 25 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M2.51238 22.0484L7.77934 20.702C9.25424 21.5106 10.8911 21.8878 12.5272 21.8878C18.0589 21.8878 22.55 17.379 22.55 11.8919C22.55 9.23015 21.5094 6.73097 19.6472 4.88369C17.7846 2.98196 15.2103 1.95 12.5817 1.95C6.99594 1.95 2.50435 6.45854 2.55899 11.9462C2.55904 13.6786 3.04837 15.356 3.86336 16.8709L2.4518 21.9867L2.42887 22.0698L2.51238 22.0484ZM8.4114 18.9842L8.41149 18.9841L8.40777 18.9822L8.0808 18.8201L8.06415 18.8118L8.04616 18.8164L4.96802 19.606L5.76359 16.6074L5.7694 16.5855L5.75676 16.5667L5.53924 16.2431C3.15653 12.4286 4.29426 7.37927 8.19349 5.01573C12.0946 2.65106 17.1318 3.78021 19.5147 7.64785C21.8983 11.5167 20.7604 16.5125 16.861 18.8762L16.861 18.8761L16.8598 18.8769C15.6149 19.6822 14.0985 20.1122 12.5817 20.1122C11.1187 20.1122 9.65639 19.7359 8.4114 18.9842ZM17.3996 14.1174L17.3996 14.1173L17.3979 14.1166L16.7985 13.8463L16.7978 13.846L16.7779 13.8919L16.7978 13.846L16.7978 13.846L16.7977 13.846L16.7972 13.8458L16.7953 13.8449L16.788 13.8417L16.7594 13.8293L16.6533 13.7828C16.5631 13.7431 16.4372 13.6874 16.2943 13.6233C16.0083 13.495 15.6548 13.3331 15.3833 13.1984L15.3728 13.1932H15.361C15.3478 13.1932 15.3316 13.1864 15.3015 13.1714C15.3003 13.1708 15.2991 13.1702 15.2979 13.1696C15.2734 13.1574 15.2368 13.1392 15.1975 13.1392C15.0223 13.1392 14.9045 13.1976 14.7956 13.2517L14.7939 13.2525L14.7866 13.2561L14.7809 13.2618L14.8161 13.2973L14.7808 13.2618L14.7808 13.2619L14.7807 13.2619L14.7806 13.2621L14.7802 13.2624L14.7793 13.2634L14.7758 13.267L14.7588 13.2855C14.7416 13.3042 14.7108 13.3382 14.6562 13.3991C14.5471 13.5208 14.3426 13.7507 13.9611 14.1831L13.9599 14.182L13.954 14.1937C13.9092 14.2825 13.8192 14.3284 13.7262 14.3284H13.6717C13.6565 14.3284 13.6242 14.3193 13.5849 14.2998C13.5471 14.2811 13.5112 14.2569 13.4889 14.2348L13.4816 14.2276L13.4721 14.2238L13.2007 14.1161C12.6047 13.8473 12.0659 13.5261 11.636 13.0996C11.5796 13.0436 11.5097 12.9882 11.4425 12.9349L11.4412 12.9338C11.3725 12.8793 11.3067 12.827 11.2546 12.7753C10.8747 12.3985 10.4972 11.9702 10.2281 11.49L10.1741 11.3829L10.1704 11.3756L10.1646 11.3699C10.1444 11.3498 10.1338 11.33 10.1213 11.2989C10.1185 11.2918 10.1155 11.2841 10.1123 11.2757C10.1021 11.2494 10.0895 11.2165 10.0704 11.1775C10.0705 11.1271 10.071 11.0809 10.0767 11.0409C10.083 10.9972 10.0945 10.9699 10.1101 10.9544L10.1104 10.9546L10.1139 10.9503L10.1139 10.9503L10.1139 10.9503L10.114 10.9501L10.1144 10.9496L10.1163 10.9473L10.1234 10.9386L10.1501 10.906C10.173 10.8783 10.2052 10.8396 10.2424 10.796C10.3171 10.7084 10.4114 10.6015 10.4916 10.522C10.5505 10.4636 10.5941 10.3915 10.6339 10.3257L10.6354 10.3232C10.6769 10.2546 10.7147 10.1926 10.7641 10.1436L10.7648 10.1443L10.7704 10.136C10.8839 9.96712 10.9458 9.73616 10.8862 9.55459C10.8707 9.48072 10.8181 9.33592 10.7481 9.15974C10.6763 8.97916 10.5841 8.76073 10.4886 8.54089C10.2978 8.10158 10.093 7.65452 10.0106 7.49101L10.0109 7.49083L10.0074 7.48562C9.94983 7.39992 9.89083 7.34084 9.82322 7.29613C9.75627 7.25186 9.68308 7.22319 9.60016 7.19577L9.59252 7.19324H9.58447H9.42098H9.42034H9.4197H9.41906H9.41842H9.41777H9.41713H9.41648H9.41583H9.41518H9.41453H9.41388H9.41323H9.41257H9.41192H9.41126H9.4106H9.40995H9.40929H9.40862H9.40796H9.4073H9.40663H9.40597H9.4053H9.40463H9.40396H9.40329H9.40262H9.40195H9.40127H9.4006H9.39992H9.39924H9.39856H9.39788H9.3972H9.39652H9.39583H9.39515H9.39446H9.39378H9.39309H9.3924H9.39171H9.39102H9.39032H9.38963H9.38894H9.38824H9.38754H9.38684H9.38614H9.38544H9.38474H9.38404H9.38333H9.38263H9.38192H9.38121H9.38051H9.3798H9.37909H9.37837H9.37766H9.37695H9.37623H9.37552H9.3748H9.37408H9.37336H9.37264H9.37192H9.3712H9.37047H9.36975H9.36902H9.36829H9.36757H9.36684H9.36611H9.36538H9.36464H9.36391H9.36318H9.36244H9.3617H9.36097H9.36023H9.35949H9.35875H9.35801H9.35726H9.35652H9.35578H9.35503H9.35428H9.35354H9.35279H9.35204H9.35129H9.35054H9.34978H9.34903H9.34828H9.34752H9.34676H9.346H9.34525H9.34449H9.34373H9.34296H9.3422H9.34144H9.34067H9.33991H9.33914H9.33837H9.33761H9.33684H9.33607H9.3353H9.33452H9.33375H9.33298H9.3322H9.33143H9.33065H9.32987H9.32909H9.32831H9.32753H9.32675H9.32597H9.32518H9.3244H9.32361H9.32283H9.32204H9.32125H9.32046H9.31967H9.31888H9.31809H9.3173H9.31651H9.31571H9.31492H9.31412H9.31332H9.31253H9.31173H9.31093H9.31013H9.30932H9.30852H9.30772H9.30692H9.30611H9.30531H9.3045H9.30369H9.30288H9.30207H9.30126H9.30045H9.29964H9.29883H9.29802H9.2972H9.29639H9.29557H9.29475H9.29394H9.29312H9.2923H9.29148H9.29066H9.28984H9.28901H9.28819H9.28737H9.28654H9.28572H9.28489H9.28406H9.28323H9.2824H9.28157H9.28074H9.27991H9.27908H9.27825H9.27741H9.27658H9.27574H9.27491H9.27407H9.27323H9.2724H9.27156H9.27072H9.26988H9.26904H9.26819H9.26735H9.26651H9.26566H9.26482H9.26397H9.26313H9.26228H9.26143H9.26058H9.25973H9.25888H9.25803H9.25718H9.25633H9.25548H9.25462H9.25377H9.25291H9.25206H9.2512H9.25034H9.24948H9.24863H9.24777H9.24691H9.24605H9.24518H9.24432H9.24346H9.2426H9.24173H9.24087H9.24H9.23914H9.23827H9.2374H9.23653H9.23566H9.23479H9.23392H9.23305H9.23218H9.23131H9.23044H9.22956H9.22869H9.22782H9.22694H9.22606H9.22519H9.22431H9.22343H9.22255H9.22168H9.2208H9.21992H9.21903H9.21815H9.21727H9.21639H9.21551H9.21462H9.21374H9.21285H9.21197H9.21108H9.21019H9.20931H9.20842H9.20753H9.20664H9.20575H9.20486H9.20397H9.20308H9.20218H9.20129H9.2004H9.1995H9.19861H9.19772H9.19682H9.19592H9.19503H9.19413H9.19323H9.19233H9.19144H9.19054H9.18964H9.18874H9.18784H9.18693H9.18603H9.18513H9.18423H9.18332H9.18242H9.18152H9.18061H9.1797H9.1788H9.17789H9.17699H9.17608H9.17517H9.17426H9.17335H9.17244H9.17153H9.17062H9.16971H9.1688H9.16789H9.16698H9.16606H9.16515H9.16424H9.16332H9.16241H9.16149H9.16058H9.15966H9.15874H9.15783H9.15691H9.15599H9.15507H9.15416H9.15324H9.15232H9.1514H9.15048H9.14956H9.14863H9.14771H9.14679H9.14587H9.14494H9.14402H9.1431H9.14217H9.14125H9.14032H9.1394H9.13847H9.13755H9.13662H9.13569H9.13477H9.13384H9.13291H9.13198H9.13105H9.13012H9.12919H9.12826H9.12733H9.1264H9.12547H9.12454H9.12361H9.12268H9.12174H9.12081H9.11988H9.11894H9.11801H9.11708H9.11614H9.11521H9.11427H9.11334H9.1124H9.11146H9.11053H9.10959H9.10865H9.10772H9.10678H9.10584H9.1049H9.10396H9.10302H9.10208H9.10114H9.1002H9.09926H9.09832H9.09738H9.09644H9.0955H9.09456H9.09362H9.09267H9.09173H9.09079H9.08985H9.0889H9.08796H9.08702H9.08607H9.08513H9.08418H9.08324H9.08229H9.08135H9.0804H9.07945H9.07851H9.07756H9.07662H9.07567H9.07472H9.07377H9.07283H9.07188H9.07093H9.06998H9.06904H9.06809H9.06714H9.06619H9.06524H9.06429H9.06334H9.06239H9.06144H9.06049H9.05954H9.05859H9.05764H9.05669H9.05574H9.05478H9.05383H9.05288H9.05193H9.05098H9.05003H9.04907H9.04812H9.04717H9.04622H9.04526H9.04431H9.04336H9.0424H9.04145H9.04049H9.03954H9.03859H9.03763H9.03668H9.03572H9.03477H9.03381H9.03286H9.0319H9.03095H9.02999H9.02904H9.02808H9.02713H9.02617H9.02522H9.02426H9.0233H9.02235H9.02139H9.02044H9.01948H9.01852H9.01757H9.01661H9.01565H9.0147H9.01374H9.01278H9.01183H9.01087H9.00991H9.00896H9.008H9.00704H9.00608H9.00513H9.00417H9.00321H9.00225H9.0013H9.00034H8.99938H8.99842H8.99747H8.99651H8.99555H8.99459H8.99363H8.99268H8.99172H8.99076H8.9898H8.98885H8.98789H8.98693H8.98597H8.98501C8.92438 7.19324 8.86485 7.20801 8.81217 7.22108L8.80949 7.22174C8.75383 7.23554 8.70536 7.2473 8.65804 7.2473H8.63745L8.62283 7.2618L8.57393 7.3103C8.51794 7.33919 8.46304 7.38004 8.41226 7.41782L8.41021 7.41934C8.35481 7.46056 8.30405 7.49813 8.25435 7.52277L8.2471 7.52637L8.24136 7.53207C8.18433 7.58863 8.14166 7.64507 8.10116 7.69863L8.10044 7.69957C8.05941 7.75384 8.02051 7.80518 7.96888 7.85639L7.9686 7.85612L7.96474 7.86104C7.57695 8.35559 7.35463 8.96088 7.35463 9.56757C7.35463 10.0074 7.46521 10.4458 7.63038 10.8287L7.68421 10.9889L7.68386 10.989L7.68649 10.9945C8.17939 12.0267 8.83681 12.9506 9.71332 13.7658L9.93073 13.9814C9.98852 14.0388 10.0472 14.0902 10.1021 14.1384C10.1258 14.1592 10.1489 14.1795 10.1709 14.1993C10.245 14.2661 10.3094 14.3304 10.3604 14.4063L10.3588 14.4074L10.3695 14.4165C11.5189 15.3937 12.833 16.1 14.3116 16.4804C14.3972 16.5085 14.4956 16.5225 14.5885 16.5356L14.5911 16.536C14.6876 16.5497 14.7782 16.5627 14.8549 16.588L14.8625 16.5905H14.8706H14.8715H14.8725H14.8735H14.8744H14.8754H14.8763H14.8773H14.8783H14.8792H14.8802H14.8812H14.8822H14.8831H14.8841H14.8851H14.8861H14.887H14.888H14.889H14.89H14.891H14.8919H14.8929H14.8939H14.8949H14.8959H14.8969H14.8979H14.8989H14.8999H14.9008H14.9018H14.9028H14.9038H14.9048H14.9058H14.9068H14.9078H14.9088H14.9098H14.9108H14.9118H14.9129H14.9139H14.9149H14.9159H14.9169H14.9179H14.9189H14.9199H14.9209H14.922H14.923H14.924H14.925H14.926H14.9271H14.9281H14.9291H14.9301H14.9311H14.9322H14.9332H14.9342H14.9353H14.9363H14.9373H14.9383H14.9394H14.9404H14.9414H14.9425H14.9435H14.9445H14.9456H14.9466H14.9477H14.9487H14.9497H14.9508H14.9518H14.9529H14.9539H14.955H14.956H14.9571H14.9581H14.9591H14.9602H14.9612H14.9623H14.9633H14.9644H14.9655H14.9665H14.9676H14.9686H14.9697H14.9707H14.9718H14.9728H14.9739H14.975H14.976H14.9771H14.9782H14.9792H14.9803H14.9813H14.9824H14.9835H14.9845H14.9856H14.9867H14.9877H14.9888H14.9899H14.991H14.992H14.9931H14.9942H14.9952H14.9963H14.9974H14.9985H14.9995H15.0006H15.0017H15.0028H15.0039H15.0049H15.006H15.0071H15.0082H15.0093H15.0103H15.0114H15.0125H15.0136H15.0147H15.0158H15.0169H15.0179H15.019H15.0201H15.0212H15.0223H15.0234H15.0245H15.0256H15.0266H15.0277H15.0288H15.0299H15.031H15.0321H15.0332H15.0343H15.0354H15.0365H15.0376H15.0387H15.0398H15.0409H15.042H15.0431H15.0442H15.0453H15.0464H15.0475H15.0486H15.0497H15.0508H15.0519H15.053H15.0541H15.0552H15.0563H15.0574H15.0585H15.0596H15.0607H15.0618H15.0629H15.064H15.0651H15.0662H15.0673H15.0684H15.0695H15.0706H15.0717H15.0728H15.074H15.0751H15.0762H15.0773H15.0784H15.0795H15.0806H15.0817H15.0828H15.0839H15.0851H15.0862H15.0873H15.0884H15.0895H15.0906H15.0917H15.0928H15.0939H15.0951H15.0962H15.0973H15.0984H15.0995H15.1006H15.1017H15.1029H15.104H15.1051H15.1062H15.1073H15.1084H15.1095H15.1107H15.1118H15.1129H15.114H15.1151H15.1162H15.1174H15.1185H15.1196H15.1207H15.1218H15.1229H15.1241H15.1252H15.1263H15.1274H15.1285H15.1296H15.1308H15.1319H15.133H15.1341H15.1352H15.1363H15.1375H15.1386H15.1397H15.1408H15.1419H15.1431H15.1442H15.1453H15.1464H15.1475H15.1486H15.1498H15.1509H15.152H15.1531H15.1542H15.1553H15.1565H15.1576H15.1587H15.1598H15.1609H15.162H15.1632H15.1643H15.1654H15.1665H15.1676H15.1687H15.1699H15.171H15.1721H15.1732H15.1743H15.1754H15.1766H15.1777H15.1788H15.1799H15.181H15.1821H15.1832H15.1844H15.1855H15.1866H15.1877H15.1888H15.1899H15.191H15.1922H15.1933H15.1944H15.1955H15.1966H15.1977H15.1988H15.1999H15.2011H15.2022H15.2033H15.2044H15.2055H15.2066H15.2077H15.2088H15.2099H15.211H15.2121H15.2133H15.2144H15.2155H15.2166H15.2177H15.2188H15.2199H15.221H15.2221H15.2232H15.2243H15.2254H15.2265H15.2276H15.2287H15.2298H15.2309H15.232H15.2331H15.2342H15.2353H15.2364H15.2375H15.2386H15.2397H15.2408H15.2419H15.243H15.2441H15.2452H15.2463H15.2474H15.2485H15.2496H15.2507H15.2518H15.2529H15.254H15.2551H15.2562H15.2573H15.2584H15.2595H15.2605H15.2616H15.2627H15.2638H15.2649H15.266H15.2671H15.2682H15.2693H15.2703H15.2714H15.2725H15.2736H15.2747H15.2758H15.2768H15.2779H15.279H15.2801H15.2812H15.2822H15.2833H15.2844H15.2855H15.2866H15.2876H15.2887H15.2898H15.2909H15.2919H15.293H15.2941H15.2951H15.2962H15.2973H15.2984H15.2994H15.3005H15.3016H15.3026H15.3037H15.3048H15.3058H15.3069H15.308H15.309H15.3101H15.3111H15.3122H15.3133H15.3143H15.3154H15.3164H15.3175H15.3185H15.3196H15.3206H15.3217H15.3228H15.3238H15.3249H15.3259H15.327H15.328H15.3291H15.3301H15.3311H15.3322H15.3332H15.3343H15.3353H15.3364H15.3374H15.3384H15.3395H15.3405H15.3416H15.3426H15.3436H15.3447H15.3457H15.3467H15.3478H15.3488H15.3498H15.3509H15.3519H15.3529H15.3539H15.355H15.356H15.357H15.358H15.3591H15.3601H15.3611H15.3621H15.3631H15.3641H15.3652H15.3662H15.3672H15.3682H15.3692H15.3702H15.3712H15.3722H15.3733H15.3743H15.3753H15.3763H15.3773H15.3783H15.3793H15.3803H15.3813H15.3823H15.3833H15.3843H15.3853H15.3863H15.3872H15.3882H15.3892H15.3902H15.3912H15.3922H15.3932H15.3942H15.3951H15.3961H15.3971H15.3981H15.3991H15.4H15.401H15.402H15.403H15.4039H15.4049H15.4059H15.4069H15.4078H15.4088H15.4098H15.4107H15.4117H15.4127H15.4136H15.4146H15.4155C15.6986 16.5905 16.0334 16.4791 16.2552 16.3691L16.2554 16.3695L16.2606 16.366C16.3284 16.3212 16.3857 16.2962 16.441 16.2722C16.4488 16.2688 16.4565 16.2654 16.4643 16.262C16.5271 16.2343 16.5885 16.2043 16.6497 16.1436L16.7586 16.0355C16.8103 15.9843 16.8621 15.9457 16.9168 15.905L16.9177 15.9043C16.9717 15.8641 17.0286 15.8218 17.0856 15.7652L17.0899 15.761C17.1956 15.6561 17.3094 15.5433 17.3675 15.4279C17.4796 15.2057 17.5352 14.9299 17.589 14.6628L17.5899 14.6585L17.5909 14.6587V14.6486V14.648V14.6474V14.6467V14.6461V14.6455V14.6448V14.6442V14.6435V14.6429V14.6423V14.6416V14.641V14.6403V14.6397V14.639V14.6384V14.6377V14.6371V14.6364V14.6357V14.6351V14.6344V14.6338V14.6331V14.6324V14.6318V14.6311V14.6304V14.6298V14.6291V14.6284V14.6278V14.6271V14.6264V14.6258V14.6251V14.6244V14.6237V14.6231V14.6224V14.6217V14.621V14.6203V14.6196V14.619V14.6183V14.6176V14.6169V14.6162V14.6155V14.6148V14.6142V14.6135V14.6128V14.6121V14.6114V14.6107V14.61V14.6093V14.6086V14.6079V14.6072V14.6065V14.6058V14.6051V14.6044V14.6037V14.603V14.6023V14.6016V14.6008V14.6001V14.5994V14.5987V14.598V14.5973V14.5966V14.5959V14.5951V14.5944V14.5937V14.593V14.5923V14.5916V14.5908V14.5901V14.5894V14.5887V14.5879V14.5872V14.5865V14.5858V14.585V14.5843V14.5836V14.5828V14.5821V14.5814V14.5807V14.5799V14.5792V14.5785V14.5777V14.577V14.5762V14.5755V14.5748V14.574V14.5733V14.5726V14.5718V14.5711V14.5703V14.5696V14.5688V14.5681V14.5674V14.5666V14.5659V14.5651V14.5644V14.5636V14.5629V14.5621V14.5614V14.5606V14.5599V14.5591V14.5584V14.5576V14.5569V14.5561V14.5554V14.5546V14.5538V14.5531V14.5523V14.5516V14.5508V14.5501V14.5493V14.5485V14.5478V14.547V14.5462V14.5455V14.5447V14.544V14.5432V14.5424V14.5417V14.5409V14.5401V14.5394V14.5386V14.5378V14.5371V14.5363V14.5355V14.5348V14.534V14.5332V14.5324V14.5317V14.5309V14.5301V14.5294V14.5286V14.5278V14.527V14.5263V14.5255V14.5247V14.5239V14.5232V14.5224V14.5216V14.5208V14.5201V14.5193V14.5185V14.5177V14.5169V14.5162V14.5154V14.5146V14.5138V14.513V14.5123V14.5115V14.5107V14.5099V14.5091V14.5084V14.5076V14.5068V14.506V14.5052V14.5044V14.5037V14.5029V14.5021V14.5013V14.5005V14.4997V14.4989V14.4982V14.4974V14.4966V14.4958V14.495V14.4942V14.4934V14.4927V14.4919V14.4911V14.4903V14.4895V14.4887V14.4879V14.4871V14.4863V14.4856V14.4848V14.484V14.4832V14.4824V14.4816V14.4808V14.48V14.4792V14.4785V14.4777V14.4769V14.4761V14.4753V14.4745V14.4737V14.4729V14.4721V14.4713V14.4705V14.4698V14.469V14.4682V14.4674V14.4666V14.4658V14.465V14.4642V14.4634V14.4626V14.4618V14.461V14.4603V14.4595V14.4587V14.4579V14.4571V14.4563V14.4555V14.4547V14.4539V14.4531V14.4523V14.4515V14.4508V14.45V14.4492V14.4484V14.4476V14.4468V14.446V14.4452V14.4444V14.4436V14.4428V14.442V14.4413V14.4405V14.4397V14.4389V14.4381V14.4373V14.4365V14.4357V14.4349V14.4341V14.4334V14.4326V14.4318V14.431V14.4302V14.4294V14.4286V14.4278V14.4271V14.4263V14.4255V14.4247V14.4239V14.4231V14.4223V14.4215V14.4208V14.42V14.4192V14.4184V14.4176V14.4168V14.416V14.4153V14.4145V14.4137V14.4129V14.4121V14.4113V14.4106V14.4098V14.409V14.4082V14.4074V14.4067V14.4059V14.4051V14.4043V14.4035V14.4028V14.402V14.4012V14.4004V14.3996V14.3989V14.3981V14.3973V14.3965V14.3958V14.395V14.3942V14.3934V14.3927V14.3919V14.3911V14.3903V14.3896V14.3888V14.388V14.3872V14.3865V14.3857V14.3849V14.3842V14.3834V14.3826V14.3819V14.3811V14.3803V14.3796V14.3788V14.378V14.3773V14.3765V14.3757V14.375V14.3742V14.3734V14.3727V14.3719V14.3711V14.3704V14.3696V14.3689V14.3681V14.3674V14.3666V14.3658V14.3651V14.3643V14.3636V14.3628V14.3621V14.3613V14.3606V14.3598V14.359V14.3583V14.3575V14.3568V14.356V14.3553V14.3545V14.3538V14.3531V14.3523V14.3516V14.3508V14.3501V14.3493V14.3486V14.3478V14.3471V14.3464V14.3456V14.3449V14.3441V14.3434V14.3427V14.3419V14.3412V14.3405V14.3397V14.339V14.3383V14.3375V14.3368V14.3361V14.3353V14.3346V14.3339V14.3332V14.3324V14.3317V14.331V14.3303V14.3295V14.3288V14.3281V14.3274V14.3266V14.3259V14.3252V14.3245V14.3238V14.3231V14.3223V14.3216V14.3209V14.3202V14.3195V14.3188V14.3181V14.3174V14.3167V14.316V14.3152V14.3145V14.3138V14.3131V14.3124V14.3117V14.311V14.3103V14.3096V14.3089V14.3082V14.3075V14.3068V14.3062V14.3055V14.3048V14.3041V14.3034V14.3027V14.302V14.3013V14.3006V14.3V14.2993V14.2986V14.2979V14.2972V14.2965V14.2959V14.2952V14.2945V14.2938V14.2932V14.2925V14.2918V14.2911V14.2905V14.2898V14.2891V14.2885V14.2878V14.2871V14.2865V14.2858V14.2852V14.2845V14.2838V14.2832V14.2825V14.2819V14.2812V14.2806V14.2799V14.2793V14.2786V14.278V14.2773V14.2767V14.276V14.2754V14.2747V14.2741V14.2735V14.2728V14.2722V14.2715V14.2709V14.2703V14.2494L17.5761 14.2348L17.5409 14.2703L17.5761 14.2348L17.576 14.2347L17.576 14.2347L17.5759 14.2346L17.5756 14.2343L17.5749 14.2336L17.5724 14.2312L17.5634 14.2232C17.5557 14.2165 17.5445 14.2073 17.5298 14.1964C17.5005 14.1745 17.4571 14.1459 17.3996 14.1174Z'
								fill='#232124'
								stroke='#232124'
								strokeWidth='0.1'
							/>
						</svg>
					</a>
				</div>
				<Button>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className={s.modal__telephone}
					>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M8.57253 10.8333H9.66667C10.311 10.8333 10.8333 10.311 10.8333 9.66667V7.33333C10.8333 6.04467 9.78866 5 8.5 5H6.16667C5.52233 5 5 5.52233 5 6.16667C5 12.8964 11.1036 19 17.8333 19C18.4777 19 19 18.4777 19 17.8333V15.5C19 14.2113 17.9553 13.1667 16.6667 13.1667H14.3333C13.689 13.1667 13.1667 13.689 13.1667 14.3333V15.4275C11.3695 14.4469 9.82347 12.9519 8.77542 11.1893L8.57253 10.8333Z'
							fill='white'
						/>
					</svg>
					+7 900 898 00 00
				</Button>
			</Modal>
		</>
	)
}

export default Certeficate