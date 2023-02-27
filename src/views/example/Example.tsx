import Tag from '@/components/atomic/Tag/Tag'
import useExStore from '@/store/exStore'
import { useEffect } from 'react'

const Example: React.FC = () => {
	const { setValue, value } = useExStore()

	useEffect(() => {
		setValue(import.meta.env.MODE)
	}, [])

	return (
		<div>
			<Tag label='예제1' isMore={true}></Tag>
			{value}
		</div>
	)
}
export default Example
