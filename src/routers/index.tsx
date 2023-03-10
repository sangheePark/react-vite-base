import { EPath } from '@/enums/commonEnum'
import Login from '@/views/login/Login'
import { Navigate, RouteObject, useRoutes } from 'react-router-dom'
import { IRouteObject } from './interface'

const metaRouters = import.meta.glob<IRouteObject[]>('./modules/*.tsx', { eager: true, import: 'default' })

export const routerArray: IRouteObject[] = []
Object.keys(metaRouters).forEach(key => {
	// console.log(`routers is key:`, key)

	const modules = metaRouters[key]
	modules.forEach((router: IRouteObject) => {
		// console.log(router.children)
		const list: IRouteObject[] = [router, ...(router?.children || [])].filter(f => f.path)
		routerArray.push(...list)
	})
})

export const rootRouter: IRouteObject[] = [
	{
		path: '/',
		element: <Navigate to={EPath.LOGIN} />
	},
	{
		path: EPath.LOGIN,
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
		element: <Navigate to={EPath.ERROR404} />
	}
]

const Router = () => {
	const routes = useRoutes(rootRouter as RouteObject[])
	return routes
}

export default Router
