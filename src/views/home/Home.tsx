import BasicPage from '@/components/template/BasicPage'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const Home: React.FC = () => {
	const { t } = useTranslation(['title'])
	useEffect(() => {
		// throw new Error(`dddddd`)
	}, [])
	return <BasicPage>{t('홈')} 화면</BasicPage>
}

export default Home
