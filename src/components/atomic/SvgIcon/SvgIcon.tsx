import StyleSvgIcon from './SvgIcon.style'

interface IProps {
	name: string // 아이콘 이름 ==> 필수
	color?: string // 아이콘 색상 ==> 선택 사항
	prefix?: string // 아이콘 접두사 ==> 선택 사항(기본 "아이콘")
	style?: React.CSSProperties // 아이콘 스타일 ==> 선택사항
}

const SVGIcon: React.FC<IProps> = ({ name, prefix = 'icon', style }: IProps) => {
	const symbolId = `#${prefix}-${name}`
	return (
		<StyleSvgIcon aria-hidden='true' style={style}>
			<use href={symbolId} />
		</StyleSvgIcon>
	)
}

export default SVGIcon
