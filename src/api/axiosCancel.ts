import axios, { AxiosRequestConfig, Canceler } from 'axios'
import qs from 'qs'
import { isFunction } from '@/utils/is/index'

let pendingMap = new Map<string, Canceler>()

export const getPendingUrl = (config: AxiosRequestConfig) =>
	[config.method, config.url, qs.stringify(config.data), qs.stringify(config.params)].join('&')

export default class AxiosCanceler {
	/**
	 * @description:
	 * @param {Object} config
	 */
	addPending(config: AxiosRequestConfig) {
		this.removePending(config)
		const url = getPendingUrl(config)
		config.cancelToken =
			config.cancelToken ||
			new axios.CancelToken(cancel => {
				if (!pendingMap.has(url)) {
					pendingMap.set(url, cancel)
				}
			})
	}

	/**
	 * @description:
	 * @param {Object} config
	 */
	removePending(config: AxiosRequestConfig) {
		const url = getPendingUrl(config)

		if (pendingMap.has(url)) {
			const cancel = pendingMap.get(url)
			cancel && cancel()
			pendingMap.delete(url)
		}
	}

	/**
	 * @description:
	 */
	removeAllPending() {
		pendingMap.forEach(cancel => {
			cancel && isFunction(cancel) && cancel()
		})
		pendingMap.clear()
	}

	/**
	 * @description:
	 */
	reset(): void {
		pendingMap = new Map<string, Canceler>()
	}
}
