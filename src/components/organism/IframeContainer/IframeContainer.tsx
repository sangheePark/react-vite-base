import { IframeHTMLAttributes, useCallback, useEffect, useRef } from 'react'

export interface IIframeContainerProps extends IframeHTMLAttributes<HTMLIFrameElement> {
	onReceive?: (e: MessageEvent) => void
	onLoad?: () => void
	message: string
}
// https://developer.mozilla.org/ko/docs/Web/API/Window/postMessage
const IframeContainer: React.FC<IIframeContainerProps> = ({ src, message, onLoad, onReceive, ...props }) => {
	const ref = useRef<HTMLIFrameElement>(null)

	const receiveMessage = useCallback(
		(event: MessageEvent) => {
			// 반환 데이터 포멧 맞워야함. 현제는 string...
			const { data } = event
			// filter 처리 필요 origin or source로 처리 필요.
			// const hasSource = Object.keys(event).includes('source')

			if (typeof data !== 'object') {
				console.log(`receiveMessage : event:`, JSON.stringify(data))
				onReceive?.(event)
			}
		},
		[src, onReceive]
	)

	useEffect(() => {
		window.addEventListener('message', receiveMessage, false)
		return () => {
			window.removeEventListener('message', receiveMessage, false)
		}
	}, [receiveMessage])

	const load = useCallback(() => {
		console.log(`onLoad: `)
		onLoad?.()
	}, [onLoad])

	useEffect(() => {
		ref.current?.addEventListener('load', load)
		return () => {
			window.removeEventListener('load', load)
		}
	}, [])

	useEffect(() => {
		message && ref?.current?.contentWindow?.postMessage(message, '*') //|| '*'
	}, [message])

	return <iframe ref={ref} src={src} {...props} />
}

export default IframeContainer
