import React from 'react'

import { styled } from '../../web'
import { FormControl as FormControlCss } from '../../styles'

const StyledFormControl = styled('fieldset', FormControlCss)

export type FormControlProps = React.ComponentProps<
  typeof StyledFormControl
> & {
  space?: number
  reverse?: boolean
  /* props */
}

export const FormControl = ({
  children,
  space,
  reverse = false,
  ...props
}: FormControlProps) => {
  const spaceRem: String = space ? `${space / 16}rem` : '0'
  return (
    <StyledFormControl
      {...props}
      css={{ $$space: spaceRem, '$$space-reverse': reverse ? 1 : 0 }}
    >
      {children}
    </StyledFormControl>
  )
}
