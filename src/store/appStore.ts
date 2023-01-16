import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export interface IAppStore {
	token?: string
	user?: string
}

export interface IAppStoreFunction {
	setUser: (user: string) => void
	setToken: (token: string) => void
}

const defaultValue: IAppStore = {}

export const useAppStore = create(
	devtools(
		persist<IAppStore & IAppStoreFunction>(
			set => ({
				...defaultValue,
				setUser: (user: string) =>
					set(prev => ({
						...prev,
						user
					})),
				setToken: (token: string) => set(prev => ({ ...prev, token }))
			}),
			{ name: 'appStore' }
		),
		{ enabled: false }
	)
)
