import BasicPage from '@/components/template/BasicPage'
import UserCardBox from './component/UserCardBox'

const Home: React.FC = () => {
	return (
		<BasicPage>
			홈 화면
			<UserCardBox />
		</BasicPage>
	)
}

export default Home
