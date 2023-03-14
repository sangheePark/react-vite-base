import styled from '@emotion/styled'

export interface StyledDialogProps {}

export interface ContentsPProps {
	useTitle: boolean
}

export namespace StyledDialog {
	export const Container = styled.div<StyledDialogProps>(
		{
			position: 'relative',
			display: 'flex',
			flexDirection: 'column',
			margin: '40px',
			width: '100%',
			maxHeight: '70%',
			borderRadius: '8px',
			background: '#ffffff',
			overflow: 'hidden',
			pointerEvents: 'auto'
		},
		props => {
			const { id } = props
			return { id }
		}
	)

	export const Header = styled.div({ display: 'flex', padding: '8px 20px' }, props => {
		const { id } = props
		return { id }
	})

	export const HeaderTitle = styled.span(
		{
			fontSize: '1rem',
			fontWeight: 500
		},
		props => {
			const { id } = props
			return { id }
		}
	)

	export const Contents = styled.span(
		{
			width: '100%',
			height: '100%',
			overflowY: 'auto',
			whiteSpace: 'pre-line',
			paddingBottom: '3.5rem'
		},
		props => {
			const { id } = props
			return { id }
		}
	)

	export const ContentsP = styled.span<ContentsPProps>(
		{
			display: 'flex',
			padding: '8px 20px',
			background: '#ffffff'
		},
		props => ({
			marginTop: props.useTitle ? '0.75rem !important' : ''
		})
	)

	export const Footer = styled.span(
		{
			display: 'flex',
			padding: '8px 20px',
			background: '#ffffff',
			flexDirection: 'row',
			justifyContent: 'flex-end',
			marginBottom: '0.75rem !important'
		},
		props => {
			const { id } = props
			return { id }
		}
	)
}
