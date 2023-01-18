export interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	//override
	label: string
}

const Input: React.FC<React.PropsWithChildren<InputProps>> = ({ children, label, ...props }) => {
	return (
		<input {...props}>
			{children}
			{label}
		</input>
	)
}
export default Input
