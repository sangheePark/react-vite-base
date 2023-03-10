import { FC } from 'react'
import { IStyledButtonProps, StyledButton } from './Button.style'

export interface IButtonProps extends IStyledButtonProps {
	// onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
	label: string
}

const Button: FC<IButtonProps> = ({ label, ...props }) => {
	return <StyledButton {...props}>{label}</StyledButton>
}

export default Button
