import React from 'react'
// import style from './index.module.less'

interface IProps {
	label?: string
}

const Loading: React.FC<IProps> = ({ label = 'Loading...' }) => {
	return <div>{label}</div>
}

export default Loading
