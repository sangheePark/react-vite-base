import { useRef } from 'react'

interface IuseBottomSheetProps {
	onClose: () => void
}

const WINDOW_H = window.innerHeight

export const useBottomSheet = ({ onClose }: IuseBottomSheetProps) => {
	console.log('WINDOW_H', WINDOW_H)
	const ref = useRef<any>(null)

	const position = useRef({
		touchStart: {
			sheetY: 0,
			touchY: 0
		},
		touchMove: {
			direction: 'none'
		},
		sheet: {
			height: 0
		},
		isContentAreaTouched: false
	})

	const show = () => {
		ref.current && ref.current.style.setProperty('transform', `translateY(-${position.current.sheet.height}px)`)
	}

	const hide = () => {
		ref.current.style.setProperty('transform', `translateY(100px)`)
	}

	const close = () => {
		hide()
		onClose && onClose()
	}

	const init = () => {
		console.log('ref', ref)
		const rect = ref.current.getBoundingClientRect()
		const rectHeight = rect.height
		position.current.sheet.height = rectHeight
		ref.current.style.setProperty('bottom', `-${rectHeight}px`)
		ref.current.style.setProperty('height', `${rectHeight}px`)
	}

	const handleTouchStart = (e: any) => {
		const { touchStart, sheet } = position.current
		const rect = ref.current.getBoundingClientRect()

		touchStart.sheetY = rect.y
		touchStart.touchY = e.touches[0].clientY

		sheet.height = rect.height
	}
	const handleTouchMove = (e: any) => {
		e.preventDefault()

		const { touchStart, touchMove, sheet } = position.current
		const currentTouchY = e.touches[0].clientY
		const touchOffset = currentTouchY - touchStart.touchY

		if (0 < touchOffset) {
			touchMove.direction = 'down'
		}

		if (0 > touchOffset) {
			touchMove.direction = 'up'
		}

		let nextTranslateY = touchOffset - (WINDOW_H - touchStart.touchY)

		if (nextTranslateY <= -sheet.height) {
			nextTranslateY = -sheet.height
		}

		if (nextTranslateY >= -sheet.height * 0.6) {
			nextTranslateY = 0
		}

		ref.current.style.setProperty('transform', `translateY(${nextTranslateY}px)`)
	}
	const handleTouchEnd = () => {
		//초기화
		const { touchMove, sheet } = position.current
		position.current = {
			touchStart: {
				sheetY: 0,
				touchY: 0
			},
			touchMove: {
				direction: 'none'
			},
			sheet: {
				height: sheet.height
			},
			isContentAreaTouched: false
		}
		if (touchMove.direction === 'down') {
			close()
		}
	}

	const addEvent = () => {
		ref.current?.addEventListener('touchstart', handleTouchStart)
		ref.current?.addEventListener('touchmove', handleTouchMove)
		ref.current?.addEventListener('touchend', handleTouchEnd)
	}

	const removeEvent = () => {
		ref.current?.removeEventListener('touchstart', handleTouchStart)
		ref.current?.removeEventListener('touchmove', handleTouchMove)
		ref.current?.removeEventListener('touchend', handleTouchEnd)
	}

	return { ref, show, hide, init, addEvent, removeEvent }
}
export default useBottomSheet
