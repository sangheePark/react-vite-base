import Button from '@/components/atomic/Button/Button'
import SVGIcon from '@/components/atomic/SvgIcon/SvgIcon'
import { useEffect } from 'react'
import { SSheet as S } from './Sheet.style'
import useBottomSheet from './useBottomSheet'

interface ISheetProps {
	open: boolean
	title: string
	onClose: () => void
	onFold: boolean
}

const Sheet: React.FC<React.PropsWithChildren<ISheetProps>> = ({ open = false, title = '제목을 입력하세요', onClose, onFold, children }) => {
	const sheet = useBottomSheet({ onClose })

	useEffect(() => {
		sheet.init()
		sheet.addEvent()
		return () => {
			sheet.removeEvent()
		}
	}, [])

	useEffect(() => {
		if (open) {
			sheet.show()
		} else {
			sheet.hide()
		}
	}, [open])

	return (
		<S.Container ref={sheet.ref}>
			<S.HandleWrapper>
				<SVGIcon name='icon1'></SVGIcon>
			</S.HandleWrapper>
			<S.Container>
				{onFold && (
					<S.HeaderButtonContainer>
						<Button onClick={() => {}} label='' color='normal'></Button>
					</S.HeaderButtonContainer>
				)}
				<S.HeaderTitleWrapper>{title}</S.HeaderTitleWrapper>
				{false && onClose && (
					<S.HeaderButtonContainer>
						<Button onClick={onClose} color='normal' label='닫기'></Button>
					</S.HeaderButtonContainer>
				)}
				<S.ContentsContainer>{children}</S.ContentsContainer>
			</S.Container>
		</S.Container>
	)
}

export default Sheet
