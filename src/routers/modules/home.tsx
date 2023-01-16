import React from 'react'
import lazyLoad from '@/routers/utils/lazyLoad'
import { LayoutIndex } from '@/routers/constant'
import { IRouteObject } from '@/routers/interface'

const homeRouter: Array<IRouteObject> = [
	{
		element: <LayoutIndex />,
		children: [
			{
				path: '/home',
				element: lazyLoad(React.lazy(() => import('@/views/home/index'))),
				meta: {
					requiresAuth: true,
					title: '홈',
					key: 'home'
				}
			}
		]
	}
]

export default homeRouter
