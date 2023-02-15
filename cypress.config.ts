import { defineConfig } from 'cypress'

export default defineConfig({
	component: {
		devServer: {
			framework: 'react',
			bundler: 'vite'
		},
		port: 9090
	}
})
