import { Navigate, RouteObject, useRoutes } from 'react-router-dom'
import Login from '@/views/login/index'
import { IRouteObject } from './interface'

const metaRouters = import.meta.glob<IRouteObject[]>('./modules/*.tsx', { eager: true, import: 'default' })

export const routerArray: IRouteObject[] = []
Object.keys(metaRouters).forEach(key => {
	console.log(`routers is key:`, key)

	// metaRouters[item]().then(modules => {
	// 	console.log(`metaRouters: `, JSON.stringify(modules))
	// 	routerArray.push(...modules)
	// })
	const modules = metaRouters[key]
	modules.forEach((router: IRouteObject) => {
		const list: IRouteObject[] = [router, ...(router?.children || [])].filter(f => f.path)
		routerArray.push(...list)
	})
})

export const rootRouter: IRouteObject[] = [
	{
		path: '/',
		element: <Navigate to='/login' />
	},
	{
		path: '/login',
		element: <Login />,
		meta: {
			requiresAuth: false,
			title: '로그인 화면',
			key: 'login'
		}
	},
	...routerArray,
	{
		path: '*',
		element: <Navigate to='/404' />
	}
]

const Router = () => {
	const routes = useRoutes(rootRouter as RouteObject[])
	return routes
}

export default Router
