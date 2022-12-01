import { colors } from './colors'
import { Fonts } from './fonts'

export const AppTheme = {
  ...colors,
  ...Fonts,
  tabBar: {
    inActive: colors.grey,
    active: colors.blue,
  },
}
