import React from 'react'

type BasicPageProps = {}

const BasicPage: React.FC<React.PropsWithChildren<BasicPageProps>> = ({ children }) => {
	return <div>{children}</div>
}
export default BasicPage
