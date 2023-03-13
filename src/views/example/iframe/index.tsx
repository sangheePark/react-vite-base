import Box from '@/components/atomic/Box/Box'
import Button from '@/components/atomic/Button/Button'
import Input from '@/components/atomic/Input/Input'
import IframeContainer from '@/components/organism/IframeContainer/IframeContainer'
import { useCallback, useState } from 'react'
import ExBasicPage from '../component/ExBasicPage'

export interface IExIframeProps {}
/**
 * iframe 예제(현제는 스트링 type 통신)
 * @returns
 */
const ExIframe: React.FC<IExIframeProps> = () => {
	const attributes = {
		src: 'https://pbojinov.github.io/iframe-communication/iframe.html',
		width: '100%',
		height: '200px'
	}

	const [messageData, setMessageData] = useState<string>('hello iframe')
	const [text, setText] = useState<string>('')
	const [receiveMessage, setReceiveMessage] = useState<string>('')

	const onReceiveMessage = (e: MessageEvent<number>) => {
		const message = e.data.toString()
		setReceiveMessage(message)
	}

	const onLoad = () => {}

	const onClickHandler = useCallback(() => {
		console.log(`text: `, text)
		setMessageData(text)
	}, [text])

	return (
		<ExBasicPage title='iframe 예제'>
			<Box flexDirection='row'>
				<Input value={text} onChange={e => setText(e.target.value)}></Input>
				<Button label='메세지 보내기' onClick={onClickHandler} />
			</Box>

			<IframeContainer message={messageData} {...attributes} onReceive={onReceiveMessage} onLoad={onLoad} />
			<Box>받은 메세지: {receiveMessage}</Box>
		</ExBasicPage>
	)
}

export default ExIframe
