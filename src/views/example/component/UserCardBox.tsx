import React from 'react'
import { StyledUserCard } from './UserCardBox.style'

interface ExCardBoxProps {}

const UserCardBox: React.FC<ExCardBoxProps> = () => {
	// const [id] = useState<string>('')
	// const { data } = useExamples({ id })

	// const hasChild = useMemo<boolean>(() => {
	// 	return (data?.data?.length ?? 0) > 0
	// }, [data])

	return <StyledUserCard.Box hasChild={true}></StyledUserCard.Box>
}

export default UserCardBox
