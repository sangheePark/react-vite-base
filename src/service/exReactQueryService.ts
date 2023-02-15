import http from '@/config/api'
import { EAPI } from '@/enums/endpoint'
import { MResult } from '@/model/apiModel'
import { CardDTO } from '@/model/cardModel'
import { useQuery } from '@tanstack/react-query'

export const useCards = (params?: CardDTO.Request) => {
	return useQuery<MResult<CardDTO.Response[]>>(
		[EAPI.USER.CARDS, params],
		() => {
			return http.post<CardDTO.Response[]>(EAPI.USER.CARDS, params)
		},
		{ enabled: !!params }
	)
}
