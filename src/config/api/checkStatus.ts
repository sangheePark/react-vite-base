import { APIError } from '@/model/apiModel'
import { AxiosResponse, HttpStatusCode } from 'axios'

/**
 * @description:
 * @param {Number} status
 * @return void
 */
export const checkStatus = (response: AxiosResponse): void => {
	const { status } = response
	switch (status) {
		case HttpStatusCode.BadRequest:
			// 사용자 요청 파라메터 오류
			console.log(`bad Request`)
			throw new APIError(response.statusText, APIError.요청불량)
		case HttpStatusCode.Unauthorized:
			// 인증 만료
			break
		case HttpStatusCode.Forbidden:
			// 권한 없음
			break
		case HttpStatusCode.NotFound:
			// URL 찾지 못함
			break
		case HttpStatusCode.MethodNotAllowed:
			// 요청 메서드 제공 안함
			break
		case HttpStatusCode.RequestTimeout:
			// 타임 아웃
			break
		case HttpStatusCode.InternalServerError:
			// 서버 오류
			break
		case HttpStatusCode.BadGateway:
			//
			break
		case HttpStatusCode.ServiceUnavailable:
			break
		case HttpStatusCode.GatewayTimeout:
			break
		default:
	}
}
