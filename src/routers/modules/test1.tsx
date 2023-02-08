import { EPath } from '@/enums/commonEnum'
import { LayoutIndex } from '@/routers/constant'
import { IRouteObject } from '@/routers/interface'
import lazyLoad from '@/routers/utils/lazyLoad'

const test1Router: Array<IRouteObject> = [
	{
		element: <LayoutIndex />,
		children: [
			{
				path: EPath.HOME,
				element: lazyLoad(() => import('@/views/test1/Test1')),
				meta: {
					requiresAuth: true,
					title: '테스트1111111',
					key: 'test1'
				}
			}
		]
	}
]

export default test1Router
