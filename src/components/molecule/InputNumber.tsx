import React from 'react'
import Input, { IInputProps } from '../atomic/Input/Input'
import Label, { ILabelProps } from '../atomic/Label'

type IInputNumberProps = IInputProps
const InputNumber: React.FC<IInputNumberProps & ILabelProps> = ({ label, ...props }) => {
	return (
		<div>
			<Label label={label} />
			<Input {...props} />
		</div>
	)
}

export default InputNumber
