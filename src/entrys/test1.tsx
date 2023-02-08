import ConsoleConfig from '@/config/vconsole'
import AuthRouter from '@/routers/utils/authRouter'
import GlobalStyleContainer from '@/styles/GlobalStyleContainer'
import GlobalErrorBoundary from '@/views/error/GlobalErrorBoundary'
import Test1 from '@/views/test1/Test1'
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
							<Route path='/' element={<Test1 />} />
						</Routes>
					</AuthRouter>
				</BrowserRouter>
			</GlobalErrorBoundary>
		</GlobalStyleContainer>
	)
}

export default App
