import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from 'styled-components/native'

import { DiscountIcon, HomeIcon, LocationIcon } from 'src/icons'

import { Stacks } from './routes'
import { DiscountStack, HomeStack, LocationStack } from './stacks'

const Tab = createBottomTabNavigator()

export const TabBar = () => {
  const { blue, grey } = useTheme()
  const [tabVisible, setTabVisible] = useState(true)
  const display = tabVisible ? 'flex' : 'none'

  return (
    <Tab.Navigator
      initialRouteName={Stacks.Home}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: blue,
        tabBarInactiveTintColor: grey,
        tabBarStyle: {
          display,
        },
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name={Stacks.Discount}
        component={DiscountStack}
        options={{
          tabBarIcon: DiscountIcon,
        }}
      />
      <Tab.Screen
        name={Stacks.Home}
        options={{
          tabBarIcon: HomeIcon,
        }}>
        {(props) => <HomeStack setTabVisible={setTabVisible} {...props} />}
      </Tab.Screen>
      <Tab.Screen
        name={Stacks.Location}
        component={LocationStack}
        options={{
          tabBarIcon: LocationIcon,
        }}
      />
    </Tab.Navigator>
  )
}
