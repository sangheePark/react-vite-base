import { Global, ThemeProvider } from '@emotion/react'
import React, { PropsWithChildren } from 'react'
import { GlobalStyle } from './GlobalStyle'
import StyleTheme from './theme'

/**
 *
 * @description emotion 글로벌 스타일 정의
 * @external https://www.howdy-mj.me/css/emotionjs-intro
 */
const GlobalStyleContainer: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<ThemeProvider theme={StyleTheme}>
			<Global styles={GlobalStyle} />
			{children}
		</ThemeProvider>
	)
}

export default GlobalStyleContainer
