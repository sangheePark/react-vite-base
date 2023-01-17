import http from '@/api'
import { EAPI } from '@/enums/endpoint'
import { LoginDTO } from '@/model/loginModel'

export const cards = (params: LoginDTO.Request) => {
	return http.post<LoginDTO.Response>(EAPI.USER.DO_LOGIN, params)
	// return http.post<Login.ResLogin>(PORT1 + `/login`, {}, { params });
	// return http.post<Login.ResLogin>(PORT1 + `/login`, qs.stringify(params));
	// return http.post<Login.ResLogin>(PORT1 + `/login`, params, { headers: { noLoading: true } });
}

export const getAuthorButtons = () => {
	return http.get<LoginDTO.Auth>(EAPI.USER.GET_AUTH)
}
