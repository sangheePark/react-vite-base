import { StyledDim as S } from './Dim.style'

interface IDimProps {
	isFlexCenter?: boolean
	onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const Dim: React.FC<React.PropsWithChildren<IDimProps>> = ({ children, onClick, isFlexCenter = true }) => {
	return (
		<S.StyledDimOverlay onClick={() => {}}>
			<S.StyledDimCover
				onClick={e => {
					onClick && onClick(e)
				}}
			></S.StyledDimCover>
			<S.StyledDimWrapper isFlexCenter={isFlexCenter}>{children}</S.StyledDimWrapper>
		</S.StyledDimOverlay>
	)
}

export default Dim
