import styled from '@emotion/styled'
import { CSSProperties } from 'react'

export interface IStyledBoxProps
	extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
		Pick<CSSProperties, 'flex' | 'flexDirection' | 'justifyContent'> {}

export const StyledBox = styled.div<IStyledBoxProps>`
	display: flex;
	flex: ${props => props.flex};
	flex-direction: ${props => props.flexDirection};
	justify-content: ${props => props.justifyContent};
`
