import ConsoleConfig from '@/config/vconsole'
import Router from '@/routers'
import AuthRouter from '@/routers/utils/authRouter'
import GlobalErrorBoundary from '@/views/error/GlobalErrorBoundary'
import { BrowserRouter } from 'react-router-dom'
import './i18n'
import GlobalStyleContainer from './styles/GlobalStyleContainer'

const App: React.FC = () => {
	ConsoleConfig.use()

	return (
		// <QueryClientProvider client={queryClient}>
		<GlobalStyleContainer>
			<GlobalErrorBoundary>
				<BrowserRouter>
					<AuthRouter>
						<Router />
					</AuthRouter>
				</BrowserRouter>
			</GlobalErrorBoundary>
		</GlobalStyleContainer>
		// <ReactQueryDevtools initialIsOpen={false} />
		// </QueryClientProvider>
	)
}

export default App
