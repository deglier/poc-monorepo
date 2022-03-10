import React from 'react'

import { styled } from '@ui/web'
import { Button as ButtonCss } from '@ui/styles'

const StyledButton = styled('button', ButtonCss)

export type ButtonProps = React.ComponentProps<typeof StyledButton> & {
  /* props */
}

export const Button = ({ children, ...props }: ButtonProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <StyledButton {...props}>{children}</StyledButton>
)