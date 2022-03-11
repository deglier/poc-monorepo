export default {
  vertical: {
    flexDirection: 'column',
    '> :not([hidden]) ~ :not([hidden])': {
      marginTop: '$$space',
      marginBottom: '0',
    },
  },
  'vertical-reverse': {
    flexDirection: 'column-reverse',
    '> :not([hidden]) ~ :not([hidden])': {
      marginTop: '0',
      marginBottom: '$$space',
    },
  },
  horizontal: {
    flexDirection: 'row',
    '> :not([hidden]) ~ :not([hidden])': {
      marginLeft: '$$space',
      marginRight: '0',
    },
  },
  'horizontal-reverse': {
    flexDirection: 'row-reverse',
    '> :not([hidden]) ~ :not([hidden])': {
      marginLeft: '0',
      marginRight: '$$space',
    },
  },
}
