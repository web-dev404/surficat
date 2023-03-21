import styles from './Certificate.module.scss'

const Certificate = () => {
	return (
		<section className={styles.certificate}>
			<div className='container'>
				<div className={styles.certificate__inner}>
					<div className={styles.certificate__box}>
						<h1 className={`${styles.certificate__title} ${styles.title}`}>
							Мои сертификаты
						</h1>
						<div className={styles.certificate__symbol}>
							<img src='/icons/plus-icon.svg' alt='symbol plus' />
						</div>
					</div>
					<div className={styles.certificate__tabs}>
						<button
							className={`${styles.certificate__btn} ${styles.certificate__btn__active}`}
						>
							Сертификаты
						</button>
						<button className={styles.certificate__btn}>Отправки</button>
					</div>
				</div>
				<div className={styles.certificate__cards}>
					<div className={styles.certificate__item}>
						<div className={styles.certificate__img}>
							<span>2 000 ₽</span>
							<img src='/img/cards/1.jpeg' alt={'card-one'} />
						</div>
						<div className={styles.certificate__item__box}>
							<h5 className={styles.certificate__text}>
								id sodales enim lacus bibendum lacus
							</h5>
							<div className={styles.certificate__buttons}>
								<button className={styles.certificate__send}>Отправить</button>
								<button className={styles.certificate__settings}>
									<img src='/icons/settings.svg' alt={'settings icon'} />
								</button>
							</div>
						</div>
					</div>
					<div className={styles.certificate__item}>
						<div className={styles.certificate__img}>
							<span>10 000 ₽</span>
							<img src='/img/cards/2.jpeg' alt={'card-two'} />
						</div>
						<div className={styles.certificate__item__box}>
							<h5 className={styles.certificate__text}>
								Nam ullamcorper leo finibus ligula auctor volutpat. Donec
								sagittis aliquet nisi vel susci…
							</h5>
							<div className={styles.certificate__buttons}>
								<button className={styles.certificate__send}>Отправить</button>
								<button className={styles.certificate__settings}>
									<img src='/icons/settings.svg' alt={'settings icon'} />
								</button>
							</div>
						</div>
					</div>
					<div className={styles.certificate__item}>
						<div className={styles.certificate__img}>
							<img src='/img/cards/3.jpeg' alt={'card-three'} />
						</div>
						<div className={styles.certificate__item__box}>
							<h5 className={styles.certificate__text}>
								Pellentesque at libero tempus felis porta commodo
							</h5>
							<div className={styles.certificate__buttons}>
								<button className={styles.certificate__send}>Отправить</button>
								<button className={styles.certificate__settings}>
									<img src='/icons/settings.svg' alt={'settings icon'} />
								</button>
							</div>
						</div>
					</div>
					<div className={styles.certificate__item}>
						<div className={styles.certificate__img}>
							<img src='/img/cards/4.jpeg' alt={'card-for'} />
						</div>
						<div className={styles.certificate__item__box}>
							<h5 className={styles.certificate__text}>
								Donec blandit velit pellen tesque neque elementum semper
							</h5>
							<div className={styles.certificate__buttons}>
								<button className={styles.certificate__send}>Отправить</button>
								<button className={styles.certificate__settings}>
									<img src='/icons/settings.svg' alt={'settings icon'} />
								</button>
							</div>
						</div>
					</div>
					<div className={styles.certificate__item}>
						<div className={styles.certificate__img}>
							<img src='/img/cards/5.jpeg' alt={'card-five'} />
						</div>
						<div className={styles.certificate__item__box}>
							<h5 className={styles.certificate__text}>
								Suspendisse porta velit odio, vel malesuada arcu congue sed.
								Integer elementum
							</h5>
							<div className={styles.certificate__buttons}>
								<button className={styles.certificate__send}>Отправить</button>
								<button className={styles.certificate__settings}>
									<img src='/icons/settings.svg' alt={'settings icon'} />
								</button>
							</div>
						</div>
					</div>
					<div className={styles.certificate__item}>
						<div
							className={`${styles.certificate__img} ${styles.certificate__img__none}`}
						>
							<img src='/icons/surficat.svg' alt={'card-surficat'} />
						</div>
						<div className={styles.certificate__item__box}>
							<h5 className={styles.certificate__text}>
								Suspendisse porta velit odio, vel malesuada arcu congue sed.
								Integer elementum
							</h5>
							<div className={styles.certificate__buttons}>
								<button className={styles.certificate__send}>Отправить</button>
								<button className={styles.certificate__settings}>
									<img src='/icons/settings.svg' alt={'settings icon'} />
								</button>
							</div>
						</div>
					</div>
					<div
						className={`${styles.certificate__item} ${styles.certificate__item__create}`}
					>
						<div className={styles.certificate__create__box}>
							<div className={styles.certificate__create__new}>
								Создать новый сертификат
							</div>
							<div
								className={`${styles.certificate__symbol} ${styles.certificate__symbol__add}`}
							>
								<img src='/icons/plus-icon.svg' alt='symbol plus' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Certificate
