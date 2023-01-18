// @see: https://cz-git.qbenben.com/zh/guide
/** @type {import('cz-git').UserConfig} */

module.exports = {
	ignores: [commit => commit.includes('init')],
	extends: ['@commitlint/config-conventional'],
	rules: {
		// @see: https://commitlint.js.org/#/reference-rules
		'body-leading-blank': [2, 'always'],
		'footer-leading-blank': [1, 'always'],
		'header-max-length': [2, 'always', 108],
		'subject-empty': [2, 'never'],
		'type-empty': [2, 'never'],
		'subject-case': [0],
		'type-enum': [2, 'always', ['wip', 'feat', 'test', 'fix', 'revert', 'config', 'style', 'refactor', 'perf']]
	},
	prompt: {
		messages: {
			type: '커밋 유형을 선택해주세요.',
			scope: '변경 영향 범위를 선택해주세요.',
			subject: '제목을 짧고 명시적으로 입력해주세요.:\n',
			body: '(선택사항) 변경에 대한 자세한 설명을 제공하십시오. 줄바꿈 = "|":\n',
			footerPrefixsSelect: '(선택사항) 연관 ISSUES 상태를 선택해주세요.',
			footer: '연관 ISSUES 입력해주세요. E.g.: #31, #34:\n',
			confirmCommit: '이대로 커밋 하시겠습니까?'
		},
		types: [
			{
				value: 'wip',
				name: '🔨  작업중...',
				emoji: '🔨'
			},
			{
				value: 'feat',
				name: '🚀  새로운 기능 추가',
				emoji: '🚀'
			},
			{
				value: 'test',
				name: '✅  테스트 코드',
				emoji: '✅'
			},
			{
				value: 'fix',
				name: '🧩  버그 수정',
				emoji: '🧩'
			},
			{
				value: 'revert',
				name: '⏪️  이번 버전 되돌리기',
				emoji: '⏪️'
			},
			{
				value: 'config',
				name: '📚  프로젝트 설정',
				emoji: '📚'
			},
			{
				value: 'style',
				name: '🎨  코드 포맷팅, 세미',
				emoji: '🎨'
			},
			{
				value: 'refactor',
				name: '♻️  기존 코드에 대한 리펙토링',
				emoji: '♻️'
			},
			{
				value: 'perf',
				name: '⚡️  성능 이슈 대응',
				emoji: '⚡️'
			}
		],
		useEmoji: true,
		themeColorCode: '',
		scopes: [
			{
				name: '공통',
				value: 'common'
			},
			{
				name: '업무',
				value: 'biz'
			},
			{
				name: '콤포넌트',
				value: 'component'
			}
		],
		allowCustomScopes: false,
		allowEmptyScopes: true,
		emptyScopesAlias: 'skip',
		upperCaseSubject: false,
		allowBreakingChanges: [],
		breaklineNumber: 100,
		breaklineChar: '|',
		skipQuestions: [],
		issuePrefixs: [{ value: 'closed', name: '완료:  issues 종료.' }],
		allowCustomIssuePrefix: false,
		allowEmptyIssuePrefix: true,
		confirmColorize: true,
		maxHeaderLength: Infinity,
		maxSubjectLength: Infinity,
		minSubjectLength: 0,
		scopeOverrides: undefined,
		defaultBody: '',
		defaultIssues: '',
		defaultScope: '',
		defaultSubject: ''
	}
}
