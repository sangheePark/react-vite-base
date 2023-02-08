import ConsoleConfig from '@/config/vconsole'
import AuthRouter from '@/routers/utils/authRouter'
import GlobalStyleContainer from '@/styles/GlobalStyleContainer'
import GlobalErrorBoundary from '@/views/error/GlobalErrorBoundary'
import Test2 from '@/views/test2/Test2'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../i18n'

const App: React.FC = () => {
	ConsoleConfig.use()

	return (
		<GlobalStyleContainer>
			<GlobalErrorBoundary>
				<BrowserRouter>
					<AuthRouter>
						<Routes>
							<Route path='/' element={<Test2 />} />
						</Routes>
					</AuthRouter>
				</BrowserRouter>
			</GlobalErrorBoundary>
		</GlobalStyleContainer>
	)
}

export default App
