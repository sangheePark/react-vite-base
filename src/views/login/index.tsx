import { EPath } from '@/enums/common'
import { useAppStore } from '@/store'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './index.module.less'

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
