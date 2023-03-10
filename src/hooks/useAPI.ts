import useAxios from 'axios-hooks'
import { useEffect, useMemo, useState } from 'react'

function useList<R, F = undefined>(url: string) {
	const [filter, setFilter] = useState<F>()
	const [{ data, loading: isLoading, error }, refetch] = useAxios<R[]>({ url, params: filter })

	const [list, has] = useMemo(() => {
		const list = data || []
		return [list, list.length > 0]
	}, [data])

	useEffect(() => {
		if (error) {
			throw error
		}
	}, [error])

	return {
		refetch,
		filter,
		setFilter,
		isLoading,
		data: list,
		has
	}
}
export default useList
