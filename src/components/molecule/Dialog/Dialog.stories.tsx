import Button from '@/components/atomic/Button/Button'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'

import Dialog from './Dialog'

export default {
	title: 'Components/Dialog',
	component: Dialog,
	args: {
		variant: 'alert',
		title: 'title',
		contents: 'contents',
		leftButtonLabel: '취소',
		onLeftButtonClick: '() => void' as unknown as any,
		rightButtonLabel: '확인',
		onRightButtonClick: '() => void' as unknown as any
	}
} as ComponentMeta<typeof Dialog>

const AlertTemplate: ComponentStory<typeof Dialog> = args => {
	const show = false
	const [showDialog, setShowDialog] = useState(show)
	const onClick = () => {
		setShowDialog(true)
	}

	const onRightButtonClick = () => {
		setShowDialog(false)
	}
	return (
		<>
			<Button onClick={onClick} label='Alert'></Button>
			<Dialog {...args} show={showDialog} setShow={setShowDialog} variant='alert' onRightButtonClick={onRightButtonClick} />
		</>
	)
}

export const Alert = AlertTemplate.bind({})

const ConfirmTemplate: ComponentStory<typeof Dialog> = args => {
	const show = false
	const [showDialog, setShowDialog] = useState(show)
	const onClick = () => {
		setShowDialog(true)
	}

	const onLeftButtonClick = () => {
		setShowDialog(false)
	}

	const onRightButtonClick = () => {
		alert('확인')
		setShowDialog(false)
	}

	return (
		<>
			<Button onClick={onClick} label='Confirm'></Button>
			<Dialog
				{...args}
				show={showDialog}
				setShow={setShowDialog}
				variant='confirm'
				onLeftButtonClick={onLeftButtonClick}
				onRightButtonClick={onRightButtonClick}
			/>
		</>
	)
}

export const Confirm = ConfirmTemplate.bind({})
