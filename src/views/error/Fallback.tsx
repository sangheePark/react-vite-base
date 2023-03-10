import React from 'react'
import S from './Fallback.style'

export interface IFallbackProps {
	error?: Error
	resetBoundary?: () => void
	onBack?: () => void
}

const Fallback: React.FC<IFallbackProps> = ({ error, resetBoundary, onBack }) => {
	return (
		<S.Container>
			<S.MessageBox>{error?.message}</S.MessageBox>
			{resetBoundary && <S.RetryButton onClick={resetBoundary}>다시시도</S.RetryButton>}
			{onBack && <S.BackButton onClick={onBack} />}
		</S.Container>
	)
}
export default Fallback
