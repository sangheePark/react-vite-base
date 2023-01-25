import React, { forwardRef, useCallback, useImperativeHandle, useRef } from 'react'

export interface ScrollContainerRef {
	goBottom: () => void
}
interface IProps {
	onTop: () => void
}
const Container = (
	{ ...divProps }: IProps & Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'id' | 'className' | 'style'>,
	ref: React.Ref<ScrollContainerRef>
) => {
	const containerRef = useRef<HTMLDivElement>(null!)

	const onScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
		console.log(`event:` + e.target)
	}, [])
	const goBottom = () => {}
	useImperativeHandle(ref, () => ({
		goBottom
	}))
	return <div {...divProps} ref={containerRef} onScroll={onScroll}></div>
}

export const ScrollContainer = forwardRef(Container)
