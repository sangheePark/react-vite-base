import { useEffect } from 'react'
import { IFrameStatus, useIFrameParent } from 'react-iframe-helper'

export interface IExIframeProps {}
// const childDomain = 'https://pbojinov.github.io/iframe-communication/iframe.html'
const childDomain = 'https://codesandbox.io/s/stn39?file=/public/tms-webcore-iframe.html'

// https://codesandbox.io/s/stn39?file=/public/tms-webcore-iframe.html
// https://abangpa1ace.tistory.com/236
// https://github.com/lo-tp/react-iframe-helper/blob/main/src/index.ts
// https://github.com/pbojinov/react-iframe-comm/blob/master/src/IframeComm.js
const ExIframe: React.FC<IExIframeProps> = () => {
	const { ref, status, send, onLoad } = useIFrameParent({
		delay: 50,
		childDomain, //required
		listen: () => {
			console.log(`listen`)
		}
	})

	useEffect(() => {
		console.log(`status:`, status)
		if (status === IFrameStatus.LOADED) {
			send('xxxxxxx')
		}
	}, [status])
	return (
		<>
			<iframe
				ref={ref}
				onLoad={onLoad}
				title='forms'
				src={childDomain}
				style={{
					width: '100%',
					height: '400px'
				}}
				// allow='geolocation'
			/>
		</>
	)
}

export default ExIframe
