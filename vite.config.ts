import react from '@vitejs/plugin-react-swc'
import autoprefixer from 'autoprefixer'
import { resolve } from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import { ConfigEnv, defineConfig, loadEnv, UserConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'
import eslintPlugin from 'vite-plugin-eslint'
import { createHtmlPlugin } from 'vite-plugin-html'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { wrapperEnv } from './src/utils/getEnv'

// @see: https://vitejs.dev/config/
export default defineConfig((mode: ConfigEnv): UserConfig => {
	const env = loadEnv(mode.mode, process.cwd())
	const viteEnv = wrapperEnv(env)

	return {
		// base: "/",
		// alias config
		resolve: {
			alias: {
				'@': resolve(__dirname, './src')
			}
		},
		// global css
		css: {
			postcss: {
				plugins: [autoprefixer()]
			}
		},
		// server config
		server: {
			host: '0.0.0.0', // 서버 호스트 이름, 외부 액세스가 허용되는 경우 다음으로 설정할 수 있습니다. "0.0.0.0"
			port: viteEnv.VITE_PORT,
			open: viteEnv.VITE_OPEN,
			cors: true,
			// https: false,
			// mock data 구성
			proxy: {
				'/api': {
					target: 'https://bf7f4e20-042d-4287-abee-7aec0f9fdba1.mock.pstmn.io',
					changeOrigin: true,
					rewrite: path => path.replace(/^\/api/, '')
				}
			}
		},
		// plugins
		plugins: [
			react(),
			createHtmlPlugin({
				inject: {
					data: {
						title: viteEnv.VITE_GLOB_APP_TITLE
					}
				}
			}),
			// * SVG 아이콘 사용
			createSvgIconsPlugin({
				iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
				symbolId: 'icon-[dir]-[name]'
			}),
			// * EsLint
			eslintPlugin(),
			// * module report
			viteEnv.VITE_REPORT &&
				visualizer({
					filename: './dist/report.html',
					open: true,
					brotliSize: true
				}),
			// * gzip compress
			viteEnv.VITE_BUILD_GZIP &&
				viteCompression({
					verbose: true,
					disable: false,
					threshold: 10240,
					algorithm: 'gzip',
					ext: '.gz'
				})
		],
		esbuild: {
			pure: viteEnv.VITE_DROP_CONSOLE ? ['console.log', 'debugger'] : []
		},
		// build configure
		build: {
			outDir: 'dist',
			minify: 'esbuild',
			rollupOptions: {
				// entry points
				input: {
					'.': resolve(__dirname, './index.html'),
					test1: resolve(__dirname, './test1/index.html'),
					test2: resolve(__dirname, './test2/index.html')
				},
				output: {
					// Static resource classification and packaging
					chunkFileNames: 'assets/js/[name].[hash:8].js',
					entryFileNames: 'assets/js/[name].[hash:8].js',
					assetFileNames: 'assets/[ext]/[name].[hash:8].[ext]'
				}
			}
		}
	}
})
