import { createStitches, defaultThemeMap } from '@stitches/react'
import type * as Stitches from '@stitches/react'
import { colors } from '../colors'

import { space } from './space'

export const { styled, css, globalCss, getCssText } = createStitches({
  media: {
    bp1: '(min-width: 640px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
  },

  themeMap: {
    ...defaultThemeMap,
    width: 'space',
    height: 'space',
    opacity: 'opacity',
  },
  theme: {
    colors,
    space,

    fonts: {
      heading: 'Poppins, sans-serif',
      primary: 'Open Sans, sans-serif',
    },

    borderWidths: {
      thin: '1px',
      medium: '1.5px',
      thick: '2px',
      heavy: '4px',
    },

    fontSizes: {
      10: '0.625rem',
      12: '0.75rem',
      14: '0.875rem',
      16: '1rem',
      18: '1.125rem',
    },

    letterSpacings: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },

    radii: {
      xs: '2.5px',
      sm: '5px',
      md: '10px',
      lg: '20px',
      full: '9999px',
    },

    opacity: {
      default: '100%',
      semiOpaque: '90%',
      intense: '75%',
      medium: '50%',
      light: '25%',
      semiTransparent: '10%',
      transparent: '0%',
    },

    zIndices: {
      overlay: 9995,
      modal: 9999,
    },
    shadows: {
      borderError: `0 0 0 1px ${colors['status-error']}`,
      borderNormal: `0 0 0 1px ${colors['neutral-light-deep']}`,
      borderHover: `0 0 0 1px ${colors['brand-primary-up']}`,
      borderActive: `0 0 0 2px ${colors['brand-primary-up']}`,
      focus: '0 0 5px 0 rgba(0, 0, 0, .8)',
    },
  },

  utils: {
    py: (value: Stitches.ScaleValue<'space'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    px: (value: Stitches.ScaleValue<'space'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    my: (value: Stitches.ScaleValue<'space'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    mx: (value: Stitches.ScaleValue<'space'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
  },
})
