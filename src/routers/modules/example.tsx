import lazyLoad from '@/routers/utils/lazyLoad'
import { LayoutIndex } from '@/routers/constant'
import { IRouteObject } from '@/routers/interface'
import { EPath } from '@/enums/commonEnum'

const exampleRouter: Array<IRouteObject> = [
	{
		element: <LayoutIndex />,
		children: [
			{
				path: EPath.EXAMPLE,
				element: lazyLoad(() => import('@/views/example/Example')),
				meta: {
					requiresAuth: true,
					title: '예제',
					key: 'example'
				}
			}
		]
	}
]

export default exampleRouter
