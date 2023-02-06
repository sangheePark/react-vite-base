export interface MPageResult {
	pageNum: number
	pageSize: number
	total: number
}

export interface MResult<T = any, E = any> {
	status: string
	code?: E
	message: string
	data?: T
	page?: MPageResult
}
export interface MPageRequest {
	pageNum: number
	pageSize: number
}
