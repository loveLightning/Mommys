import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { DiscountScreen } from 'src/screens'

import { Screens } from '../routes'

const Discount = createNativeStackNavigator()

export const DiscountStack = () => {
  return (
    <Discount.Navigator initialRouteName={Screens.Discount}>
      <Discount.Screen
        name={Screens.Discount}
        options={{ headerShown: false }}
        component={DiscountScreen}
      />
    </Discount.Navigator>
  )
}
