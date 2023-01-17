export interface MUser {
	id: string
}

export namespace LoginDTO {
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
