import Tag from '@/components/atomic/Tag/Tag'
import { ExampleModel } from '@/model/example/exampleModel'
import { ExampleService } from '@/service/example/exampleService'
import useExStore from '@/store/exStore'
import { useEffect, useMemo, useState } from 'react'

const Example: React.FC = () => {
	const { value } = useExStore()
	const [state, setState] = useState<ExampleModel.Response[]>([])
	const [filter] = useState<ExampleModel.Filter>()

	const hasList = useMemo(() => {
		return state.length > 0
	}, [state])

	const load = async () => {
		const response = await ExampleService.list(filter)
		setState(response.data || [])
	}
	useEffect(() => {
		load()
	}, [])

	return (
		<div>
			<Tag label='예제1' isMore={true}></Tag>
			{hasList && state.length + `개`}
			{value}
		</div>
	)
}
export default Example
