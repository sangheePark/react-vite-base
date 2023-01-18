import React from 'react'

export interface ILabelProps {
	label: string
}

const Label: React.FC<ILabelProps> = ({ label }) => {
	return <div>{label}</div>
}
export default Label
