import { ceil, floor } from 'lodash-es'
import React, { forwardRef, ReactElement, ReactNode, useCallback, useImperativeHandle, useRef } from 'react'
import { StyledScrollContainer } from './ScrollContainer.style'

export interface ScrollContainerRef {
	goBottom: () => void
}
interface IProps {
	children: ((props: { scrollY: number }) => ReactElement) | ReactNode
	onScroll: (element: HTMLElement) => void
	onScrollEnd: (element: HTMLElement) => void
	onBottom: (element: HTMLElement, isFirst: boolean) => void
	onTop: (element: HTMLElement, isFirst: boolean) => void
}

/**
 * @description 특정 모바일 소수점으로 인한 오차 계산.
 * @param scrollTop
 * @param scrollHeight
 * @param clientHeight
 * @returns
 */
const inRange = (scrollTop: number, scrollHeight: number, clientHeight: number) => {
	const floorTop = scrollHeight - floor(scrollTop)
	const floorMin = floorTop - 1
	const floorMax = floorTop + 1
	const ceilTop = scrollHeight - ceil(scrollTop)
	const ceilMin = ceilTop - 1
	const ceilMax = ceilTop + 1
	return (clientHeight >= floorMin && clientHeight <= floorMax) || (clientHeight >= ceilMin && clientHeight <= ceilMax)
}

function Container(
	{
		onTop,
		onBottom,
		onScroll,
		onScrollEnd,
		children,
		...props
	}: IProps & Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'id' | 'className' | 'style'>,
	ref: React.Ref<ScrollContainerRef>
) {
	const timerRef = useRef<NodeJS.Timeout>()
	const containerRef = useRef<HTMLDivElement>(null!)
	const touchTopCount = useRef<number>(0)
	const touchBottomCount = useRef<number>(0)

	const handleEndScroll = (e: HTMLDivElement) => {
		console.log('onEndScroll')
		onScrollEnd(e)
	}
	const debounceScroll = useCallback(async (e: HTMLDivElement) => {
		timerRef.current && clearTimeout(timerRef.current)
		timerRef.current = setTimeout(() => handleEndScroll(e), 200)
	}, [])

	const handleOnScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
		const element = e.currentTarget as HTMLDivElement

		console.log(`event:${e.target}`)
		// 스크롤 탑 이벤트
		if (element.scrollTop === 0) {
			touchTopCount.current++
			console.log('onTop:', touchTopCount.current)
			onTop && onTop(element, touchTopCount.current === 1)
		}

		// 스크롤 버텀 이벤트
		if (inRange(element.scrollTop, element.scrollHeight, element.clientHeight)) {
			touchBottomCount.current++
			console.log('onBottom:', touchBottomCount.current)
			onBottom(element, touchBottomCount.current === 1)
		}
		onScroll(element)
		debounceScroll(element)
	}, [])
	const goBottom = () => {}
	useImperativeHandle(ref, () => ({
		goBottom
	}))

	return (
		<StyledScrollContainer {...props} ref={containerRef} onScroll={handleOnScroll}>
			{typeof children === 'function' ? children({ scrollY }) : children}
		</StyledScrollContainer>
	)
}

/**
 * @description Scroll event container
 */
export const ScrollContainer = forwardRef(Container)
