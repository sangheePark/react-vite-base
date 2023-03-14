import { createContext, useCallback, useMemo, useState } from 'react'
import Dialog from './Dialog'

interface IDialogProviderProps {}

export const DialogContext = createContext({
	show: () => {},
	hide: () => {},
	isShow: false
})

const initialDialogState = {
	variant: 'alert', //alert, confirm
	title: '',
	contents: '',
	leftButtonLabel: '',
	onLeftButtonClick: () => {},
	rightButtonLabel: '',
	onRightButtonClick: () => {}
}

const DialogProvider: React.FC<React.PropsWithChildren<IDialogProviderProps>> = ({ children }) => {
	const [isShow, setIsShow] = useState(false)
	const [dialog, setDialog] = useState({ ...initialDialogState })

	const show = useCallback(() => {
		setDialog({ ...initialDialogState })
		setIsShow(true)
	}, [setIsShow, setDialog])

	const hide = useCallback(() => {
		setDialog({ ...initialDialogState })
		setIsShow(false)
	}, [setIsShow, setDialog])

	const contextValue = useMemo(() => ({ show: show, hide: hide, isShow: isShow }), [show, hide, isShow])

	return (
		<>
			<DialogContext.Provider value={contextValue}>
				{children}
				<Dialog show={isShow} setShow={setIsShow} {...dialog} />
			</DialogContext.Provider>
		</>
	)
}

export default DialogProvider
