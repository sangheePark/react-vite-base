import { IRouteObject } from '@/routers/interface'

/**
 * @description get localStorage
 * @param {String} key
 * @return string
 */
export const localGet = (key: string) => {
	const value = window.localStorage.getItem(key)
	try {
		return JSON.parse(window.localStorage.getItem(key) as string)
	} catch (error) {
		return value
	}
}

/**
 * @description set localStorage
 * @param {String} key
 * @param {Any} value
 * @return void
 */
export const localSet = (key: string, value: any) => {
	window.localStorage.setItem(key, JSON.stringify(value))
}

/**
 * @description remove localStorage
 * @param {String} key
 * @return void
 */
export const localRemove = (key: string) => {
	window.localStorage.removeItem(key)
}

/**
 * @description clear localStorage
 * @return void
 */
export const localClear = () => {
	window.localStorage.clear()
}

/**
 * @description
 * @param {String} path
 * @param {Array} routes
 * @returns array
 */
export const searchRoute = (path: string, routes: IRouteObject[] = []): IRouteObject => {
	let result: IRouteObject = {}
	for (const item of routes) {
		if (item.path === path) return item
		if (item.children) {
			const res = searchRoute(path, item.children)
			if (Object.keys(res).length) result = res
		}
	}
	return result
}
