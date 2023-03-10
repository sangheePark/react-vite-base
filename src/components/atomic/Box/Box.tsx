import { IStyledBoxProps, StyledBox } from './Box.style'

export interface IBoxProps {}

const Box: React.FC<React.PropsWithChildren<IBoxProps & IStyledBoxProps>> = ({ children, ...props }) => {
	return <StyledBox {...props}>{children}</StyledBox>
}

export default Box
