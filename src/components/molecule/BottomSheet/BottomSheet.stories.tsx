import Button from '@/components/atomic/Button/Button'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'
import BottomSheet from './BottomSheet'

export default {
	title: 'Components/BottomSheet',
	component: BottomSheet,
	args: {
		open: false,
		title: '제목을 입력하세요'
	}
} as ComponentMeta<typeof BottomSheet>

const Template: ComponentStory<typeof BottomSheet> = args => {
	const [open, setOpen] = useState(false)
	const toggle = () => {
		console.log('toggle')
		setOpen(!open)
	}
	const close = () => {
		setOpen(false)
	}
	console.log(args)

	return (
		<>
			<div>
				<Button onClick={toggle} label='Open BottomSheet'></Button>
				<BottomSheet open={open} title='BottomSheet Title' onFold={false} onClose={close}>
					<div>
						<p>Test BottomSheet</p>
					</div>
				</BottomSheet>
			</div>
		</>
	)
}

export const BottomSheet1 = Template.bind({})
