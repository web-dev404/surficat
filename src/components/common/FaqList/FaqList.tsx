import React from 'react'

import FaqItem from '@/common/FaqItem/FaqItem'

import s from './FaqList.module.scss'

const FaqList = () => {
	return (
		<ul className={s.list}>
			<FaqItem
				title={
					'Aenean congue consectetur nisl. Integer aliquet dolor nulla, sed molestie enim convallis sed?'
				}
			>
				Vestibulum imperdiet sit amet orci sed euismod. Nulla in porta elit, et
				malesuada nisi. Mauris ac magna est. Etiam iaculis condimen tum
				ullamcorper. Donec viverra aliquam finibus. In est erat, dignissim
				tincidunt sapien at, tempus finibus dolor.
			</FaqItem>
			<FaqItem title={'Quisque pulvinar aliquet neque?'}>
				Vestibulum imperdiet sit amet orci sed euismod. Nulla in porta elit, et
				malesuada nisi. Mauris ac magna est. Etiam iaculis condimen tum
				ullamcorper. Donec viverra aliquam finibus. In est erat, dignissim
				tincidunt sapien at, tempus finibus dolor.
			</FaqItem>
			<FaqItem
				title={
					'Ullam id metus ac ligula pretium blandit. Donec dapibus porta magna, eget feugiat velit imperdiet?'
				}
			>
				Vestibulum imperdiet sit amet orci sed euismod. Nulla in porta elit, et
				malesuada nisi. Mauris ac magna est. Etiam iaculis condimen tum
				ullamcorper. Donec viverra aliquam finibus. In est erat, dignissim
				tincidunt sapien at, tempus finibus dolor.
			</FaqItem>
			<FaqItem title={'Donec efficitur pharetra laoreet. Morbi non erat?'}>
				Vestibulum imperdiet sit amet orci sed euismod. Nulla in porta elit, et
				malesuada nisi. Mauris ac magna est. Etiam iaculis condimen tum
				ullamcorper. Donec viverra aliquam finibus. In est erat, dignissim
				tincidunt sapien at, tempus finibus dolor.
			</FaqItem>
			<FaqItem title={'Class aptent taciti sociosqu ad litora torquent?'}>
				Vestibulum imperdiet sit amet orci sed euismod. Nulla in porta elit, et
				malesuada nisi. Mauris ac magna est. Etiam iaculis condimen tum
				ullamcorper. Donec viverra aliquam finibus. In est erat, dignissim
				tincidunt sapien at, tempus finibus dolor.
			</FaqItem>
			<FaqItem title={'Suspendisse luctus ornare lacinia?'}>
				Vestibulum imperdiet sit amet orci sed euismod. Nulla in porta elit, et
				malesuada nisi. Mauris ac magna est. Etiam iaculis condimen tum
				ullamcorper. Donec viverra aliquam finibus. In est erat, dignissim
				tincidunt sapien at, tempus finibus dolor.
			</FaqItem>
			<FaqItem title={'Ut nec enim neque. Nullam id metus ac ligula?'}>
				Vestibulum imperdiet sit amet orci sed euismod. Nulla in porta elit, et
				malesuada nisi. Mauris ac magna est. Etiam iaculis condimen tum
				ullamcorper. Donec viverra aliquam finibus. In est erat, dignissim
				tincidunt sapien at, tempus finibus dolor.
			</FaqItem>
		</ul>
	)
}

export default FaqList
