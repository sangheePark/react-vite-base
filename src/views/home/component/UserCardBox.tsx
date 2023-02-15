import { useCards } from '@/service/exReactQueryService'
import React, { useMemo, useState } from 'react'
import { StyledUserCard } from './UserCardBox.style'

type UserCardBoxProps = {}

const UserCardBox: React.FC<UserCardBoxProps> = () => {
	const [id] = useState<string>('')
	const { data } = useCards({ id })

	const hasChild = useMemo<boolean>(() => {
		return (data?.data?.length ?? 0) > 0
	}, [data])

	return <StyledUserCard.Box hasChild={hasChild}></StyledUserCard.Box>
}

export default UserCardBox
