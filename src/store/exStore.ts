import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export interface IExStoreProp {
	value: string
}
export interface IExStoreFunction {
	setValue: (value: string) => void
}
const defaultValue: IExStoreProp = {
	value: ''
}
const useExStore = create(
	devtools(
		persist<IExStoreProp & IExStoreFunction>(
			set => ({
				...defaultValue,
				setValue: (value: string) =>
					set(prev => ({
						...prev,
						value
					}))
			}),
			{ name: 'useExStore' }
		),
		{ enabled: import.meta.env.DEV }
	)
)
export default useExStore
