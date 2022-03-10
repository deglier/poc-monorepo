import { css } from '@ui/web'

export const Button = css({
  display: 'inline-block',
  borderRadius: '$full',
  px: '$8',
  py: '$4',
  fontFamily: '$primary',
  fontWeight: 500,
  fontSize: '$16',
  textTransform: 'uppercase',
  letterSpacing: '$widest',
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
  },
  defaultVariants: {
    variant: 'highligh02',
  },
})
