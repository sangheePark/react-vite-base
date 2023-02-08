import { EPath } from '@/enums/commonEnum'
import { LayoutIndex } from '@/routers/constant'
import { IRouteObject } from '@/routers/interface'
import lazyLoad from '@/routers/utils/lazyLoad'

const test2Router: Array<IRouteObject> = [
	{
		element: <LayoutIndex />,
		children: [
			{
				path: EPath.HOME,
				element: lazyLoad(() => import('@/views/test2/Test2')),
				meta: {
					requiresAuth: true,
					title: '테스트 222222',
					key: 'test2'
				}
			}
		]
	}
]

export default test2Router
