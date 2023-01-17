import React from 'react'
import lazyLoad from '@/routers/utils/lazyLoad'
import { LayoutIndex } from '@/routers/constant'
import { IRouteObject } from '@/routers/interface'
import { EPath } from '@/enums/commonEnum'

const homeRouter: Array<IRouteObject> = [
	{
		element: <LayoutIndex />,
		children: [
			{
				path: EPath.HOME,
				element: lazyLoad(React.lazy(() => import('@/views/home/Home'))),
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
