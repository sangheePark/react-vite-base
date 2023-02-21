// storybook에 emotion 테마 및 글로벌 스타일 인식 위해서 전역 설정
// https://medium.com/litslink/storybook-decorators-and-context-in-examples-daa4edadaf1a
import { DecoratorFn } from '@storybook/react'
import React from 'react'
import GlobalStyleContainer from '../src/styles/GlobalStyleContainer'
/**
 * Default config (no changes)
 */
export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	}
}

export const decorators: DecoratorFn[] = [
	Story => (
		<>
			<GlobalStyleContainer>
				<Story />
			</GlobalStyleContainer>
		</>
	)
]
