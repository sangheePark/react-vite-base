import React, { FC, PropsWithChildren } from 'react'
import { IntersectionOptions } from 'react-intersection-observer'
import { InView } from 'react-intersection-observer/InView'

interface IProps
	extends IntersectionOptions,
		Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'className' | 'style'> {}

/**
 * @description Intersection observer component
 * @external https://www.npmjs.com/package/react-intersection-observer
 * @example https://velog.io/@meganatc7/Intersection-Observer-%EB%9E%80
 */
export const ObserverContainer: FC<PropsWithChildren<IProps>> = ({ children, ...props }) => {
	return (
		<InView
			{...props}
			// onChange={(inView: boolean, entry) => {
			// 	console.log('inView:', inView)
			// 	entry.boundingClientRect
			// }}
		>
			{children}
		</InView>
	)
}
