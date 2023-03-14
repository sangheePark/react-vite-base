import { ComponentMeta, ComponentStory } from '@storybook/react'

import Dim from './Dim'

export default {
	title: 'Components/Dim',
	component: Dim,
	args: {
		isFlexCenter: 'boolean' as unknown as any,
		onClick: '(e: MouseEvent<HTMLDivElement, MouseEvent>) => void' as unknown as any
	}
} as ComponentMeta<typeof Dim>

const Template: ComponentStory<typeof Dim> = args => <Dim {...args} />

export const DimDefault = Template.bind({})
DimDefault.args = {}
