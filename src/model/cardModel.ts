import { ECardType } from '@/enums/homeEnum'

export interface MCard {
	id: string
	name: string
	amount: number
	type: ECardType
}

export namespace CardDTO {
	export interface Request {
		id?: string
	}
	export interface Response extends MCard {}
}
