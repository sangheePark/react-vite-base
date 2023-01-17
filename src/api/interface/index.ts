export interface Result {
	code: string
	msg: string
}

export interface ResultData<T = any> extends Result {
	data?: T
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

export namespace Login {
	export interface Request {
		username: string
		password: string
	}
	export interface Response {
		access_token: string
	}
	export interface Auth {
		[propName: string]: string
	}
}
