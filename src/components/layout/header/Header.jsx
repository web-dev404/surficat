import styles from '../../../components/layout/header/Header.module.scss'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className='container'>
				<div className={styles.header__inner}>
					<a className='logo' href='#'>
						<img src='/icons/logo.svg' alt={'logo'} />
					</a>
					<ul className={styles.list}>
						<li className={styles.list__item}>
							<a className={(styles.list__link, styles.list__active)} href='#'>
								Мои сертификаты
							</a>
						</li>
						<li className={styles.list__item}>
							<a className={styles.list__link} href='#'>
								Отправки
							</a>
						</li>
						<li className={styles.list__item}>
							<a className={styles.list__link} href='#'>
								Помощь
							</a>
						</li>
						<li className={styles.list__item}>
							<a className={styles.list__link} href='#'>
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
										stroke-width='1.7'
									/>
									<path
										d='M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z'
										stroke='#232124'
										stroke-width='1.7'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
									<path
										d='M18 19C18 17.3431 15.3137 16 12 16C8.68629 16 6 17.3431 6 19'
										stroke='#232124'
										stroke-width='1.7'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
								</svg>
								Александр
							</a>
						</li>
					</ul>
				</div>
			</div>
		</header>
	)
}

export default Header
