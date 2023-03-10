import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false, //윈도우 포커싱 시 refetch
			refetchInterval: false, // refresh interval
			// refetchIntervalInBackground: false, // refresh interval
			// refetchOnMount: false, // refresh
			refetchOnReconnect: false,
			suspense: false, // suspend
			useErrorBoundary: true, // use error boundary
			retry: false
		}
	}
	// queryCache: new QueryCache({
	// 	onError: (error, query) => {
	// 		// 🎉 only show error toasts if we already have data in the cache
	// 		// which indicates a failed background update

	// 		// query.reset()
	// 		if (query.state.data !== undefined) {
	// 			// toast.error(`Something went wrong: ${error.message}`)
	// 		}
	// 	}
	// })
})
