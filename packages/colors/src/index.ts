// import { slate, sky } from '@radix-ui/colors'

const baseColors = {
  'brand-primary-up': '#A5B9FF',
  'brand-primary-pure': '#6270FF',
  'brand-primary-deep': '#2C2469',

  'brand-highlight-02': '#FFC025',
  'brand-highlight-03': '#C2C9FF',
  'brand-highlight-04': '#F21D74',

  'neutral-light-pure': '#FFFFFF',
  'neutral-light-deep': '#DCDCE5',

  'neutral-dark-down': '#7D8197',

  'status-error': '#FF4040',
}

const aliases = {
  background: '$neutral-light-pure',
  title: '$brand-primary-deep',
  text: '$neutral-dark-down',
}

export const colors = { ...baseColors, ...aliases }
