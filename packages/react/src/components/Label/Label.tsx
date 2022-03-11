import React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'

import { styled } from '../../web'
import { Label as LabelCss } from '../../styles'

const StyledLabel = styled(LabelPrimitive.Root, LabelCss)

export type LabelProps = React.ComponentProps<typeof StyledLabel> & {
  /* props */
}

export const Label = ({ ...props }: LabelProps) => <StyledLabel {...props} />

export default Label
