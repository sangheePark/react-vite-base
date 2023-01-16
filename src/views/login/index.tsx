import { useAppStore } from '@/store'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.less'

const Login: React.FC = () => {
	const navigator = useNavigate()
	const { setToken } = useAppStore()

	const doLogin = useCallback(() => {
		setToken('abcd')
		navigator('/home')
	}, [])

	return (
		<div className='login-container'>
			sssssssssssssssssssssssssssssssssssssss ssssssssssssssssssssssssssssssss 로그인 화면
			<button onClick={doLogin}> home</button>
		</div>
	)
}

export default Login
