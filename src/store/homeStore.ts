import { CardModel } from '@/model/cardModel'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export interface IHomeStore {
	cards: CardModel.Entity[]
}

export interface IHomeStoreFunction {
	setCards: (cards: CardModel.Entity[]) => void
}

const defaultValue: IHomeStore = {
	cards: []
}

const useHomStore = create(
	devtools(
		persist<IHomeStore & IHomeStoreFunction>(
			set => ({
				...defaultValue,
				setCards: (cards: CardModel.Entity[]) =>
					set(prev => ({
						...prev,
						cards
					}))
			}),
			{ name: 'useHomStore' }
		),
		{ enabled: false }
	)
)

export default useHomStore
