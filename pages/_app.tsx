import type { AppProps } from 'next/app'
import { Router } from 'next/router'
import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import Loader from '@/common/Loader/Loader'

import '../src/styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
	const [loader, setLoader] = useState(false)
	const nodeRef = React.useRef(null)
	useEffect(() => {
		return () => {
			Router.events.on('routeChangeStart', url => {
				setLoader(true)
			})
			Router.events.on('routeChangeComplete', url => {
				setTimeout(() => {
					setLoader(false)
				}, 800)
			})
		}
	}, [])
	return (
		<>
			<CSSTransition
				classNames='loader'
				unmountOnExit
				timeout={300}
				in={loader}
				nodeRef={nodeRef}
			>
				<div className={'loaderWrapper'} ref={nodeRef}>
					<Loader />
				</div>
			</CSSTransition>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
