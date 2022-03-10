import { css } from '@ui/web'

export const Button = css({
  display: 'inline-block',
  borderRadius: '$full',
  px: '$8',
  py: '$4',
  fontFamily: '$primary',
  fontWeight: 600,
  fontSize: '$16',
  lineHeight: 1,
  variants: {
    variant: {
      primary: {
        backgroundColor: '$brand-primary-pure',
        color: '$neutral-light-pure',
      },
      highligh02: {
        backgroundColor: '$brand-highlight-02',
        color: '$brand-primary-deep',
      },
    },
    width: {
      full: {
        width: '100%',
      },
      auto: {
        width: 'auto',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})
