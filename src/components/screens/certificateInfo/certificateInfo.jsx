import styles from './cerrtificateInfo.module.scss'

const CertificateInfo = () => {
	return (
		<section className={styles.info}>
			<div className={styles.container__info}>
				<div className={styles.info__inner}>
					<div className={styles.info__top}>
						<a href='#' className={styles.info__top__link}>
							<img src='/icons/arrow-left.svg' alt='arrow back' />
						</a>
						<h1 className={styles.info__top__title}>Новый сертификат</h1>
					</div>
					<form className={styles.form}>
						<h3 className={styles.form__title}>Основная информация</h3>
						<p className={styles.form__subtitle}>
							Вся указанная информация будет отображаться в сертификате и
							публично доступна тем, у кого есть ссылка.
						</p>
						<input
							type='text'
							className={styles.form__input}
							placeholder='Название сертификата *'
						/>
						<p className={styles.form__text}>
							Можно не писать «Подарочный сертификат» — это будет указано
							автоматически. Пример названия: «Семейная фотосессия в студии»
						</p>
						<textarea
							className={styles.form__textarea}
							placeholder='Описание *'
						></textarea>
						<p className={styles.form__text}>
							Тут вы можете указать условия использования сертификата или
							подробно рассказать о компании, сделав сертификат более ценным для
							получателя.
						</p>
						<div className={styles.form__box}>
							<input
								type='text'
								className={styles.form__box__input}
								placeholder='Укажите номинал (если нужно)'
							/>
							<div className={styles.form__box__wrapper}>
								<select
									name='select-category'
									id='format'
									className={styles.form__box__select}
								>
									<option
										selected
										value='1'
										className={styles.form__box__option}
									>
										Рубли, ₽
									</option>
									<option value='2'>USD</option>
									<option value='3'>EUR</option>
								</select>
							</div>
						</div>
					</form>
					<div className={styles.info__download}>
						<h3 className={styles.info__download__title}>
							Изображения слайдера
						</h3>
						<p className={styles.form__subtitle}>
							Вы можете загрузить в слайдер сертификата до 3х квадратных
							изображений, в формате .jpeg или .png. Вес каждого файла не более
							2 мб.
						</p>

						<input className={styles.info__download__input} type='file' />
						<button className={styles.info__download__btn}>
							<img src='/icons/download.svg' alt='download icon' />
							Загрузить
						</button>
					</div>

					<div className={styles.info__company}>
						<h3 className={styles.info__company__title}>
							Информация о компании и контакты <span>*</span>
						</h3>
						<p className={styles.form__subtitle}>
							Выберите компанию и ее контакты, которые нужно показывать клиенту
							в сертификате (блок «Связаться»).
						</p>
						<button className={styles.info__company__btn}>
							<img src='/icons/plus-black.svg' alt='plus icon' />
							Создать компанию
						</button>
						<div className={styles.info__company__alert}>
							<img src='/icons/company-alert.svg' alt='alert icon' />
							Необходимо указать информацию о компании и контакты
						</div>
					</div>

					<div className={styles.info__create}>
						<p className={styles.form__subtitle}>
							Создавая сертификат, вы подтверждаете, что ознакомились с
							<span>пользовательским соглашением</span> и принимаете его
							условия.
						</p>
						<button className={styles.info__create__btn}>
							Создать сертификат
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CertificateInfo