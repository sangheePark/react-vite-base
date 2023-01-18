import React from 'react'
import Input, { IInputProps } from '../atomic/Input'
import Label, { ILabelProps } from '../atomic/Label'

interface IInputNumberProps extends IInputProps {}
const InputNumber: React.FC<IInputNumberProps & ILabelProps> = ({ label, ...props }) => {
	return (
		<div>
			<Label label={label}></Label>
			<Input {...props}></Input>
		</div>
	)
}

export default InputNumber
