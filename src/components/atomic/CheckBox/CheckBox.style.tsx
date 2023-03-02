import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { CSSProperties } from 'react'

export interface IStyledCheckBoxProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

const defaultCSS: CSSProperties = {
	width: 0,
	appearance: 'none'
}

export const StyledCheckBox = styled.input<IStyledCheckBoxProps>(
	{
		...defaultCSS
	},
	props => {
		// use theme end child css
		const { id, theme } = props
		const childCSS = css`
			& :checked + svg rect:first-of-type {
				fill: ${theme.colors.primary};
				stroke: transparent;
			}
		`
		return { id, css: childCSS }
	}
)

const iconCSS: CSSProperties = {}

export const StyledCheckBoxIcon = styled.svg(
	{
		...iconCSS
	},
	props => {
		const { id } = props
		return { id }
	}
)
