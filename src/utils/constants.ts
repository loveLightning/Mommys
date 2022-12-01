import { Dimensions, Platform } from 'react-native'
import {
  HeaderStyleInterpolators,
  StackCardInterpolationProps,
  StackNavigationOptions,
  TransitionSpecs,
} from '@react-navigation/stack'

export const isIOS = Platform.OS === 'ios'

export const deviceWidth = Dimensions.get('window').width

export const deviceHeight = Dimensions.get('window').height

export const isSmall = deviceWidth < 330

export const URL = 'http://192.168.34.121:8000/storage'
export const generalEmail = 'mommy@gmail.com'
export const webSite = 'https://www.google.co.in/'
export const linkFacebook = 'https://ru-ru.facebook.com/'
export const linkInstagram = 'https://www.instagram.com/'

export const horizontalAnimation: StackNavigationOptions = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  cardStyleInterpolator: ({
    current,
    layouts,
  }: StackCardInterpolationProps) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    }
  },
}
