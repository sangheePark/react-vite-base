import { UserDTO } from '@/model/userModel'

export namespace LoginDTO {
	export interface Request {
		username: string
		password: string
	}
	export interface Response extends Omit<UserDTO.MUser, 'id'> {
		access_token: string
	}
	export interface Auth {
		[propName: string]: string
	}
}
