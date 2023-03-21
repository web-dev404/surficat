import styles from './certificateDone.module.scss'

const CertificateDone = () => {
	return (
		<div className='container'>
			<div className={styles.certificate__done}>
				<div className={styles.certificate__box}>
					<h3 className={styles.certificate__box__title}>
						Сертификат успешно создан!
					</h3>
					<p className={styles.certificate__box__subtitle}>
						Теперь он доступен в вашем каталоге сертификатов и вы можете
						отправить его клиенту.
					</p>
				</div>
				<button className={styles.certificate__button} type='submit'>
					Отправить сертификат
				</button>
			</div>
		</div>
	)
}

export default CertificateDone