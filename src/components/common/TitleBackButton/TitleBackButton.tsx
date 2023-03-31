import Link from 'next/link'
import React from 'react'

import styles from './TitleBackButton.module.scss'

const TitleBackButton = () => {
	return (
		<Link href={'/certificate'} className={styles.icon}>
			<svg
				width='32'
				height='32'
				viewBox='0 0 32 32'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<g clip-path='url(#clip0_1775_4494)'>
					<path
						d='M27.2003 16H6.66699'
						stroke='#232124'
						stroke-width='2.5'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M14.3997 25.3332L5.06637 15.9998L14.3997 6.6665'
						stroke='#232124'
						stroke-width='2.5'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
				</g>
				<defs>
					<clipPath id='clip0_1775_4494'>
						<rect width='32' height='32' fill='white' />
					</clipPath>
				</defs>
			</svg>
		</Link>
	)
}

export default TitleBackButton
