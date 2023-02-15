import styled from '@emotion/styled'
interface IStyledUserCardProps {
	hasChild: boolean
}
export namespace StyledUserCard {
	export const Box = styled.div<IStyledUserCardProps>(
		{
			display: 'flex'
		},
		props => ({
			color: props.haschild ? 'gray' : 'white'
		})
	)
	export const List = styled.ul({
		display: 'flex'
	})

	export const Row = styled.li<{ testProps: boolean }>`
		width: 120px;
		height: 40px;
		font-size: 25px;
		color: white;
		background: ${props => (props.testprops ? 'blue' : 'red')};
	`
}
