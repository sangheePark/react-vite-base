import ReactDom from 'react-dom'

const rootElement = document.getElementById('modal') as HTMLElement

const ModalPortal: React.FC<React.PropsWithChildren> = ({ children }) => {
	console.log('rootElement', rootElement)
	return ReactDom.createPortal(<>{children}</>, rootElement)
}

export default ModalPortal
