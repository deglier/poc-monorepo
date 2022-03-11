import React from 'react'

import { styled } from '../../web'
import { Input as InputCss } from '../../styles'

const StyledTextField = styled('input', InputCss)

export type TextFieldProps = React.ComponentProps<typeof StyledTextField> & {
  /* props */
}

export const TextField = ({ children, ...props }: TextFieldProps) => (
  <StyledTextField {...props}>{children}</StyledTextField>
)

export default TextField
