// @see: https://prettier.io/
module.exports = {
	printWidth: 350,
	tabWidth: 2,
	useTabs: true,
	// 끝에 세미콜론 없음(true는 있고 false는 없음)
	semi: false,
	// 작은따옴표 사용(참 작은따옴표 및 큰따옴표, 거짓 큰따옴표)
	singleQuote: true,
	// 참조 객체의 속성을 변경하는 시점 선택적 값 "<as-needed|consistent|preserve>"
	quoteProps: 'as-needed',
	// 개체, 배열 대괄호 및 리터럴 "{ foo: bar }" 사이에 공백을 넣습니다.
	bracketSpacing: true,
	// 여러 줄에 가능한 경우 후행 쉼표를 인쇄합니다. (예를 들어 한 줄 배열은 쉼표로 끝나지 않습니다.) 선택적 값 "<none|es5|all>", 기본값 없음
	trailingComma: 'none',
	// JSX에서 큰따옴표 대신 작은따옴표 사용
	jsxSingleQuote: true,
	// (x) => {} 화살표 함수 매개변수가 하나만 있을 때 괄호를 사용할지 여부. avoid: 괄호 생략, 항상: 괄호 생략 안 함
	arrowParens: 'avoid',
	// 파일 상단에 이미 doclock이 있는 경우 이 옵션은 @format 태그로 주석 처리된 새 줄을 만듭니다.
	insertPragma: false,
	// 사용할 파서를 지정합니다. 파일 시작 부분에 @prettier를 쓸 필요가 없습니다.
	requirePragma: false,
	// 기본값. 일부 줄 바꿈에 민감한 렌더러(예: GitHub 주석)가 사용되므로 마크다운 텍스트 스타일에 따라 줄 바꿈
	proseWrap: 'preserve',
	// html에서 공백을 구분할지 여부 "css" - CSS 표시 속성의 기본값을 따릅니다. "strict" - 공백을 구분하는 것으로 간주하고 "ignore" - 공백을 구분하지 않는 것으로 간주합니다.
	htmlWhitespaceSensitivity: 'css',
	// 줄 바꿈은 선택적 값 "<auto|lf|crlf|cr>"로 끝나는 lf를 사용합니다.
	endOfLine: 'auto',
	// 이 두 옵션은 주어진 문자 오프셋(각각 포함 및 제외)에서 시작하고 끝나는 코드의 서식을 지정하는 데 사용할 수 있습니다.
	rangeStart: 0,
	rangeEnd: Infinity
}
