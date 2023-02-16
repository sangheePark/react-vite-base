import { ComponentMeta, ComponentStory } from '@storybook/react'

import InputStyle from './Input.style'

export default {
	title: 'Components/InputStyle',
	component: InputStyle
	// argTypes: typeof IInputProps
} as ComponentMeta<typeof InputStyle>

const Template: ComponentStory<typeof InputStyle> = args => <InputStyle {...args} />

export const Story = Template.bind({})
Story.args = {
	color: 'black'
}
