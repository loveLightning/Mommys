import React, { useEffect } from 'react'
import { StatusBar, StatusBarStyle } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { enableScreens } from 'react-native-screens'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from 'styled-components'

import { AppTheme } from 'src/theme'

import { RootNavigation } from './navigation'
import { isIOS } from './utils'

const statusBarStyle: StatusBarStyle = isIOS ? 'dark-content' : 'default'

const App = () => {
  useEffect(() => {
    if (!isIOS) {
      return
    }
    enableScreens(false)
  }, [])

  return (
    <ThemeProvider theme={AppTheme}>
      <NavigationContainer>
        <SafeAreaProvider>
          <StatusBar barStyle={statusBarStyle} />
          <RootNavigation />
        </SafeAreaProvider>
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App
