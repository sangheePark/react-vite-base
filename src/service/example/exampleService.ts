import http from '@/config/api'
import { queryClient } from '@/config/reactQuery'
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
	export const list = (filter?: ExampleModel.Filter) => {
		const params = filter || {}
		console.log(`ExampleService.list`)
		return useQuery<MResult<ExampleModel.Response[]>>(
			[EAPI.EXAMPLE.LIST, params],
			() => {
				console.log(`ExampleService.list-> post`)
				return http.post<ExampleModel.Response[]>(EAPI.EXAMPLE.LIST, params)
			},
			{ suspense: true }
		)
	}

	export const prefetchQuery = (filter?: ExampleModel.Filter) => {
		const params = filter || {}
		return queryClient.resetQueries([EAPI.EXAMPLE.LIST, params])
	}

	export const listAxios = (params?: ExampleModel.Filter): Promise<MResult<ExampleModel.Response[]>> => {
		return http.post<ExampleModel.Response[]>(EAPI.EXAMPLE.LIST, params)
	}

	/**
	 * @description detail
	 */
	export const detail = (params: ExampleModel.Filter) => {
		return useQuery<MResult<ExampleModel.Response>>(
			[EAPI.EXAMPLE.DETAIL, params.id],
			() => {
				return http.get<ExampleModel.Response>(EAPI.EXAMPLE.DETAIL + params.id)
			},
			{ enabled: !!params }
		)
	}
	/**
	 * @description detail
	 */
	// export const detail = (params: ExampleModel.Filter): Promise<MResult<ExampleModel.Response>> => {
	// 	return http.get<ExampleModel.Response>(EAPI.EXAMPLE.DETAIL + params.id)
	// }
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
