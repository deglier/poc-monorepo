import { css } from '../../web'
import flexAlign from '../helpers/flexAlign'
import flexDirection from '../helpers/flexDirection'

export const FormControl = css({
  all: 'unset',
  display: 'inline-flex',
  variants: {
    direction: flexDirection,
    align: flexAlign,
  },
})
