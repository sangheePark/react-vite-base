import StyleInput from './Input.style'

export type IInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<React.PropsWithChildren<IInputProps>> = ({ children, ...props }) => {
	return <StyleInput {...props}>{children}</StyleInput>
}
export default Input
