import { useLocation, Navigate } from 'react-router-dom'
// import { AxiosCanceler } from "@/api/helper/axiosCancel";
import { searchRoute } from '@/utils/util'
import { rootRouter } from '@/routers/index'
import { useAppStore } from '@/store'
// import { HOME_URL } from "@/config/config";

// const axiosCanceler = new AxiosCanceler();

/**
 * @description 권한 체크
 * */
const AuthRouter = (props: { children: JSX.Element }) => {
	const { pathname } = useLocation()
	const { token } = useAppStore()
	const route = searchRoute(pathname, rootRouter)
	// axiosCanceler.removeAllPending();

	// * 현재 경로에 접근 권한이 필요한지 판단(허가 없이 직접 해제)
	if (!route.meta?.requiresAuth) return props.children

	// * 토큰이 있는지 확인
	console.log('token is ', token)
	if (!token) return <Navigate to='/login' replace />

	// * Dynamic Router(동적 라우팅, 백엔드에서 반환된 메뉴 데이터에 따라 생성된 1차원 배열)
	const dynamicRouter = rootRouter.map(m => m.path) //store.getState().auth.authRouter;
	// * Static Router(정적 라우팅, 홈페이지 주소를 구성해야 합니다. 그렇지 않으면 메뉴, 버튼 권한 등과 같은 데이터를 얻기 위해 홈페이지에 들어갈 수 없습니다), 데이터를 얻을 때 로드되며 모든 구성 홈페이지 주소는 양호합니다.
	const staticRouter = ['/', '/403']
	const routerList = dynamicRouter.concat(staticRouter)
	// * 액세스한 주소가 라우팅 테이블에 없으면 403 페이지로 리디렉션
	if (routerList.indexOf(pathname) == -1) return <Navigate to='/403' />

	// * 현재 계정에는 라우터로 돌아가 정상적으로 페이지에 액세스할 수 있는 권한이 있습니다.
	return props.children
}

export default AuthRouter
