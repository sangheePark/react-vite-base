interface IProps {
	name: string //아이콘 이름 ==> 필수
	color?: string //아이콘 색상 ==> 선택 사항
	prefix?: string // 아이콘 접두사 ==> 선택 사항(기본 "아이콘")
	style?: React.CSSProperties // 아이콘 스타일 ==> 선택사항
}

const SVGIcon: React.FC<IProps> = ({ name, prefix = 'icon', style = { width: '100px', height: '100px' } }: IProps) => {
	const symbolId = `#${prefix}-${name}`
	return (
		<svg aria-hidden='true' style={style}>
			<use href={symbolId} />
		</svg>
	)
}

export default SVGIcon
