import Button from '@/components/atomic/Button/Button'
import Dim from '@/components/atomic/Common/Modal/Dim'
import ModalPortal from '@/components/atomic/Common/Modal/ModalPortal'
import { Dispatch, SetStateAction, useCallback, useMemo } from 'react'
import { StyledDialog as S } from './Dialog.style'

export interface IDialogProps {
	show: boolean
	setShow?: Dispatch<SetStateAction<boolean>>
	variant?: string //alert, confirm
	title?: string
	contents?: string
	leftButtonLabel?: string
	onLeftButtonClick?: () => void
	rightButtonLabel?: string
	onRightButtonClick?: () => void
}

const Dialog: React.FC<React.PropsWithChildren<IDialogProps>> = ({
	show = false,
	setShow = () => {},
	variant = 'alert', //alert, confirm
	title = '',
	contents = '',
	leftButtonLabel = '취소',
	onLeftButtonClick = () => {},
	rightButtonLabel = '확인',
	onRightButtonClick = () => {}
}) => {
	const useTitle = useMemo(() => (title ? true : false), [title])
	const useLeftButton = useMemo(() => variant === 'confirm', [variant])

	const cbLeftButtonClick = useCallback(() => {
		onLeftButtonClick && onLeftButtonClick()
		setShow(false)
	}, [onLeftButtonClick, setShow])

	const cbRightButtonClick = useCallback(() => {
		onRightButtonClick && onRightButtonClick()
		setShow(false)
	}, [onRightButtonClick, setShow])

	if (!show) return null

	return (
		<ModalPortal>
			<Dim onClick={() => {}}>
				<S.Container>
					{title && (
						<S.Header>
							<S.HeaderTitle>{title}</S.HeaderTitle>
						</S.Header>
					)}
					<S.Contents>
						<S.ContentsP useTitle={useTitle}>{contents}</S.ContentsP>
					</S.Contents>
					<S.Footer>
						{useLeftButton && <Button color='normal' label={leftButtonLabel} onClick={cbLeftButtonClick}></Button>}
						<Button color='primary' label={rightButtonLabel} onClick={cbRightButtonClick}></Button>
					</S.Footer>
				</S.Container>
			</Dim>
		</ModalPortal>
	)
}

export default Dialog
