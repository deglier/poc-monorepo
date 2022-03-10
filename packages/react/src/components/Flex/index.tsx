import React from 'react'

import { styled } from '@ui/web'

const StyledBox = styled('div', { display: 'flex' })

export type BoxProps = React.ComponentProps<typeof StyledBox> & {
  /* props */
}
export const Box = ({ children, ...props }: BoxProps) => (
  <StyledBox {...props}>{children}</StyledBox>
)