export interface MUser {
	id: string
	name: string
	age?: number
}

export namespace LoginDTO {
	export interface Request {
		username: string
		password: string
	}
	export interface Response extends Omit<MUser, 'id'> {
		access_token: string
	}
	export interface Auth {
		[propName: string]: string
	}
}
