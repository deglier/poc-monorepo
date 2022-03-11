import { css } from '../../web'
import { colors } from '../../colors'

export const Input = css({
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$sm',
  padding: '$3',
  fontSize: '$14',
  lineHeight: 1,
  color: '$neutral-dark-down',
  boxShadow: '$borderNormal',
  transition: 'box-shadow 0.2s ease-in-out',
  '&::placeholder': {
    color: '$neutral-light-deep',
  },
  '&:not(:placeholder-shown)': {
    boxShadow: '$borderHover',
  },
  '&:hover': {
    boxShadow: '$borderHover',
  },
  '&:focus': {
    boxShadow: '$borderActive, $focus',
  },
  '@bp1': {
    fontSize: '$16',
    padding: '$4',
  },
  variants: {
    error: {
      true: {
        boxShadow: '$borderError',
        color: '$status-error',
        '&:not(:placeholder-shown)': {
          boxShadow: '$borderError',
        },
      },
    },
  },
  // border: '1px solid $neutral-light-deep',
  // borderStyle: 'solid',
  // borderWidth: '$thin',
  // borderColor: '$neutral-light-deep',
})
