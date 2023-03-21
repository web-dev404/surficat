import { FC, PropsWithChildren } from 'react'

import Header from '@/layout/header/Header'

import Meta from './meta/Meta'
import { ISeo } from './meta/meta.interface'

interface ILayout extends ISeo {}

const Layout: FC<PropsWithChildren<ILayout>> = ({ children, ...rest }) => {
	return (
		<>
			<Meta {...rest} />
			<main className={'main'}>
				<div className={'container'}>
					<Header></Header>
					<section>{children}</section>
				</div>
			</main>
		</>
	)
}

export default Layout
