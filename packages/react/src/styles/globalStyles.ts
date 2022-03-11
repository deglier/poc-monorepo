import { globalCss } from '../web'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    border: 'none',
    boxSizing: 'border-box',
  },
  'body, button': {
    fontFamily: '$primary',
  },
  body: {
    background: '$background',
    color: '$text',
  },
  'h1, h2, h3, h4, h5, h6': {
    color: '$title',
    fontFamily: '$heading',
  },
})
