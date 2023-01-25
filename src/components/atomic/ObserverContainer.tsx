import React, { FC, PropsWithChildren } from 'react'

interface IProps extends Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'className' | 'style'> {}
export const ObserverContainer: FC<PropsWithChildren<IProps>> = ({ children, ...divProps }) => {
	return <div {...divProps}>{children}</div>
}
