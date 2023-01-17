export interface ResultData<T = any> extends Result {
	data?: T
}

export interface Result {
	code: string
	msg: string
}

export interface ResPage<T> {
	datalist: T[]
	pageNum: number
	pageSize: number
	total: number
}

export interface ReqPage {
	pageNum: number
	pageSize: number
}
