const path = require('path')
// const react = require('@vitejs/plugin-react')
const { loadConfigFromFile, mergeConfig } = require('vite')

module.exports = {
	stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
	// docs: {
	// 	docsPage: 'automatic'
	// },
	typescript: {
		// fork-ts-checker-webpack-plugin 사용 여부 옵션 (default : false)
		check: false,
		// 위에서 fork-ts-checker-webpack-plugin을 사용한다 설정시, 그에 전달할 옵션들
		checkOptions: {},
		// 프로세서가 실행시킬 docgen의 종류 ('react-docgen-typescript', 'react-docgen', false)
		reactDocgen: 'react-docgen-typescript',
		// 위에서 react-docgen-typescript를 사용한다 설정시, 전달해줄 옵션들
		reactDocgenTypescriptOptions: {
			compilerOptions: {
				allowSyntheticDefaultImports: false,
				esModuleInterop: false
			},
			shouldExtractValuesFromUnion: true,
			shouldExtractLiteralValuesFromEnum: true, // makes union prop types like variant and size appear as select controls
			shouldRemoveUndefinedFromOptional: true, // makes string and boolean types that can be undefined appear as inputs and switches
			savePropValueAsString: true,
			tsconfigPath: '../tsconfig.json',
			skipPropsWithoutDoc: false,
			skipChildrenPropWithoutDoc: false,
			propFilter: prop => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true)
			// propFilter: (prop) => {
			// 	return prop.parent
			// 		?  prop.parent.name !== 'DOMAttributes' && prop.parent.name !== 'HTMLAttributes' && prop.parent.name !== 'AriaAttributes'
			// 		: true;
			//   },
		}
	},
	framework: '@storybook/react',
	core: {
		builder: '@storybook/builder-vite'
	},
	features: {
		storyStoreV7: true
	},
	async viteFinal(config, { configType }) {
		const { config: userConfig } = await loadConfigFromFile(path.resolve(__dirname, '../vite.config.ts'))

		return mergeConfig(config, {
			...userConfig,
			// manually specify plugins to avoid conflict
			plugins: [
				// react({
				// 	exclude: [/\.stories\.(t|j)sx?$/, /node_modules/],
				// 	jsxImportSource: '@emotion/react',
				// 	babel: {
				// 		plugins: ['@emotion/babel-plugin']
				// 	}
				// })
			]
		})
	}
	// viteFinal: async (config, { configType }) => {
	// 	config.resolve.alias = {
	// 		...config.resolve.alias,
	// 		'@': path.resolve(__dirname, '../src'),
	// 		'@emotion/core': path.resolve('node_modules/@emotion/react'),
	// 		'@emotion/styled': path.resolve('node_modules/@emotion/styled'),
	// 		'emotion-theming': path.resolve('node_modules/@emotion/react'),
	// 		'@emotion/react': path.resolve('node_modules/@emotion/react')
	// 	}

	// 	return config
	// 	// 	// return mergeConfig(config, {
	// 	// 	// 	plugins: [docgen(['./**/*.tsx'])]
	// 	// 	// })
	// }
}
