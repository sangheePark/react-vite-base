import { ComponentMeta, ComponentStory, ComponentStoryFn } from '@storybook/react'

import CheckBox from './CheckBox'

export default {
	title: 'Components/atomic/CheckBox',
	component: CheckBox
} as ComponentMeta<typeof CheckBox>

const Template: ComponentStory<typeof CheckBox> = args => <CheckBox {...args} />

export const DefaultCheckBox: ComponentStoryFn<typeof CheckBox> = Template.bind({})
DefaultCheckBox.args = {
	checked: true
}
