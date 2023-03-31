import clsx from 'clsx'
import React, { useState } from 'react'

import s from '@/common/CompanyItem/CompanyItem.module.scss'
import Hint from '@/common/Hint/Hint'
import TextArea from '@/common/TextArea/TextArea'

import Layout from '@/layout/Layout'

import ButtonBlack from '@/components/UI/ButtonBlack/ButtonBlack'
import CheckBox from '@/components/UI/CheckBox/CheckBox'
import DropDown from '@/components/UI/DropDown/DropDown'
import Input from '@/components/UI/Input/Input'
import OutlineButton from '@/components/UI/OutlineButton/OutlineButton'
import PrimaryButton from '@/components/UI/PrimaryButton/PrimaryButton'
import RadioButton from '@/components/UI/RadioButton/RadioButton'
import RedButton from '@/components/UI/RedButton/RedButton'
import Tabs from '@/components/UI/Tabs/Tabs'

const ListPage = () => {
	return (
		<Layout title={'Сертификаты'}>
			<h1>Ui-kit List</h1>

			<div className={'list-container'}>
				<PrimaryButton>Выбрать</PrimaryButton>
				<PrimaryButton size={'medium'}>s</PrimaryButton>
				<PrimaryButton size={'small'}>l</PrimaryButton>
				<PrimaryButton size={'xs'}>xs</PrimaryButton>
				<PrimaryButton disabled={true}>disabled</PrimaryButton>
				<OutlineButton>Выбрать</OutlineButton>
				<OutlineButton size={'medium'}>s</OutlineButton>
				<OutlineButton size={'small'}>l</OutlineButton>
				<OutlineButton size={'xs'}>l</OutlineButton>
				<OutlineButton disabled={true}>disabled</OutlineButton>
				<RedButton>Выбрать</RedButton>
				<RedButton size={'medium'}>s</RedButton>
				<RedButton size={'small'}>l</RedButton>
				<RedButton size={'xs'}>xs</RedButton>
				<RedButton disabled={true}>disabled</RedButton>
				<ButtonBlack>Выбрать</ButtonBlack>
				<ButtonBlack size={'medium'}>s</ButtonBlack>
				<ButtonBlack size={'small'}>l</ButtonBlack>
				<ButtonBlack size={'xs'}>xs</ButtonBlack>
				<ButtonBlack disabled={true}>disabled</ButtonBlack>
				<Input hide={false} icon={'person'}>
					Пример
				</Input>
				<Input
					hide={false}
					error={true}
					icon={'person'}
					errorText={'example text'}
				>
					Пример
				</Input>
				<Input hide={false}>Пример</Input>
				<Input hide={true}>Пример</Input>
				<Input hide={false} errorText={'example text'} error={true}>
					Пример
				</Input>
				<DropDown />
				<TextArea>Текст</TextArea>
				<TextArea errorText={'example text'} error={true}>
					Пример
				</TextArea>
				<TextArea disabled={true}>Текст</TextArea>
				<div className={'relative'}>
					<Hint visible={true}>
						<svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M18.6667 7L9.50004 16.1667L5.33337 12'
								stroke='white'
								strokeWidth='1.7'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
						Example text
					</Hint>
					<Hint visible={true} up={true}>
						<svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M18.6667 7L9.50004 16.1667L5.33337 12'
								stroke='white'
								strokeWidth='1.7'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
						Example text
					</Hint>
				</div>
				<RadioButton />
				<CheckBox />
			</div>
		</Layout>
	)
}
export default ListPage
