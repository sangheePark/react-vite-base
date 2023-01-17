import { HttpStatusCode } from 'axios'

/**
 * @description:
 * @param {Number} status
 * @return void
 */
export const checkStatus = (status: number): void => {
	switch (status) {
		case HttpStatusCode.BadRequest:
			break
		case HttpStatusCode.Unauthorized:
			break
		case HttpStatusCode.Forbidden:
			break
		case HttpStatusCode.NotFound:
			break
		case HttpStatusCode.MethodNotAllowed:
			break
		case HttpStatusCode.RequestTimeout:
			break
		case HttpStatusCode.InternalServerError:
			break
		case HttpStatusCode.BadGateway:
			break
		case HttpStatusCode.ServiceUnavailable:
			break
		case HttpStatusCode.GatewayTimeout:
			break
		default:
	}
}
