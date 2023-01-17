import { Login } from '@/api/interface/index'
import http from '@/api'
import { EAPI } from '@/enums/endpoint'

/**
 * @name
 */
export const loginApi = (params: Login.Request) => {
	return http.post<Login.Response>(EAPI.USER.DO_LOGIN, params)
	// return http.post<Login.ResLogin>(PORT1 + `/login`, {}, { params });
	// return http.post<Login.ResLogin>(PORT1 + `/login`, qs.stringify(params));
	// return http.post<Login.ResLogin>(PORT1 + `/login`, params, { headers: { noLoading: true } });
}

// *
export const getAuthorButtons = () => {
	return http.get<Login.Auth>(EAPI.USER.GET_AUTH)
}
