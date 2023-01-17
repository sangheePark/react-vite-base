import { EPath } from '@/enums/commonEnum'
import useAppStore from '@/store/appStore'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './Login.module.less'

const Login: React.FC = () => {
	const navigator = useNavigate()
	const { setToken } = useAppStore()

	const doLogin = useCallback(() => {
		setToken('abcd')
		navigator(EPath.HOME)
	}, [])

	return (
		<div className={style.container}>
			sssssssssssssssssssssssssssssssssssssss ssssssssssssssssssssssssssssssss 로그인 화면
			<button onClick={doLogin}> home</button>
		</div>
	)
}

export default Login
