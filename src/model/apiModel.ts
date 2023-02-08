export interface MPageResult {
	pageNum: number
	pageSize: number
	total: number
}

export interface MResult<T = undefined> {
	data: T
	page?: MPageResult
}
export interface MPageRequest {
	pageNum: number
	pageSize: number
}
export interface MResultError {
	status: string
	code?: string
	message: string
}
import { HttpStatusCode } from 'axios'

export class APIError extends Error {
	constructor(message: string) {
		super(message)
		this.name = this.constructor.name
	}
	status?: string
	code?: string
	cause?: Error
	static readonly 인증만료 = HttpStatusCode.Unauthorized
	static readonly 권한없음 = HttpStatusCode.Forbidden
	static readonly 타임아웃 = HttpStatusCode.RequestTimeout
	static readonly 요청불량 = HttpStatusCode.BadRequest
	static readonly 서버오류 = HttpStatusCode.InternalServerError
	static readonly 알수없음 = '99999'
}
