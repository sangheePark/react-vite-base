import NProgress from "@/config/nprogress";
import axios, { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { showFullScreenLoading, tryHideFullScreenLoading } from "@/config/serviceLoading";
import { ResultData } from "@/api/interface";
import { ResultEnum } from "@/enums/httpEnum";
import { checkStatus } from "./helper/checkStatus";
import { AxiosCanceler } from "./helper/axiosCancel";

const axiosCanceler = new AxiosCanceler();

const config = {
	// .env 시작 부분의 파일에서 수정할 수 있는 기본 주소 요청 주소
	baseURL: import.meta.env.VITE_API_URL as string,
	// 제한 시간 설정(10초)
	timeout: 10000,
	withCredentials: true
};

const onRequest = (requestConfig: AxiosRequestConfig): AxiosRequestConfig => {
    NProgress.start();
	axiosCanceler.addPending(requestConfig);
	// config.headers!.noLoading || showFullScreenLoading();
	const token: string = "";
	return { ...requestConfig, headers: {  "x-access-token": token } };
}

class RequestHttp {
	service: AxiosInstance;
	public constructor(config: AxiosRequestConfig) {
		this.service = axios.create(config);
		this.service.interceptors.request.use(
			onRequest,
			(error: AxiosError) => {
				return Promise.reject(error);
			}
		);

		this.service.interceptors.response.use(
			(response: AxiosResponse) => {
				const { data, config } = response;
				NProgress.done();
				axiosCanceler.removePending(config);
				tryHideFullScreenLoading();
				if (data.code == ResultEnum.OVERDUE) {
					// store.dispatch(setToken(""));
					window.location.hash = "/login";
					return Promise.reject(data);
				}
				if (data.code && data.code !== ResultEnum.SUCCESS) {
					return Promise.reject(data);
				}
				return data;
			},
			async (error: AxiosError) => {
				const { response } = error;
				NProgress.done();
				tryHideFullScreenLoading();
				// if (error.message.indexOf("timeout") !== -1) message.error("请求超时，请稍后再试");
				if (response) checkStatus(response.status);
				if (!window.navigator.onLine) window.location.hash = "/500";
				return Promise.reject(error);
			}
		);
	}

	get<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
		return this.service.get(url, { params, ..._object });
	}
	post<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
		return this.service.post(url, params, _object);
	}
	put<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
		return this.service.put(url, params, _object);
	}
	delete<T>(url: string, params?: any, _object = {}): Promise<ResultData<T>> {
		return this.service.delete(url, { params, ..._object });
	}
}

export default new RequestHttp(config);
