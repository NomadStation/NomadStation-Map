import { pxToRem } from '../utils/utils'

export const theme = {
  font: {
    roboto: 'Roboto, sans-serif',
  },
  color: {
    white: '#ffffff',
  },
  radius: {},
  boxShadow: {},
  images: {},
  breakpoint: {
    phone: pxToRem(360),
    tabletV: pxToRem(640),
    tabletH: pxToRem(960),
    laptop: pxToRem(1280),
    desktop: pxToRem(1600),
  },
  maxWidth: pxToRem(1100),
}
