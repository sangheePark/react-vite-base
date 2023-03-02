import styled from '@emotion/styled'
import { CSSProperties } from 'react'

export interface IStyledButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	// export interface IStyledButtonProps extends Pick<HTMLAttributes<HTMLButtonElement>, 'onClick' | 'disabled'> {
	// disabled: boolean
	/**
	 * @description 예제 storybook 설명으로 확인 가능
	 */
	isIndex: boolean
}

const defaultCSS: CSSProperties = {
	padding: '10px'
}

export const StyledButton = styled.button<IStyledButtonProps>(
	{
		...defaultCSS
	},
	props => {
		const { id } = props
		return { id }
	}
)
