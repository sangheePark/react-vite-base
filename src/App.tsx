import ConsoleConfig from '@/config/vconsole'
import Router from '@/routers'
import AuthRouter from '@/routers/utils/authRouter'
import GlobalErrorBoundary from '@/views/error/GlobalErrorBoundary'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { BrowserRouter } from 'react-router-dom'
import { queryClient } from './config/reactQuery'
import './i18n'
import GlobalStyleContainer from './styles/GlobalStyleContainer'

const App: React.FC = () => {
	ConsoleConfig.use()

	return (
		<QueryClientProvider client={queryClient}>
			<GlobalStyleContainer>
				<GlobalErrorBoundary>
					<BrowserRouter>
						<AuthRouter>
							<Router />
						</AuthRouter>
					</BrowserRouter>
				</GlobalErrorBoundary>
			</GlobalStyleContainer>
			{import.meta.env.VITE_DROP_CONSOLE && <ReactQueryDevtools initialIsOpen={false} />}
		</QueryClientProvider>
	)
}

export default App
