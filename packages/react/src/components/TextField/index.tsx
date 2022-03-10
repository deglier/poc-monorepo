import React from 'react'

import { styled } from '@ui/web'
import { Input as InputCss } from '@ui/styles'

const StyledInput = styled('input', InputCss)

export type TextFieldProps = React.ComponentProps<typeof StyledInput> & {
  /* props */
}
export const TextField = ({ ...props }: TextFieldProps) => (
  <StyledInput {...props} />
)
