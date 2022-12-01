import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { LocationScreen } from 'src/screens'

import { Screens } from '../routes'

const Location = createNativeStackNavigator()

export const LocationStack = () => {
  return (
    <Location.Navigator initialRouteName={Screens.Location}>
      <Location.Screen
        name={Screens.Location}
        options={{ headerShown: false }}
        component={LocationScreen}
      />
    </Location.Navigator>
  )
}
