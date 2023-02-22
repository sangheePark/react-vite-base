import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StyledTag } from './Tag.style'

export default {
	title: 'Components/Tag',
	component: StyledTag
	// args: {
	// 	disabled: '' as undefined as any
	// }
} as ComponentMeta<typeof StyledTag>

const Template: ComponentStory<typeof StyledTag> = args => <StyledTag {...args}></StyledTag>

export const Default = Template.bind({})
Default.args = {}

export const More = Template.bind({})
More.args = {
	isMore: true
}
