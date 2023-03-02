import example from './example'
import user from './user'

export namespace EAPI {
	export const USER = {
		...user
	}
	export const EXAMPLE = {
		...example
	}
}
