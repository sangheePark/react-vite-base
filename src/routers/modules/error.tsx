import React from 'react'
import lazyLoad from '@/routers/utils/lazyLoad'
import { IRouteObject } from '@/routers/interface'
import { EPath } from '@/enums/common'

const errorRouter: Array<IRouteObject> = [
	{
		path: EPath.ERROR403,
		element: lazyLoad(React.lazy(() => import('@/views/error/NotAuth'))),
		meta: {
			requiresAuth: true,
			title: '403 화면',
			key: '403'
		}
	},
	{
		path: EPath.ERROR404,
		element: lazyLoad(React.lazy(() => import('@/views/error/NotFound'))),
		meta: {
			requiresAuth: false,
			title: '404 화면',
			key: '404'
		}
	},
	{
		path: EPath.ERROR500,
		element: lazyLoad(React.lazy(() => import('@/views/error/ServerError'))),
		meta: {
			requiresAuth: false,
			title: '500 화면',
			key: '500'
		}
	}
]

export default errorRouter
