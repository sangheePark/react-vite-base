export interface IInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	//override
}

const Input: React.FC<React.PropsWithChildren<IInputProps>> = ({ children, ...props }) => {
	return <input {...props}>{children}</input>
}
export default Input
