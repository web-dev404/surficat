import Image from 'next/image'
import { FC, PropsWithChildren } from 'react'

import s from './Authorization.module.scss'
import Meta from './meta/Meta'
import { ISeo } from './meta/meta.interface'

interface ILayout extends ISeo {}

const Authorization: FC<PropsWithChildren<ILayout>> = ({
	children,
	...rest
}) => {
	return (
		<>
			<Meta {...rest} />

			<main className={'main'}>
				<div className={'container'}>
					<div className={s.authorization}>
						<Image
							className={s.authorization__logo}
							src={'/icons/logo.svg'}
							alt={'logo'}
							width={104}
							height={32}
						></Image>
						<div className={s.authorization__row}>
							<Image
								src={'/img/registration.jpg'}
								alt={'RegistrationBlock'}
								width={480}
								height={600}
								className={s.authorization__photo}
							/>
							{children}
						</div>
					</div>
				</div>
			</main>
		</>
	)
}

export default Authorization
