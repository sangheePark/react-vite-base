import { EPath } from '@/enums/commonEnum'
import { IRouteObject } from '@/routers/interface'
import lazyLoad from '@/routers/utils/lazyLoad'

const exampleRouter: Array<IRouteObject> = [
	{
		path: EPath.EXAMPLE,
		meta: {
			requiresAuth: true,
			title: '예제',
			key: 'example'
		},
		children: [
			{
				//예제 메인
				path: '',
				element: lazyLoad(() => import('@/views/example/Example'))
			},
			{
				// 리액트 쿼리
				path: 'reactQuery/*',
				element: lazyLoad(() => import('@/views/example/reactQuery')),
				meta: {
					requiresAuth: false,
					title: 'react-query 예제 화면',
					key: 'example.reactQuery'
				}
			},
			{
				// router
				path: 'router/*',
				element: lazyLoad(() => import('@/views/example/router')),
				meta: {
					requiresAuth: false,
					title: 'router 예제 화면',
					key: 'example.router'
				}
			},
			{
				// router
				path: 'iframe/*',
				element: lazyLoad(() => import('@/views/example/iframe')),
				meta: {
					requiresAuth: false,
					title: 'iframe 예제 화면',
					key: 'example.iframe'
				}
			}
		]
	}
]

export default exampleRouter
