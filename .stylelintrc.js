// @see: https://stylelint.io

module.exports = {
	extends: ['stylelint-config-standard', 'stylelint-config-prettier', 'stylelint-config-recess-order'],
	overrides: [
		{
			files: ['**/*.tsx', '**/*.ts'],
			customSyntax: '@stylelint/postcss-css-in-js'
		}
	],
	rules: {
		indentation: null, // 들여쓰기 공간 지정
		'no-descending-specificity': null, // 우선순위가 높은 선택자에 의해 무시되는 우선순위가 낮은 선택자를 허용하지 않음
		'function-url-quotes': 'always', // URL 대해 따옴표를 요구하거나 허용하지 않습니다.
		'string-quotes': 'double', // 작은따옴표 또는 큰따옴표를 사용할 문자열 지정
		'property-case': null, // 속성의 소문자 또는 대문자를 지정합니다(자동 수정 가능).
		'unit-case': 'lower', // 단위의 대소문자 지정 "lower (모두 소문자)"|"upper (모두 대문자)"
		'function-name-case': null, //함수 이름을 소문자 또는 대문자로 지정합니다(Autofixable)(Ⓢ).
		'selector-type-case': null, //유형 선택기(자동 수정 가능)(Ⓢ)에 대해 소문자 또는 대문자를 지정합니다.
		'value-keyword-case': null, //키워드 값을 소문자 또는 대문자로 지정합니다(자동 수정 가능)(Ⓢ).
		'color-hex-case': 'lower', // 16진수 색상의 대소문자를 지정합니다. "lower(모두 소문자)"|"upper(모두 대문자)"
		'color-hex-length': 'long', // 16진수 색상의 약자 또는 확장자를 지정 "short(약칭 16진수)"|"long(확장자 16진수)"
		'rule-empty-line-before': 'never', // 규칙 앞에 빈 줄을 요구하거나 허용하지 않음 "항상(규칙은 항상 빈 줄 앞에 와야 함)" | "never(규칙 앞에는 빈 줄이 없어야 함)"|"always-multi-line(여러 줄 규칙은 항상 빈 줄)"|"never-multi-line(여러 줄 규칙 앞에 빈 줄이 없어야 합니다.)
		'font-family-no-missing-generic-family-keyword': null, // 글꼴 패밀리 이름 목록에서 누락된 일반 글꼴 패밀리 키워드 억제
		'block-opening-brace-space-before': 'always', // 블록의 여는 중괄호 앞에 공백이 있거나 공백이 없어야 합니다. "|"항상 한 줄(한 줄 블록에서 여는 중괄호 앞에 항상 공백이 있어야 함)"|"한 줄 안 함(한 줄 블록에서 여는 중괄호 앞에 공백이 없어야 함) )"|"always-multi-line(여는 중괄호 앞에 항상 공백이 있어야 함)"|"never-multi-line(여는 중괄호 앞에 공백이 없어야 함 여러 줄 블록)"
		'property-no-unknown': null, // 알 수 없는 속성 금지(true는 허용되지 않음)
		'no-empty-source': null, // 빈 소스 코드 금지
		'declaration-block-trailing-semicolon': null, // 선언 블록에서 후행 세미콜론 문자열을 요구하거나 허용하지 않음: "항상(항상 후행 세미콜론이 있어야 함)" | "never(후행 세미콜론이 없어야 함)"
		'selector-class-pattern': null, // 필수 선택자 클래스 이름 형식
		'value-no-vendor-prefix': null, //값에 대해 공급업체 접두사를 허용하지 않습니다
		'at-rule-no-unknown': null,
		'no-duplicate-selectors': true, //중복 선택자(Ⓡ & Ⓢ)를 허용하지 않습니다.
		'selector-pseudo-class-no-unknown': [
			true,
			{
				ignorePseudoClasses: ['global', 'v-deep', 'deep']
			}
		]
	}
}
