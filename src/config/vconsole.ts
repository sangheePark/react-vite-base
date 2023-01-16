import VConsole from 'vconsole'

class ConsoleConfig {
	use: () => void
	constructor() {
		this.use = () => {
			import.meta.env.DEV && new VConsole()
		}
	}
}

export default new ConsoleConfig()
