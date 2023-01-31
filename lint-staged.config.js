module.exports = {
	'*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
	'*.{css,tsx}': ['stylelint --fix', 'prettier --write'],
	'*.md': ['prettier --write']
}
