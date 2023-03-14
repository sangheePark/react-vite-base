import styled from '@emotion/styled'

export interface StyledDimWrapperProps {
	isFlexCenter: boolean
}

export namespace StyledDim {
	export const StyledDimOverlay = styled.div(
		{
			position: 'fixed', //상황에따라Fixed또는Absolute로변환하여사용컨텐츠의부분만Overlay일때Absolute사용Top: 0,
			Top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			width: '100%',
			height: '100%',
			overflow: 'hidden',
			zIndex: 500
		},
		props => {
			const { id } = props
			return { id }
		}
	)
	export const StyledDimCover = styled.div(
		{
			position: 'absolute',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			width: '100%',
			height: '100%',
			overflow: 'hidden',
			zIndex: 1,
			background: 'rgba(0, 0, 0, 0.4);' //.basic
		},
		props => {
			const { id } = props
			return { id }
		}
	)
	export const StyledDimWrapper = styled.div<StyledDimWrapperProps>(
		{
			position: 'absolute',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			width: '100%',
			height: '100%',
			background: 'rgba(0,0,0,0)',
			overflow: 'hidden',
			zIndex: 2,
			pointerEvents: 'none',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center'
		},
		props => ({ display: props.isFlexCenter ? 'flex' : '' })
	)
}
