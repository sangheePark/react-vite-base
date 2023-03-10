import { useMemo } from 'react'
import { StyledList as S } from './List.style'

export interface ListModel<T = undefined> {
	value?: T
	label: string
	code: string
}

export interface IListProps<T> {
	data: ListModel<T>[]
	emptyComponent?: React.ReactNode
	useEmpty?: boolean
	onRowClick?: (value: ListModel<T>) => void
}

export function List<T = undefined>({ data, useEmpty = true, emptyComponent, onRowClick }: IListProps<T>) {
	const isEmpty = useMemo(() => {
		return data && data.length > 0 && useEmpty
	}, [data, useEmpty])
	return (
		<S.Container>
			{isEmpty && emptyComponent}
			{data.map(m => (
				<S.Row
					key={m.code}
					onClick={() => {
						onRowClick?.(m)
					}}
				>
					{/* icon & active style */}
					{m.label}
				</S.Row>
			))}
		</S.Container>
	)
}

export default List
