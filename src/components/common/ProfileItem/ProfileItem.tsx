import React, { FC, PropsWithChildren } from 'react'

import s from './ProfileItem.module.scss'

const ProfileItem: FC<PropsWithChildren> = ({ children }) => {
	return <div className={s.profile}>{children}</div>
}

export default ProfileItem
