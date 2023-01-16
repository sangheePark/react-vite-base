import { Navigate, useRoutes } from 'react-router-dom'
import { RouteObject } from '@/routers/interface'
import Login from '@/views/login/index'

const metaRouters = import.meta.glob<RouteObject[]>('./modules/*.tsx', { eager: true, import: 'default' })

export const routerArray: RouteObject[] = []
Object.keys(metaRouters).forEach(key => {
	console.log(`routers is key:`, key)

	// metaRouters[item]().then(modules => {
	// 	console.log(`metaRouters: `, JSON.stringify(modules))
	// 	routerArray.push(...modules)
	// })
	const modules = metaRouters[key]
	modules.forEach((router: RouteObject) => {
		const list: RouteObject[] = [router, ...(router?.children || [])].filter(f => f.path)
		routerArray.push(...list)
	})
})

export const rootRouter: RouteObject[] = [
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
	const routes = useRoutes(rootRouter)
	return routes
}

export default Router
