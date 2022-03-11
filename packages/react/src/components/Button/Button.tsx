import React from 'react'

import { styled } from '../../web'
import { Button as ButtonCss } from '../../styles'

const StyledButton = styled('button', ButtonCss)

export type ButtonProps = React.ComponentProps<typeof StyledButton> & {
  /* props */
}

export const Button = ({ children, ...props }: ButtonProps) => (
  <StyledButton {...props}>{children}</StyledButton>
)

export default Button
