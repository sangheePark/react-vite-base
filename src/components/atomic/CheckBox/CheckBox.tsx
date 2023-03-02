import { useMemo } from 'react'
import { IStyledCheckBoxProps, StyledCheckBox, StyledCheckBoxIcon } from './CheckBox.style'

export interface ICheckBoxProps extends Omit<IStyledCheckBoxProps, 'type' | 'style'> {}

const CheckBox: React.FC<ICheckBoxProps> = ({ onChange = () => {}, ...props }) => {
	const isChecked = useMemo(() => {
		return props.checked
	}, [props.checked])
	return (
		<>
			<StyledCheckBox {...props} type='checkbox' onChange={onChange} style={{ display: 'none' }} />
			{isChecked && <StyledCheckBoxIcon />}
		</>
	)
}

export default CheckBox
