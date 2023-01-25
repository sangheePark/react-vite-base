import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import style from './Home.module.less'
const Home: React.FC = () => {
	const { t } = useTranslation(['title'])
	useEffect(() => {}, [])
	return <div className={style.container}>{t('title:홈')} 화면</div>
}

export default Home
