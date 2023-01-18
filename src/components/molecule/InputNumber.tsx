import React from 'react'
import Input, { InputProps } from '../atomic/Input'

interface InputNumberProps extends InputProps {}
const InputNumber: React.FC<InputNumberProps> = () => {
	return <Input label={'dd'}></Input>
}
export default InputNumber
