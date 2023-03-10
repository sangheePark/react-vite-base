import { StyleFallback as S } from './ErrorFallback.style'

export interface IErrorFallbackProps {
	error?: Error
	resetBoundary?: () => void
	onBack?: () => void
}

export function ErrorFallback({ error, resetBoundary }: IErrorFallbackProps) {
	return (
		<S.Container>
			<S.MessageBox>{error?.message}</S.MessageBox>
			{resetBoundary && <S.RetryButton onClick={resetBoundary}>다시시도</S.RetryButton>}
			{/* {onBack && <StyleFallback.BackButton onClick={onBack} />} */}
		</S.Container>
	)
}
