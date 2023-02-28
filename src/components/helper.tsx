import type { Meta, Story } from '@storybook/react'
import type { ComponentType } from 'react'

export type CSFType<M extends Meta> = M extends {
	component: ComponentType<infer P>
	args: infer D
}
	? { args: Omit<P, keyof D> } & Story<P>
	: never
