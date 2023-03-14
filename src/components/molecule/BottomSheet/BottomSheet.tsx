import Dim from '@/components/atomic/Common/Modal/Dim'
import ModalPortal from '@/components/atomic/Common/Modal/ModalPortal'
import { useEffect, useState } from 'react'
import Sheet from './Sheet'

interface IBottomSheetProps {
	open: boolean
	title: string
	onClose?: () => void
	onFold: boolean
}

const BottomSheet: React.FC<React.PropsWithChildren<IBottomSheetProps>> = ({ children, open = false, title = '제목을 입력하세요', onClose }) => {
	const [modalShow, setModalShow] = useState(false)
	const [showSheet, setShowSheet] = useState(false)

	const handleSheetOpen = () => {
		setShowSheet(true)
	}

	const handleSheetClose = () => {
		setShowSheet(false)
	}

	const handleModalOpen = () => {
		setModalShow(true)
		handleSheetOpen()
	}

	const handleModalClose = () => {
		handleSheetClose()
		setTimeout(() => {
			setModalShow(false)
		}, 250)
	}

	const cbSheetClose = () => {
		//handleModalClose();
		onClose && onClose()
	}

	useEffect(() => {
		if (open) {
			console.log('handleModalOpen', handleModalOpen)
			handleModalOpen()
		} else {
			handleModalClose()
		}
	}, [open])

	return (
		<>
			{modalShow && (
				<ModalPortal>
					<Dim
						isFlexCenter={false}
						onClick={() => {
							//handleModalClose();
							onClose && onClose()
						}}
					>
						<Sheet {...{ onFold: false, title: title, open: showSheet, onClose: cbSheetClose }}>{children}</Sheet>
					</Dim>
				</ModalPortal>
			)}
		</>
	)
}

export default BottomSheet
