interface SvgProps {
	name: string //아이콘 이름 ==> 필수
	color?: string //아이콘 색상 ==> 선택 사항
	prefix?: string // 아이콘 접두사 ==> 선택 사항(기본 "아이콘")
	iconStyle?: { [key: string]: any } // 아이콘 스타일 ==> 선택사항
}

export default function SvgIcon(props: SvgProps) {
	const { name, prefix = 'icon', iconStyle = { width: '100px', height: '100px' } } = props
	const symbolId = `#${prefix}-${name}`
	return (
		<svg aria-hidden='true' style={iconStyle}>
			<use href={symbolId} />
		</svg>
	)
}
