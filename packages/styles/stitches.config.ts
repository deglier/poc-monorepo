import { createStitches } from '@stitches/core'
import { slate, sky } from '@radix-ui/colors'

export const { createTheme, css, globalCss, reset, getCssText } =
  createStitches({
    theme: {
      colors: {
        ...slate,
        ...sky,
      },
    },
  })
