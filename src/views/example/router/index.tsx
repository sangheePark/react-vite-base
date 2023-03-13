import { Route, Routes } from 'react-router-dom'
import ExBasicPage from '../component/ExBasicPage'
import ExRouterUseNavigate from './ExRouterUseNavigate'
import ExRouterUseParameter from './ExRouterUseParameter'
import ExRouterUseState from './ExRouterUseState'

const menus = [
	{
		code: 'useNavigate',
		label: 'useNavigate'
	}
]
const ExRouter: React.FC = () => {
	return (
		<ExBasicPage title='Router' menus={menus}>
			<Routes>
				<Route path='/useNavigate' element={<ExRouterUseNavigate />}></Route>
				<Route path='/result' element={<ExRouterUseState />}></Route>
				<Route path='/parameter/:name' element={<ExRouterUseParameter />}></Route>
			</Routes>
		</ExBasicPage>
	)
}

export default ExRouter
