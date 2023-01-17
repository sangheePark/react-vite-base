import React from 'react'
import './index.less'

interface IProps {
	label?: string
}

const Loading: React.FC<IProps> = ({ label = 'Loading...' }) => {
	return <div>{label}</div>
}

export default Loading
