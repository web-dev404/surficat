import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Notify from '@/common/Notify/Notify'

import styles from './Header.module.scss'

const Header = () => {
	const router = useRouter()
	return (
		<header className={styles.header}>
			<Notify status={1} active={true} />
			<Notify status={2} active={true} />
			<Notify status={3} active={true} />
			<div className='container'>
				<div className={styles.header__inner}>
					<Link className='logo' href='/certificate'>
						<Image
							src={'/icons/logo.svg'}
							alt={'logo'}
							width={102}
							height={22}
							className={styles.header__logo}
						/>
					</Link>
					<ul className={styles.list}>
						<li className={styles.list__item}>
							<Link
								className={clsx(
									styles.list__link,
									{
										[styles.list__active]: router.pathname === '/certificate'
									},
									styles.hideMobile
								)}
								href='/certificate'
							>
								Мои сертификаты
							</Link>
						</li>
						<li className={styles.list__item}>
							<Link
								className={clsx(
									styles.list__link,
									{
										[styles.list__active]: router.pathname === '/sends'
									},
									styles.hideMobile
								)}
								href='sends'
							>
								Отправки
							</Link>
						</li>
						<li className={styles.list__item}>
							<Link
								className={clsx(styles.list__link, {
									[styles.list__active]: router.pathname === '/faq'
								})}
								href='faq'
							>
								Помощь
							</Link>
						</li>
						<li className={styles.list__item}>
							<Link
								className={clsx(styles.list__link, {
									[styles.list__active]: router.pathname === '/profile'
								})}
								href='/profile'
							>
								<svg
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<circle
										cx='12'
										cy='12'
										r='9.15'
										stroke='#232124'
										strokeWidth='1.7'
									/>
									<path
										d='M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z'
										stroke='#232124'
										strokeWidth='1.7'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
									<path
										d='M18 19C18 17.3431 15.3137 16 12 16C8.68629 16 6 17.3431 6 19'
										stroke='#232124'
										strokeWidth='1.7'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
								<span className={styles.list__name}>Александр</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</header>
	)
}

export default Header
