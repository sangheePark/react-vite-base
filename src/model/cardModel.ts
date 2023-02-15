export interface MCard {
	id: string
	name: string
	amount: number
}

export namespace CardDTO {
	export interface Request extends Pick<MCard, 'id'> {}
	export interface Response extends MCard {}
}
