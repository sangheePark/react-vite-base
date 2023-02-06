import styled from '@emotion/styled'
import style from './Fallback.module.css'

namespace StyleFallback {
	export const Container = styled('div')`
		${style.container}
	`
	export const MessageBox = styled.div``
	export const RetryButton = styled.button``
	export const BackButton = styled.button``
}

export default StyleFallback
