import { ExampleModel } from '@/model/example/exampleModel'
import { ExampleService } from '@/service/example/exampleService'
import { useCallback, useEffect, useState } from 'react'
import { ExCardBoxContainer } from './ExCardBox.style'

const ExCardBox: React.FC = () => {
	const [filter, setFilter] = useState<ExampleModel.Filter>()
	const { data } = ExampleService.list(filter)
	const onRowClick = useCallback((row: ExampleModel.Response) => {
		console.log(`row Click: `, row.id)
		setFilter({
			id: row.id
		})
	}, [])

	useEffect(() => {
		console.log(`만운트`)
		return () => {
			console.log(`언만운트`)
			// ExampleService.prefetchQuery()
		}
	}, [])
	return <ExCardBoxContainer onRowClick={onRowClick} data={data?.data || []}></ExCardBoxContainer>
}

export default ExCardBox
