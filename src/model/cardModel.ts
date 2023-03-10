import { ECardType } from '@/enums/homeEnum'

export namespace CardModel {
	export interface Entity {
		id: string
		name: string
		amount: number
		type: ECardType
	}
	export interface Request {
		id?: string
	}
	export interface Response extends Entity {}
}
