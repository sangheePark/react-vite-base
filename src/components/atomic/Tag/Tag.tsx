import React from 'react'
import { StyledTag, StyledTagProps } from './Tag.style'

type TagProps = {
	label?: string
}

/**
 *
 * @param TagProps
 * @example
 * ```
 * const rawVideo = document.getElementById('v')
 * ```
 */
const Tag: React.FC<TagProps & StyledTagProps> = ({ label, ...styleProps }) => {
	return <StyledTag {...styleProps}>{styleProps.isMore ? '' : label}</StyledTag>
}

export default Tag
