import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

const ExRouterUseState: React.FC = () => {
	const { state } = useLocation()

	const data = useMemo(() => {
		return state ? (state as { value: string }) : undefined
	}, [state])
	return <>{data?.value}</>
}

export default ExRouterUseState
