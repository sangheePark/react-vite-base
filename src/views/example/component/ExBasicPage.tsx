import Box from '@/components/atomic/Box/Box'
import List, { ListModel } from '@/components/molecule/List.tsx/List'
import BasicPage, { IBasicPageProps } from '@/components/template/BasicPage'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export interface IExBasicPageProps {
	menus?: ListModel[]
}

/**
 * @description 예제 화면 base
 */
const ExBasicPage: React.FC<React.PropsWithChildren<IExBasicPageProps & IBasicPageProps>> = ({ children, menus = [], title }) => {
	const navigate = useNavigate()
	const onClickHandler = useCallback((row: ListModel) => {
		navigate(`${row.code}`)
	}, [])

	const onClickBackHandler = useCallback(() => {
		navigate(-1)
	}, [])

	return (
		<BasicPage title={title} onClickBackButton={onClickBackHandler}>
			<Box flex={'1'} flexDirection={'column'}>
				<List data={menus.map(m => m)} onRowClick={onClickHandler} />
				{children}
			</Box>
		</BasicPage>
	)
}

export default ExBasicPage
