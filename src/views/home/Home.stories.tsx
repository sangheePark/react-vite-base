import { ComponentStory, ComponentMeta } from '@storybook/react'

import Home from './Home'

export default {
	title: 'Page/Home',
	component: Home,
	args: {}
} as ComponentMeta<typeof Home>

const Template: ComponentStory<typeof Home> = args => <Home {...args} />

export const Story = Template.bind({})
Story.args = {}
