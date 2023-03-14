import styled from '@emotion/styled'

export interface SSheetProps {}

export namespace SSheet {
	export const Container = styled.div({
		display: 'flex',
		flexDirection: 'column',
		position: 'fixed',
		left: 0,
		right: 0,
		bottom: 0,
		height: 'auto',
		maxHeight: '100vh',
		borderTopLeftRadius: '0.75rem',
		borderTopRightRadius: '0.75rem',
		boxShadow: '0px 0px 2px rgba(0,0,0,0.22), 0px 7px 0px rgba(0,0,0,0.12)',
		background: '#ffffff',
		overflow: 'hidden',
		transition: 'transform 150ms ease-out',
		pointerEvents: 'auto',
		minHeight: '100px'
	})

	export const HandleWrapper = styled.div({
		display: 'flex',
		justifyContent: 'center',
		paddingTop: '12px',
		width: '100%',
		height: '18px',
		boxSizing: 'border-box',
		cursor: 'pointer'
	})

	export const HeaderButtonContainer = styled.div({
		display: 'flex',
		height: '44px',
		background: '#ffffff',
		alignItems: 'center',
		padding: '8px 12px'
	})

	export const HeaderTitleWrapper = styled.div({
		flex: 1,
		padding: '8px 12px'
	})

	export const ContentsContainer = styled.div({
		width: '100%',
		height: '100%',
		overflowY: 'auto',
		whiteSpace: 'pre-line',
		paddingLeft: '20px',
		paddingRight: '20px'
	})

	export const BottomContainer = styled.div({
		padding: '20px',
		paddingBottom: '20px'
	})
}
