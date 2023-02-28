import { EStorybookCategory } from '@/enums/storybookEnum'
import { ComponentMeta, Story } from '@storybook/react'

import Button, { IButtonProps } from './Button'

export default {
	title: 'Components/atomic/Button',
	component: Button,
	argTypes: {
		// Assigns the argTypes to the Colors category
		backgroundColor: {
			control: 'color',
			table: {
				category: EStorybookCategory.STYLE
			}
		},
		primary: {
			table: {
				category: EStorybookCategory.STYLE
			}
		},
		label: {
			type: {
				require: true,
				name: 'string'
			},
			table: {
				category: EStorybookCategory.PROPS
			}
		},
		disabled: {
			type: {
				name: 'boolean'
			},
			table: {
				category: EStorybookCategory.PROPS
			}
		},
		// Assigns the argType to the Events category
		onClick: {
			table: {
				category: EStorybookCategory.EVENT
			}
		},
		// Assigns the argType to the Sizes category
		size: {
			control: 'radio',
			table: {
				category: EStorybookCategory.STYLE
			}
		},
		// Assigns the argType to the Sizes category
		isIndex: {
			control: 'radio',
			table: {
				category: EStorybookCategory.PROPS
			}
		}
	}
} as ComponentMeta<typeof Button>

// const Template: ComponentStory<typeof Button> = args => <Button {...args} />
const Template: Story<IButtonProps> = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
	// onClick: () => {}
}
export const Disabled = Template.bind({})
Disabled.args = {
	disabled: true
}
