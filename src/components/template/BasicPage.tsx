import React from 'react'
import Button from '../atomic/Button/Button'
import { StyledBasicPage as S } from './BasicPage.style'

export interface IBasicPageProps {
	title?: string
	onClickBackButton?: () => void
}

const BasicPage: React.FC<React.PropsWithChildren<IBasicPageProps>> = ({ title, onClickBackButton, children }) => {
	return (
		<S.Container>
			<S.Top>
				{onClickBackButton && <Button label='뒤로' onClick={onClickBackButton}></Button>}
				{title}
			</S.Top>
			<S.Middle>
				{/* <S.Left></S.Left> */}
				<S.Content>{children}</S.Content>
			</S.Middle>
			<S.Bottom></S.Bottom>
		</S.Container>
	)
}
export default BasicPage
