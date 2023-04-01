import React, { useState } from 'react'

import Hint from '@/common/Hint/Hint'
import TextArea from '@/common/TextArea/TextArea'

import Layout from '@/layout/Layout'

import RefreshIcon from '../public/icons/white-refresh.svg'
import Settings from '../public/icons/white-settings.svg'

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
				<PrimaryButton>
					<div className={'icon'}>
						<Settings />
					</div>
					<p className={'btn-list-text'}>Button text</p>
					<div className={'icon'}>
						<Settings />
					</div>
				</PrimaryButton>
				<PrimaryButton size={'medium'}>
					<div className={'icon'}>
						<Settings />
					</div>
					<p className={'btn-list-text'}>Button text</p>
					<div className={'icon'}>
						<Settings />
					</div>
				</PrimaryButton>
				<PrimaryButton size={'small'}>
					<div className={'list-svg-icon-sm'}>
						<RefreshIcon />
					</div>
					<p className={'btn-list-text'}>Button text</p>
					<div className={'list-svg-icon-sm'}>
						<RefreshIcon />
					</div>
				</PrimaryButton>
				<PrimaryButton size={'xs'}>
					<div className={'list-svg-icon-sm'}>
						<RefreshIcon />
					</div>
					<p className={'btn-list-text'}>Button text</p>
					<div className={'list-svg-icon-sm'}>
						<RefreshIcon />
					</div>
				</PrimaryButton>
				<PrimaryButton disabled={true}>
					<div className={'icon'}>
						<Settings />
					</div>
					<p className={'btn-list-text'}>Button text</p>
					<div className={'icon'}>
						<Settings />
					</div>
				</PrimaryButton>
				<OutlineButton>
					<div className={'icon'}>
						<Settings />
					</div>
					<p className={'btn-list-text'}>Button text</p>
					<div className={'icon'}>
						<Settings />
					</div>
				</OutlineButton>
				<OutlineButton size={'medium'}>
					<div className={'icon'}>
						<Settings />
					</div>
					<p className={'btn-list-text'}>Button text</p>
					<div className={'icon'}>
						<Settings />
					</div>
				</OutlineButton>
				<OutlineButton size={'small'}>
					<div className={'list-svg-icon-sm'}>
						<RefreshIcon />
					</div>
					<p className={'btn-list-text'}>Button text</p>
					<div className={'list-svg-icon-sm'}>
						<RefreshIcon />
					</div>
				</OutlineButton>
				<OutlineButton size={'xs'}>
					<div className={'list-svg-icon-sm'}>
						<RefreshIcon />
					</div>
					<p className={'btn-list-text'}>Button text</p>
					<div className={'list-svg-icon-sm'}>
						<RefreshIcon />
					</div>
				</OutlineButton>
				<OutlineButton disabled={true}>
					<div className={'icon'}>
						<Settings />
					</div>
					<p className={'btn-list-text'}>Button text</p>
					<div className={'icon'}>
						<Settings />
					</div>
				</OutlineButton>
				<RedButton>
					<div className={'icon'}>
						<Settings />
					</div>
					<p className={'btn-list-text'}>Button text</p>
					<div className={'icon'}>
						<Settings />
					</div>
				</RedButton>
				<RedButton size={'medium'}>
					<div className={'icon'}>
						<Settings />
					</div>
					<p className={'btn-list-text'}>Button text</p>
					<div className={'icon'}>
						<Settings />
					</div>
				</RedButton>
				<RedButton size={'small'}>
					<div className={'list-svg-icon-sm'}>
						<RefreshIcon />
					</div>
					<p className={'btn-list-text'}>Button text</p>
					<div className={'list-svg-icon-sm'}>
						<RefreshIcon />
					</div>
				</RedButton>
				<RedButton size={'xs'}>
					<div className={'list-svg-icon-sm'}>
						<RefreshIcon />
					</div>
					<p className={'btn-list-text'}>Button text</p>
					<div className={'list-svg-icon-sm'}>
						<RefreshIcon />
					</div>
				</RedButton>
				<RedButton disabled={true}>
					<div className={'icon'}>
						<Settings />
					</div>
					<p className={'btn-list-text'}>Button text</p>
					<div className={'icon'}>
						<Settings />
					</div>
				</RedButton>
				<ButtonBlack>
					<div className={'icon'}>
						<Settings />
					</div>
					<p className={'btn-list-text'}>Button text</p>
					<div className={'icon'}>
						<Settings />
					</div>
				</ButtonBlack>
				<ButtonBlack size={'medium'}>
					<div className={'icon'}>
						<Settings />
					</div>
					<p className={'btn-list-text'}>Button text</p>
					<div className={'icon'}>
						<Settings />
					</div>
				</ButtonBlack>
				<ButtonBlack size={'small'}>
					<div className={'list-svg-icon-sm'}>
						<RefreshIcon />
					</div>
					<p className={'btn-list-text'}>Button text</p>
					<div className={'list-svg-icon-sm'}>
						<RefreshIcon />
					</div>
				</ButtonBlack>
				<ButtonBlack size={'xs'}>
					<div className={'list-svg-icon-sm'}>
						<RefreshIcon />
					</div>
					<p className={'btn-list-text'}>Button text</p>
					<div className={'list-svg-icon-sm'}>
						<RefreshIcon />
					</div>
				</ButtonBlack>
				<ButtonBlack disabled={true}>
					<div className={'icon'}>
						<Settings />
					</div>
					<p className={'btn-list-text'}>Button text</p>
					<div className={'icon'}>
						<Settings />
					</div>
				</ButtonBlack>
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
