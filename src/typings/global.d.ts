// * Vite
declare type Recordable<T = any> = Record<string, T>

declare global {}

declare interface ViteEnv {
	VITE_API_URL: string
	VITE_PORT: number
	VITE_OPEN: boolean
	VITE_GLOB_APP_TITLE: string
	VITE_DROP_CONSOLE: boolean
	VITE_PROXY_URL: string
	VITE_BUILD_GZIP: boolean
	VITE_REPORT: boolean
}

interface ImportMeta {
	readonly env: ViteEnv
}

IframeComm.propTypes = {
	/*
        Iframe Attributes
        https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#Attributes
        React Supported Attributes
        https://facebook.github.io/react/docs/dom-elements.html#all-supported-html-attributes
        Note: attributes are camelCase, not all lowercase as usually defined.
    */
	attributes: PropTypes.shape({
		allowFullScreen: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
		frameBorder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		name: PropTypes.string,
		scrolling: PropTypes.string,
		// https://www.html5rocks.com/en/tutorials/security/sandboxed-iframes/
		sandbox: PropTypes.string,
		srcDoc: PropTypes.string,
		src: PropTypes.string.isRequired,
		width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
	}),

	// Callback function called when iFrame sends the parent window a message.
	handleReceiveMessage: PropTypes.func,

	/*    
        Callback function called when iframe loads. 
        We're simply listening to the iframe's `window.onload`.
        To ensure communication code in your iframe is totally loaded,
        you can implement a syn-ack TCP-like handshake using `postMessageData` and `handleReceiveMessage`.
    */
	handleReady: PropTypes.func,

	/*
        You can pass it anything you want, we'll serialize to a string
        preferablly use a simple string message or an object.
        If you use an object, you need to follow the same naming convention
        in the iframe so you can parse it accordingly.
     */
	postMessageData: PropTypes.any.isRequired,

	/*
        Enable use of the browser's built-in structured clone algorithm for serialization
        by settings this to `false`. 
        Default is `true`, using our built in logic for serializing everything to a string.
    */
	serializeMessage: PropTypes.bool,

	/*
        Always provide a specific targetOrigin, not *, if you know where the other window's document should be located. Failing to provide a specific target discloses the data you send to any interested malicious site.
     */
	targetOrigin: PropTypes.string
}

declare module 'react-iframe-comm' {
	import React from 'react'

	export interface IframeCommProps {
		attributes: {
			allowFullScreen?: string | boolean
			// frameBorder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
			// name: PropTypes.string,
			// scrolling: PropTypes.string,
			// // https://www.html5rocks.com/en/tutorials/security/sandboxed-iframes/
			// sandbox: PropTypes.string,
			// srcDoc: PropTypes.string,
			src: string
			width?: string | number
			height?: string | number
		}

		// Callback function called when iFrame sends the parent window a message.
		handleReceiveMessage?: (e: MessageEvent) => void

		/*    
			Callback function called when iframe loads. 
			We're simply listening to the iframe's `window.onload`.
			To ensure communication code in your iframe is totally loaded,
			you can implement a syn-ack TCP-like handshake using `postMessageData` and `handleReceiveMessage`.
		*/
		handleReady?: () => void

		/*
			You can pass it anything you want, we'll serialize to a string
			preferablly use a simple string message or an object.
			If you use an object, you need to follow the same naming convention
			in the iframe so you can parse it accordingly.
		 */
		postMessageData: string

		/*
			Enable use of the browser's built-in structured clone algorithm for serialization
			by settings this to `false`. 
			Default is `true`, using our built in logic for serializing everything to a string.
		*/
		serializeMessage?: boolean

		/*
			Always provide a specific targetOrigin, not *, if you know where the other window's document should be located. Failing to provide a specific target discloses the data you send to any interested malicious site.
		 */
		targetOrigin?: string
	}

	declare class IframeHelper extends React.Component<IframeCommProps, any> {}
	export default IframeHelper
}

// * Dropdown MenuInfo
declare interface MenuInfo {
	key: string
	keyPath: string[]
	/** @deprecated This will not support in future. You should avoid to use this */
	item: React.ReactInstance
	domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>
}
