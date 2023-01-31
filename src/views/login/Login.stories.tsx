import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import Login from './Login'

export default {
	title: 'Components/Login',
	component: Login,
	args: {}
} as ComponentMeta<typeof Login>

const Template: ComponentStory<typeof Login> = args => <Login {...args} />

export const Story = Template.bind({})
Story.args = {}
