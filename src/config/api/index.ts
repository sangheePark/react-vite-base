import NProgress from '@/config/nprogress'
import { tryHideFullScreenLoading } from '@/config/serviceLoading'
import { MResult } from '@/model/apiModel'
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import AxiosCanceler from './axiosCancel'
import { checkStatus } from './checkStatus'

const axiosCanceler = new AxiosCanceler()

const config = {
	// .env 시작 부분의 파일에서 수정할 수 있는 기본 주소 요청 주소
	baseURL: import.meta.env.VITE_API_URL as string,
	// 제한 시간 설정(10초)
	timeout: 10000,
	withCredentials: true
}

const onRequest = (requestConfig: AxiosRequestConfig): AxiosRequestConfig => {
	NProgress.start()
	axiosCanceler.addPending(requestConfig)
	// config?.headers?.noLoading || showFullScreenLoading()
	const token = ''
	return { ...requestConfig, headers: { 'x-access-token': token } }
}

class RequestHttp {
	service: AxiosInstance

	public constructor(config: AxiosRequestConfig) {
		this.service = axios.create(config)
		this.service.interceptors.request.use(onRequest, (error: AxiosError) => {
			return Promise.reject(error)
		})

		this.service.interceptors.response.use(
			(response: AxiosResponse) => {
				const { config } = response
				NProgress.done()
				axiosCanceler.removePending(config)
				tryHideFullScreenLoading()

				return response
			},
			async (error: AxiosError) => {
				const { response } = error
				NProgress.done()
				tryHideFullScreenLoading()
				if (response) checkStatus(response)
				if (!window.navigator.onLine) window.location.hash = '/500'
			}
		)
	}

	get<T>(url: string, params?: object, _object = {}): Promise<MResult<T>> {
		return this.service.get(url, { params, ..._object })
	}

	post<T>(url: string, params?: object, _object = {}): Promise<MResult<T>> {
		return this.service.post(url, params, _object)
	}

	put<T>(url: string, params?: object, _object = {}): Promise<MResult<T>> {
		return this.service.put(url, params, _object)
	}

	delete<T>(url: string, params?: any, _object = {}): Promise<MResult<T>> {
		return this.service.delete(url, { params, ..._object })
	}
}
const http = new RequestHttp(config)
export default http
