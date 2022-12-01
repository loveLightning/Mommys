import type { ParamListBase, RouteProp } from '@react-navigation/native'
import { useNavigation as useNativeNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { NewsTypes } from 'src/components/home-page/types'

export enum Navigators {
  Main = 'Main',
}

export enum Screens {
  Discount = 'DiscountScreen',
  Home = 'HomeScreen',
  Location = 'LocationScreen',
  HomeDescription = 'HomeDescriptionScreen',
  Profile = 'ProfileScreen',
}

export enum Stacks {
  Discount = 'DiscountStack',
  Home = 'HomeStack',
  Location = 'LocationStack',
}

type Routes = Navigators | Screens | Stacks

export const useNavigation = () =>
  useNativeNavigation<NativeStackNavigationProp<ParamListBase, Routes>>()

interface WithContent {
  content: NewsTypes
}

export type HomeDescriptionProp = RouteProp<
  { HomeDescriptionScreen: WithContent },
  'HomeDescriptionScreen'
>
