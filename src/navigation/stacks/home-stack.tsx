import React, { useEffect } from 'react'
import { getFocusedRouteNameFromRoute, Route } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { HomeDescriptionScreen, HomeScreen, ProfileScreen } from 'src/screens'
import { horizontalAnimation } from 'src/utils'

import { Screens } from '../routes'

interface Props {
  route: Route<string>
  setTabVisible(val: boolean): void
}

const tabVisibleValues: Record<string, boolean> = {
  [Screens.Home]: true,
  [Screens.HomeDescription]: false,
  [Screens.Profile]: false,
}

const Home = createStackNavigator()

export const HomeStack = ({ setTabVisible, route }: Props) => {
  const currentScreen = getFocusedRouteNameFromRoute(route)

  useEffect(() => {
    if (!currentScreen) return

    setTabVisible(tabVisibleValues[currentScreen])
  }, [currentScreen, setTabVisible])

  return (
    <Home.Navigator initialRouteName={Screens.Home}>
      <Home.Screen
        name={Screens.Home}
        component={HomeScreen}
        options={horizontalAnimation}
      />
      <Home.Screen
        name={Screens.HomeDescription}
        options={{ headerShown: false }}
        component={HomeDescriptionScreen}
      />
      <Home.Screen
        name={Screens.Profile}
        component={ProfileScreen}
        options={horizontalAnimation}
      />
    </Home.Navigator>
  )
}
