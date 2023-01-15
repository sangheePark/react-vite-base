import { useNavigate } from 'react-router-dom'
import './index.less'

const NotAuth = () => {
	const navigate = useNavigate()
	return <div>403 화면</div>
}

export default NotAuth
