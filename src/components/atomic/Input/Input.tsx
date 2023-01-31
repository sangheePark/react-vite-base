import StyleInput from './Input.style'

export interface IInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	//override
}

const Input: React.FC<React.PropsWithChildren<IInputProps>> = ({ children, ...props }) => {
	return <StyleInput {...props}>{children}</StyleInput>
}
export default Input
