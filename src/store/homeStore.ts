import { MCard } from '@/model/homeModel'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export interface IHomeStore {
	cards: MCard[]
}

export interface IHomeStoreFunction {
	setCards: (cards: MCard[]) => void
}

const defaultValue: IHomeStore = {
	cards: []
}

const useHomStore = create(
	devtools(
		persist<IHomeStore & IHomeStoreFunction>(
			set => ({
				...defaultValue,
				setCards: (cards: MCard[]) =>
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
