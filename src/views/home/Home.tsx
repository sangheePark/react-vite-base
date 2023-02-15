import BasicPage from '@/components/template/BasicPage'
import { useTranslation } from 'react-i18next'
import UserCardBox from './component/UserCardBox'

const Home: React.FC = () => {
	const { t } = useTranslation(['title'])

	return (
		<BasicPage>
			{t('홈')} 화면
			<UserCardBox />
		</BasicPage>
	)
}

export default Home
