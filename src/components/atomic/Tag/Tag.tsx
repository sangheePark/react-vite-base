import React from 'react'
import { StyledTag, StyledTagProps } from './Tag.style'

type TagProps = {
	label?: string
}

const Tag: React.FC<TagProps & StyledTagProps> = ({ label, ...styleProps }) => {
	return <StyledTag {...styleProps}>{styleProps.isMore ? '' : label}</StyledTag>
}

export default Tag
