import clsx from 'clsx'
import { FC, PropsWithChildren } from 'react'

import Header from '@/layout/header/Header'

import Tabs from '../UI/Tabs/Tabs'

import s from './CertificateLayout.module.scss'
import Meta from './meta/Meta'
import { ISeo } from './meta/meta.interface'

interface ILayout extends ISeo {}

const Layout: FC<PropsWithChildren<ILayout>> = ({ children, ...rest }) => {
	return (
		<>
			<Meta {...rest} />
			<Header></Header>
			<main className={clsx('main', s.main)}>
				<section className={s.section}>
					<div className={'container'}>{children}</div>
				</section>
			</main>
			<Tabs mob={true} className={s.footer} />
		</>
	)
}

export default Layout
