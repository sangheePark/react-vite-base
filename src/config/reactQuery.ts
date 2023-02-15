import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false, //윈도우 포커싱 시 refetch
			refetchInterval: false, // refresh interval
			refetchIntervalInBackground: false, // refresh interval
			suspense: true, // suspend
			useErrorBoundary: true, // use error boundary
			retry: 0
		}
	}
})
