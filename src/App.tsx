import React from 'react'
import ConsoleConfig from '@/config/vconsole'
import { BrowserRouter } from 'react-router-dom'
import AuthRouter from './routers/utils/authRouter'
import Router from './routers'

const App: React.FC = () => {
	ConsoleConfig.use()
	return (
		// <QueryClientProvider client={queryClient}>
		<BrowserRouter>
			<AuthRouter>
				<Router></Router>
			</AuthRouter>
		</BrowserRouter>
		// <ReactQueryDevtools initialIsOpen={false} />
		// </QueryClientProvider>
	)
}

export default App
