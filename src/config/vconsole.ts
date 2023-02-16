import VConsole from 'vconsole'

class ConsoleConfig {
	use: () => void

	constructor() {
		this.use = () => {
			// 로컬 환경 제외
			import.meta.env.VITE_DROP_CONSOLE && new VConsole()
		}
	}
}

export default new ConsoleConfig()
