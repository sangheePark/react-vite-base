import { Login } from '@/api/interface/index'
import { PORT1 } from '@/api/config/servicePort'
import qs from 'qs'

import http from '@/api'

/**
 * @name
 */
export const loginApi = (params: Login.ReqLoginForm) => {
	return http.post<Login.ResLogin>(PORT1 + `/login`, params)
	// return http.post<Login.ResLogin>(PORT1 + `/login`, {}, { params });
	// return http.post<Login.ResLogin>(PORT1 + `/login`, qs.stringify(params));
	// return http.post<Login.ResLogin>(PORT1 + `/login`, params, { headers: { noLoading: true } });
}

// *
export const getAuthorButtons = () => {
	return http.get<Login.ResAuthButtons>(PORT1 + `/auth/buttons`)
}
