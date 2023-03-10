import ExBasicPage from './component/ExBasicPage'

const menus = [
	{
		code: 'reactQuery',
		label: 'react-query'
	},
	{
		code: 'layer',
		label: 'Layer Context'
	},
	{
		code: 'native',
		label: 'Native interface'
	},
	{
		code: 'router',
		label: 'Router-dom'
	},
	{
		code: 'iframe',
		label: 'iframe'
	}
]

const Example: React.FC = () => {
	return <ExBasicPage title='예제 화면' menus={menus}></ExBasicPage>
}
export default Example
