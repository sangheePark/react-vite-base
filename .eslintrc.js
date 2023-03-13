// @see: http://eslint.org
module.exports = {
	settings: {
		react: {
			version: 'detect'
		}
	},
	root: true,
	env: {
		browser: true,
		node: true,
		es6: true
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		jsxPragma: 'React',
		ecmaFeatures: {
			jsx: true
		}
	},
	plugins: ['react', '@typescript-eslint', 'react-hooks', 'prettier', '@emotion'],
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		// 'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		'prettier',
		'plugin:storybook/recommended'
	],
	/*
	 * "off" or 0    ==>  규칙 끄기
	 * "warn" or 1   ==>  규칙을 경고로 설정(코드 실행에 영향을 주지 않음)
	 * "error" or 2  ==>  오류로 규칙(코드를 실행할 수 없으며 인터페이스에서 오류를 보고함)
	 */
	rules: {
		// eslint (http://eslint.cn/docs/rules)
		'no-var': 'error',
		// var 대신 let 또는 const를 사용해야 합니다.
		'no-multiple-empty-lines': [
			'error',
			{
				max: 1
			}
		],
		// 사용자 지정 TypeScript 모듈 및 네임스페이스의 사용은 금지됩니다.
		'@typescript-eslint/no-explicit-any': 'off',
		// 모든 유형의 사용 금지

		'no-use-before-define': 'error',
		// 함수/클래스/변수가 정의되기 전에 사용 금지
		'prefer-const': 'error',
		// 이 규칙은 let 키워드로 선언된 변수를 표시하기 위한 것이지만 초기 할당 후에 다시 할당되지 않으므로 const 사용이 필요합니다.
		'no-irregular-whitespace': 'off',
		// 불규칙한 공백은 금지됩니다.

		// typeScript (https://typescript-eslint.io/rules)
		'@typescript-eslint/no-unused-vars': 'error',
		// 미사용 변수 정의 금지
		// '@typescript-eslint/no-inferrable-types': 'off',
		// 쉽게 유추할 수 있는 명시적 형식은 불필요한 장황함을 추가할 수 있습니다.
		'@typescript-eslint/no-namespace': 'off',

		// '@typescript-eslint/ban-ts-ignore': 'off',
		// @ts-ignore 사용 금지
		'@typescript-eslint/ban-types': 'off',
		// 특정 유형의 사용 금지
		'@typescript-eslint/explicit-function-return-type': 'off',
		// 숫자, 문자열 또는 부울로 초기화된 변수 또는 매개 변수에는 명시적 유형 선언이 허용되지 않습니다.
		// '@typescript-eslint/no-var-requires': 'off',
		// import 문 안에는 require 문이 허용되지 않습니다.
		'@typescript-eslint/no-empty-function': 'off',
		// 빈 함수를 허용하지 않음
		'@typescript-eslint/no-use-before-define': 'error',
		// 정의되기 전에 변수를 사용하는 것을 금지합니다
		'@typescript-eslint/ban-ts-comment': 'off',
		// @ts-<지시문> 주석을 허용하지 않거나 지시문 뒤에 설명이 필요합니다.
		'@typescript-eslint/no-non-null-assertion': 'off',
		// 후위 연산자(!)가 포함된 null이 아닌 어설션은 허용되지 않습니다.
		// '@typescript-eslint/explicit-module-boundary-types': 'off',
		// 내보낸 함수 및 클래스의 공개 클래스 메서드에 대한 명시적 반환 및 매개변수 유형 필요
		'@typescript-eslint/no-empty-interface': 'off',
		// 빈 interface를 허용하지 않음

		//https://emotion.sh/docs/@emotion/eslint-plugin
		'@emotion/jsx-import': 'error',
		// '@emotion/no-vanilla': 'error',
		// '@emotion/import-from-emotion': 'error',
		'@emotion/styled-import': 'off',

		// react (https://github.com/jsx-eslint/eslint-plugin-react)
		'react-hooks/rules-of-hooks': 'off',
		'react-hooks/exhaustive-deps': 'off',
		'react/prop-types': 'off'
	}
}
