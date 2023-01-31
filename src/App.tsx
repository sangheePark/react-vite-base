import ConsoleConfig from '@/config/vconsole'
import { BrowserRouter } from 'react-router-dom'
import AuthRouter from '@/routers/utils/authRouter'
import Router from '@/routers'
import GlobalErrorBoundary from './components/atomic/Error/GlobalErrorBoundary'
import './i18n'

const App: React.FC = () => {
	ConsoleConfig.use()
	return (
		// <QueryClientProvider client={queryClient}>
		<GlobalErrorBoundary>
			<BrowserRouter>
				<AuthRouter>
					<Router></Router>
				</AuthRouter>
			</BrowserRouter>
		</GlobalErrorBoundary>
		// <ReactQueryDevtools initialIsOpen={false} />
		// </QueryClientProvider>
	)
}

export default App
