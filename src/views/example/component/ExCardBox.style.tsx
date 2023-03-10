import { EExampleType } from '@/enums/example/exampleEnum'
import { ExampleModel } from '@/model/example/exampleModel'
import styled from '@emotion/styled'
export interface IStyledExCardProps {
	hasChild: boolean
}
export namespace StyledUExCard {
	export const Box = styled.div<IStyledExCardProps>(
		{
			display: 'flex'
		},
		props => ({
			color: props.haschild ? 'gray' : 'white'
		})
	)
	export const List = styled.ul({
		display: 'flex',
		flexDirection: 'column',
		flex: '1'
	})

	export const Row = styled.li<{ testProps: boolean }>`
		height: 40px;
		font-size: 25px;
		color: white;
		background: ${props => (props.testprops ? 'blue' : 'red')};
	`
}

interface ExCardBoxProps {
	onRowClick?: (item: ExampleModel.Response) => void
	data: ExampleModel.Response[]
}

export const ExCardBoxContainer: React.FC<ExCardBoxProps> = ({ data, onRowClick }) => {
	return (
		<StyledUExCard.Box hasChild={true}>
			<StyledUExCard.List>
				{data.map(c => (
					<StyledUExCard.Row
						key={c.id}
						testProps={c.type === EExampleType.COMPONENT}
						onClick={() => {
							onRowClick?.(c)
						}}
					>
						{c.type}
					</StyledUExCard.Row>
				))}
			</StyledUExCard.List>
		</StyledUExCard.Box>
	)
}
