import { FC } from 'react'
import { IStyledButtonProps, StyledButton } from './Button.style'

export interface IButtonProps extends IStyledButtonProps {
	// onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
	// label: string
}

const Button: FC<IButtonProps> = props => {
	return <StyledButton {...props}>버튼</StyledButton>
}

export default Button
