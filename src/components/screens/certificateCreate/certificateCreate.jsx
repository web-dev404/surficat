import styles from './certificateCreate.module.scss'

const CreateCertificate = () => {
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
				<div className={styles.certificate__create}>
					<div className={styles.certificate__create__title}>
						Здесь будут отображаться ваши созданные сертификаты
					</div>
					<button className={styles.certificate__create__btn}>
						Создать сертификат
					</button>
				</div>
			</div>
		</section>
	)
}

export default CreateCertificate
