import React from 'react'
import S from './Fallback.style'

export interface IFallbackProps {
	error: Error
	onRetry?: () => void
	onBack?: () => void
}

const Fallback: React.FC<IFallbackProps> = ({ error, onRetry, onBack }) => {
	return (
		<S.Container>
			<S.MessageBox>{error.message}</S.MessageBox>
			{onRetry && <S.RetryButton onClick={onRetry}>다시시도</S.RetryButton>}
			{onBack && <S.BackButton onClick={onBack} />}
		</S.Container>
	)
}
export default Fallback
