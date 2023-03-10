import { Route, Routes } from 'react-router-dom'
import ExBasicPage from '../component/ExBasicPage'
import ExRouterUseNavigate from './ExRouterUseNavigate'

const menus = [
	{
		code: 'useNavigate',
		label: 'useNavigate'
	},
	{
		code: 'layer',
		label: 'Layer Context'
	},
	{
		code: 'native',
		label: 'Native interface'
	}
]
const ExRouter: React.FC = () => {
	return (
		<ExBasicPage title='Router' menus={menus}>
			<Routes>
				<Route path='/useNavigate' element={<ExRouterUseNavigate />}></Route>
			</Routes>
		</ExBasicPage>
	)
}

export default ExRouter
