import styled from '@emotion/styled'
import { CSSProperties } from 'react'

export interface StyledTagProps {
	size?: 'sm' | 'md' | 'lg'
	color?: 'primary' | 'secondary'
	isMore?: boolean
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const DefaultStyle: CSSProperties = {
	backgroundColor: '#ffffff',
	border: '1px solid',
	borderRadius: '20px',
	fontSize: '12px',
	letterSpacing: '1px',
	padding: '4px 10px',
	display: 'inline-block',
	lineHeight: '18px',
	margin: '0 2px',
	overflow: 'hidden'
}
const MoreStyle: CSSProperties = {
	backgroundPosition: '-280px -70px',
	border: 'none',
	height: '28px',
	padding: '0',
	width: '35px',
	backgroundImage: `url('src/assets/icons/exButton.png')`,
	backgroundRepeat: 'no-repeat',
	backgroundSize: '400px 300px',
	textIndent: '-9999px'
}

export const StyledTag = styled.button<StyledTagProps>(
	{
		...DefaultStyle
	},
	props => {
		const { theme, isMore, disabled, color = 'primary' } = props
		const optionStyle = isMore ? MoreStyle : {}
		return {
			backgroundColor: disabled ? 'gray' : DefaultStyle.backgroundColor,
			borderColor: theme.colors[color],
			...optionStyle
		}
	}
)
