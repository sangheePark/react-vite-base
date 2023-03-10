import { ErrorFallback } from '@/components/atomic/ErrorFallback/ErrorFallback'
import { useQueryErrorResetBoundary } from '@tanstack/react-query'
import { Suspense, useCallback, useEffect, useMemo } from 'react'
import ErrorBoundary from './ErrorBoundary'

interface Props {
	suspense?: React.ReactElement
	fallback?: (...args: any[]) => React.ReactElement
}

const AsyncBoundary: React.FC<React.PropsWithChildren<Props>> = ({ suspense, fallback = ErrorFallback, children }) => {
	const { reset } = useQueryErrorResetBoundary()
	const resetQuery = useCallback(() => {
		console.log(`...useQueryErrorResetBoundary...`)
		reset()
		// queryClient.resetQueries()
	}, [reset])

	const suspenseFallback = useMemo(() => {
		return suspense ? suspense : <>loading....</>
	}, [suspense])

	console.log(`AsyncBoundary`)
	useEffect(() => {
		console.log(`AsyncBoundary:useEffect`)
	}, [])

	return (
		<ErrorBoundary resetQuery={resetQuery} fallback={fallback}>
			<Suspense fallback={suspenseFallback}>{children}</Suspense>
		</ErrorBoundary>
	)
}

export default AsyncBoundary
