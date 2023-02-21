const path = require('path')
// const react = require('@vitejs/plugin-react')
// const { loadConfigFromFile, mergeConfig } = require('vite')
// const toPath = _path => path.join(process.cwd(), _path)
module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
	framework: '@storybook/react',
	core: {
		builder: '@storybook/builder-vite'
	},
	features: {
		storyStoreV7: true
	},
	// async viteFinal(config, { configType }) {
	// 	const { config: userConfig } = await loadConfigFromFile(path.resolve(__dirname, '../vite.config.ts'))

	// 	return mergeConfig(config, {
	// 		...userConfig
	// 		// manually specify plugins to avoid conflict
	// 		// plugins: [
	// 		// 	react({
	// 		// 		exclude: [/\.stories\.(t|j)sx?$/, /node_modules/],
	// 		// 		jsxImportSource: '@emotion/react',
	// 		// 		babel: {
	// 		// 			plugins: ['@emotion/babel-plugin']
	// 		// 		}
	// 		// 	})
	// 		// ]
	// 	})
	// }
	viteFinal: async (config, { configType }) => {
		config.resolve.alias = {
			...config.resolve.alias,
			'@': path.resolve(__dirname, '../src'),
			'@emotion/core': path.resolve('node_modules/@emotion/react'),
			'@emotion/styled': path.resolve('node_modules/@emotion/styled'),
			'emotion-theming': path.resolve('node_modules/@emotion/react'),
			'@emotion/react': path.resolve('node_modules/@emotion/react')
		}

		return config
	}
}
