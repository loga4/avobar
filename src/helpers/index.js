import { Dimensions, Platform } from 'react-native';

export const deviceWidth = Dimensions.get('screen').width
export const deviceHeight = Dimensions.get('window').height

export const Sizes = {
  defaultModalPadding: 16,
  defaultHorizontalPadding: 16,
}

export const getPassedStyles = (style) => {
  return Array.isArray(style) ? Object.assign({}, ...style) : style
}

const X_WIDTH = 375
const X_HEIGHT = 812

const XSMAX_WIDTH = 414
const XSMAX_HEIGHT = 896

const I12_PRO_WIDTH = 390
const I12_PRO_HEIGHT = 844

const I12_PRO_MAX_WIDTH = 428
const I12_PRO_MAX_HEIGHT = 926

export const isIphoneX =
  Platform.OS === 'ios' &&
  !Platform.isPad &&
  !Platform.isTVOS &&
  ((deviceWidth === X_WIDTH && deviceHeight === X_HEIGHT)
    || (deviceWidth === XSMAX_WIDTH && deviceHeight === XSMAX_HEIGHT)
    || (deviceWidth === I12_PRO_WIDTH && deviceHeight === I12_PRO_HEIGHT)
    || (deviceWidth === I12_PRO_MAX_WIDTH && deviceHeight === I12_PRO_MAX_HEIGHT)
  )

export const isAndroid = Platform.OS === 'android'

export const safeTop = isIphoneX || isAndroid ? 44 : 24
