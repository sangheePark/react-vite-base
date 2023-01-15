import React from 'react'
import lazyLoad from '@/routers/utils/lazyLoad'
import { RouteObject } from '@/routers/interface'

const errorRouter: Array<RouteObject> = [
	{
		path: '/403',
		element: lazyLoad(React.lazy(() => import('@/views/error/403'))),
		meta: {
			requiresAuth: true,
			title: '403 화면',
			key: '403'
		}
	},
	{
		path: '/404',
		element: lazyLoad(React.lazy(() => import('@/views/error/404'))),
		meta: {
			requiresAuth: false,
			title: '404 화면',
			key: '404'
		}
	},
	{
		path: '/500',
		element: lazyLoad(React.lazy(() => import('@/views/error/500'))),
		meta: {
			requiresAuth: false,
			title: '500 화면',
			key: '500'
		}
	},
	{
		path: '/505',
		element: lazyLoad(React.lazy(() => import('@/views/error/505'))),
		meta: {
			requiresAuth: true,
			title: '505 화면',
			key: '505'
		}
	}
]

export default errorRouter
