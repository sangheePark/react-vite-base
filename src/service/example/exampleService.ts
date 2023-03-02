import http from '@/config/api'
import { EAPI } from '@/enums/endpoint'
import { MResult } from '@/model/apiModel'
import { ExampleModel } from '@/model/example/exampleModel'
import { useQuery } from '@tanstack/react-query'

/**
 * @description serviceNamespace
 */
export namespace ExampleService {
	/**
	 * @description list
	 */
	export const list = (params?: ExampleModel.Filter): Promise<MResult<ExampleModel.Response[]>> => {
		return http.post<ExampleModel.Response[]>(EAPI.EXAMPLE.LIST, params)
	}
	/**
	 * @description detail
	 */
	export const detail = (params: ExampleModel.Filter): Promise<MResult<ExampleModel.Response>> => {
		return http.get<ExampleModel.Response>(EAPI.EXAMPLE.DETAIL + params.id)
	}
	/**
	 * @description add
	 */
	export const add = (params: ExampleModel.Request): Promise<MResult<ExampleModel.Response>> => {
		return http.post<ExampleModel.Response>(EAPI.EXAMPLE.ADD, params)
	}
	/**
	 * @description edit
	 */
	export const edit = (params: ExampleModel.Request): Promise<MResult<ExampleModel.Response>> => {
		return http.post<ExampleModel.Response>(EAPI.EXAMPLE.EDIT, params)
	}
	/**
	 * @description remove
	 */
	export const remove = (params: ExampleModel.Request): Promise<MResult<ExampleModel.Response>> => {
		return http.post<ExampleModel.Response>(EAPI.EXAMPLE.REMOVE, params)
	}
}

// not use namespace
/**
 * @description list
 */
export const getExampleList = (params: ExampleModel.Filter): Promise<MResult<ExampleModel.Response[]>> => {
	return http.post<ExampleModel.Response[]>(EAPI.EXAMPLE.LIST, params)
}

/**
 * @description detail
 */
export const getExample = (params: ExampleModel.Filter): Promise<MResult<ExampleModel.Response>> => {
	return http.get<ExampleModel.Response>(EAPI.EXAMPLE.DETAIL + params.id)
}

/**
 * @description add
 */
export const addExample = (params: ExampleModel.Request): Promise<MResult<ExampleModel.Response>> => {
	return http.post<ExampleModel.Response>(EAPI.EXAMPLE.ADD, params)
}

/**
 * @description edit
 */
export const editExample = (params: ExampleModel.Request): Promise<MResult<ExampleModel.Response>> => {
	return http.post<ExampleModel.Response>(EAPI.EXAMPLE.EDIT, params)
}

/**
 * @description remove
 */
export const removeExample = (params: ExampleModel.Request): Promise<MResult> => {
	return http.post(EAPI.EXAMPLE.REMOVE, params)
}

/**
 * @description react-query list
 */
export const useExamples = (params?: ExampleModel.Filter) => {
	return useQuery<MResult<ExampleModel.Response[]>>(
		[EAPI.EXAMPLE.LIST, params],
		() => {
			return http.post<ExampleModel.Response[]>(EAPI.EXAMPLE.LIST, params || {})
		},
		{ enabled: !!params }
	)
}

/**
 * @description react-query detail
 */
export const useExample = (params: ExampleModel.Filter) => {
	return useQuery<MResult<ExampleModel.Response>>(
		[EAPI.EXAMPLE.DETAIL, params],
		() => {
			return http.get<ExampleModel.Response>(EAPI.EXAMPLE.DETAIL + params.id)
		},
		{ enabled: !!params }
	)
}
