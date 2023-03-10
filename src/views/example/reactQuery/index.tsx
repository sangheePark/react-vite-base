import { Route, Routes } from 'react-router-dom'
import ExBasicPage from '../component/ExBasicPage'
import ExReactQueryList from './ExReactQueryList'

export interface IExampleReactQueryProps {}

const menus = [
	{
		code: 'list',
		label: 'list'
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

const ExampleReactQuery: React.FC<IExampleReactQueryProps> = () => {
	return (
		<ExBasicPage title='react-query' menus={menus}>
			<Routes>
				<Route path='/list' element={<ExReactQueryList />}></Route>
			</Routes>
		</ExBasicPage>
	)
}

export default ExampleReactQuery
