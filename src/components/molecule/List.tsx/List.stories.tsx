import { ComponentMeta, ComponentStory, ComponentStoryFn } from '@storybook/react'
import { random, range } from 'lodash-es'

import List from './List'

export default {
	title: 'Components/molecule/List',
	component: List
} as ComponentMeta<typeof List>

const Template: ComponentStory<typeof List> = args => <List {...args} />

export const DefaultList: ComponentStoryFn<typeof List> = Template.bind({})
DefaultList.args = {
	data: range(0, random()).map((m, i) => ({ code: i.toString(), value: m.toString(), label: m.toString() }))
}

export const EmptyList: ComponentStoryFn<typeof List> = Template.bind({})
EmptyList.args = {
	data: [],
	emptyComponent: '목록이 없습니다.'
}
