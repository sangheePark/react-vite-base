import styled from '@emotion/styled'
import { CSSProperties } from 'react'

export interface IStyledBasicPageProps {}

const defaultCSS: CSSProperties = {}
const defaultHeight = 42

export namespace StyledBasicPage {
	export const Container = styled.div`
		display: flex;
		flex-direction: column;
	`

	export const Top = styled.div(
		{
			height: `${defaultHeight}px`,
			lineHeight: `${defaultHeight}px`,
			margin: '5px 10px'
		},
		props => {
			const { id } = props
			return { id }
		}
	)
	export const Middle = styled.div<IStyledBasicPageProps>(
		{
			display: 'flex',
			flexDirection: 'row'
		},
		props => {
			const { id } = props
			return { id }
		}
	)
	export const Content = styled.div<IStyledBasicPageProps>(
		{
			display: 'flex',
			flex: '1 1'
		},
		props => {
			const { id } = props
			return { id }
		}
	)
	export const Left = styled.div<IStyledBasicPageProps>(
		{
			display: 'flex',
			flex: '1 1'
		},
		props => {
			const { id } = props
			return { id }
		}
	)

	export const Bottom = styled.div<IStyledBasicPageProps>(
		{
			...defaultCSS
		},
		props => {
			const { id } = props
			return { id }
		}
	)
}
